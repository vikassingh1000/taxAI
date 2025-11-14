/**
 * Tax Alert Ingestion Service
 * Combines AI extraction with database storage
 *
 * This service orchestrates the complete pipeline:
 * 1. Extract structured data from tax notification text using AI
 * 2. Save the extracted alert to the database
 * 3. Return the saved alert with ID
 */

import { getDbService } from '../db/taxAlertService';
import type { TaxAlert as AiTaxAlert } from '../ai/taxAlertExtraction';
import type { TaxAlert as DbTaxAlert } from '../db/schema';

// Dynamic import to work around tsx/ESM module loading issues
async function extractTaxAlert(text: string, apiKey?: string): Promise<AiTaxAlert> {
  const { default: TaxAlertExtractionService } = await import('../ai/taxAlertExtraction');
  const service = new (TaxAlertExtractionService as any)(apiKey);
  return service.extractTaxAlert(text);
}

/**
 * Ingestion options
 */
export interface IngestionOptions {
  sourceDocument?: string;      // Optional: PDF filename or reference
  saveSourceText?: boolean;      // Whether to store original text in DB
  minConfidence?: number;        // Minimum confidence threshold (default: 0.0)
  apiKey?: string;              // Optional: Override API key
}

/**
 * Ingestion result
 */
export interface IngestionResult {
  success: boolean;
  alert?: DbTaxAlert;           // Saved alert with database ID
  aiOutput?: AiTaxAlert;        // Raw AI extraction output
  error?: string;
  confidence?: number;
  savedToDb?: boolean;
  warnings?: string[];
}

/**
 * Tax Alert Ingestion Service
 * Combines AI extraction and database persistence
 */
export class TaxAlertIngestionService {
  private db = getDbService();

  /**
   * Ingest a tax notification text
   * Extracts with AI and saves to database
   *
   * @param text - Tax notification text (from PDF or other source)
   * @param options - Ingestion options
   * @returns Ingestion result with saved alert
   */
  async ingest(text: string, options: IngestionOptions = {}): Promise<IngestionResult> {
    const startTime = Date.now();
    const warnings: string[] = [];

    try {
      console.log(`🚀 Starting tax alert ingestion...`);
      console.log(`📝 Text length: ${text.length} characters`);

      // Step 1: Validate input
      if (!text || text.trim().length < 50) {
        return {
          success: false,
          error: 'Text is too short. Minimum 50 characters required.',
          savedToDb: false
        };
      }

      // Step 2: Extract with AI
      console.log(`🤖 Extracting with AI...`);
      const aiOutput = await extractTaxAlert(text, options.apiKey);

      const confidence = aiOutput.confidence.overall_score;
      console.log(`✅ AI extraction complete (confidence: ${(confidence * 100).toFixed(1)}%)`);

      // Step 3: Check confidence threshold
      const minConfidence = options.minConfidence || 0.0;
      if (confidence < minConfidence) {
        warnings.push(
          `Confidence ${(confidence * 100).toFixed(1)}% below threshold ${(minConfidence * 100).toFixed(1)}%`
        );
        console.log(`⚠️  ${warnings[0]}`);
      }

      // Step 4: Save to database
      console.log(`💾 Saving to database...`);
      const savedAlert = await this.db.createFromAiOutput(
        aiOutput,
        options.sourceDocument,
        options.saveSourceText ? text : undefined
      );

      const duration = Date.now() - startTime;
      console.log(`✅ Ingestion complete in ${duration}ms`);
      console.log(`📊 Saved alert ID: ${savedAlert.id}`);

      return {
        success: true,
        alert: savedAlert,
        aiOutput,
        confidence,
        savedToDb: true,
        warnings: warnings.length > 0 ? warnings : undefined
      };

    } catch (error) {
      const duration = Date.now() - startTime;
      const errorMsg = error instanceof Error ? error.message : String(error);

      console.error(`❌ Ingestion failed after ${duration}ms:`, errorMsg);

      return {
        success: false,
        error: errorMsg,
        savedToDb: false
      };
    }
  }

  /**
   * Ingest multiple tax notification texts in batch
   *
   * @param texts - Array of tax notification texts
   * @param options - Ingestion options (applied to all)
   * @returns Array of ingestion results
   */
  async ingestBatch(
    texts: string[],
    options: IngestionOptions = {}
  ): Promise<IngestionResult[]> {
    console.log(`🚀 Starting batch ingestion of ${texts.length} documents...`);

    const results: IngestionResult[] = [];

    for (let i = 0; i < texts.length; i++) {
      console.log(`\n📄 Processing document ${i + 1}/${texts.length}...`);

      const result = await this.ingest(texts[i], {
        ...options,
        sourceDocument: options.sourceDocument || `batch_document_${i + 1}.txt`
      });

      results.push(result);

      if (result.success) {
        console.log(`✅ Document ${i + 1} ingested successfully (ID: ${result.alert?.id})`);
      } else {
        console.log(`❌ Document ${i + 1} failed: ${result.error}`);
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failureCount = results.length - successCount;

    console.log(`\n📊 Batch ingestion complete:`);
    console.log(`   ✅ Successful: ${successCount}`);
    console.log(`   ❌ Failed: ${failureCount}`);

    return results;
  }

  /**
   * Get ingestion statistics
   * Returns database stats
   */
  async getStats() {
    return this.db.getStats();
  }

  /**
   * Get all ingested alerts
   */
  async getAllAlerts(limit: number = 100, offset: number = 0) {
    return this.db.getAll(limit, offset);
  }

  /**
   * Get alert by ID
   */
  async getAlertById(id: number) {
    return this.db.getById(id);
  }

  /**
   * Search alerts
   */
  async searchAlerts(keyword: string, limit: number = 100) {
    return this.db.search(keyword, limit);
  }

  /**
   * Get alerts by filters
   */
  async getAlertsByFilter(filter: {
    country?: string;
    priority?: string;
    taxType?: string;
    minConfidence?: number;
  }, limit: number = 100) {
    if (filter.country) {
      return this.db.getByCountry(filter.country, limit);
    }
    if (filter.priority) {
      return this.db.getByPriority(filter.priority, limit);
    }
    if (filter.taxType) {
      return this.db.getByTaxType(filter.taxType, limit);
    }
    if (filter.minConfidence !== undefined) {
      return this.db.getByConfidence(filter.minConfidence, limit);
    }

    return this.db.getAll(limit);
  }
}

/**
 * Singleton instance
 */
let ingestionServiceInstance: TaxAlertIngestionService | null = null;

/**
 * Get or create ingestion service instance
 */
export function getIngestionService(): TaxAlertIngestionService {
  if (!ingestionServiceInstance) {
    ingestionServiceInstance = new TaxAlertIngestionService();
  }
  return ingestionServiceInstance;
}

export default TaxAlertIngestionService;
