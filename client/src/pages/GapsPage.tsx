import GapAssessment, { type Gap } from "@/components/GapAssessment";
import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, AlertTriangle } from "lucide-react";

export default function GapsPage() {
  const gaps: Gap[] = [
    {
      id: "1",
      type: "compliance",
      title: "Missing CbCR Filing - India",
      description: "AI Analysis: Country-by-Country Report for FY2024 not filed. Deadline approaching in 30 days. Cross-reference engine detected master file update in Germany (filed 10/15) but corresponding Indian CbCR missing. Pattern recognition indicates this gap emerged after organizational restructure in Q2 2024. High penalty risk: INR 500K + potential transfer pricing audit trigger.",
      jurisdiction: "India",
      severity: "high",
      dueDate: "2025-12-15",
    },
    {
      id: "2",
      type: "position",
      title: "Transfer Pricing Documentation Gap - China",
      description: "AI Analysis: Intercompany service agreements lack contemporaneous documentation required under new SAT Announcement 6 rules. ML model detected documentation quality score of 42/100 (threshold: 75). Specifically missing: detailed service descriptions, benefit test analysis, and benchmarking study for R&D cost-sharing. Historical audit data shows 89% probability of adjustment when documentation gaps exceed 3 items. Estimated exposure: $2.8M-4.1M based on similar cases.",
      jurisdiction: "China",
      severity: "high",
      dueDate: "2025-12-31",
    },
    {
      id: "3",
      type: "opportunity",
      title: "Unclaimed R&D Tax Credits - USA",
      description: "AI Analysis: Renewable energy R&D activities in Q1-Q3 2024 eligible for Section 41 credits + IRA enhanced incentives totaling $3.2M not claimed in prior year filing. Natural language processing of project documentation identified 47 qualifying activities across wind turbine efficiency and energy storage initiatives. Confidence level: 94%. Recommendation: File amended return with Form 6765 and substantiation memo. IRS acceptance probability: 87% based on similar fact patterns.",
      jurisdiction: "USA",
      severity: "medium",
    },
    {
      id: "4",
      type: "risk",
      title: "PE Exposure - Germany",
      description: "AI Analysis: Increased local activities may create permanent establishment under updated treaty interpretation (BMF guidance 10/2024). Activity pattern recognition detected: (1) German employees spending 180+ days on project sites, (2) Local contract signature authority granted in August, (3) Warehouse established with 6-month+ inventory cycle. PE probability score: 76%. Potential tax impact: €4.5M annually if PE declared + 5.5% trade tax. Recommended actions: Restructure activities, obtain advance ruling, or file protective returns.",
      jurisdiction: "Germany",
      severity: "high",
    },
    {
      id: "5",
      type: "compliance",
      title: "E-Invoicing Mandate - France",
      description: "AI Analysis: New B2B e-invoicing requirements effective Q1 2026. System integration gap identified. Current ERP (SAP S/4HANA) requires Chorus Pro API integration + Peppol network connection. Complexity score: 8/10. Timeline risk: Implementation requires 90-120 days based on similar deployments, leaving only 47-day buffer. Non-compliance penalties: 15€ per invoice (estimated annual exposure: €450K based on 30K invoices/year). Competitor analysis shows 67% have already initiated integration projects.",
      jurisdiction: "France",
      severity: "medium",
      dueDate: "2026-01-01",
    },
    {
      id: "6",
      type: "position",
      title: "Pillar Two GloBE Calculation - UK",
      description: "AI Analysis: Global minimum tax calculation methodology requires validation against OECD safe harbors for FY2025. Preliminary ETR calculation shows 13.2% (below 15% threshold) due to: (1) Qualified refundable tax credits (IRA benefits) reducing covered taxes, (2) Stock-based compensation timing differences, (3) Substance-based income exclusion computation errors. GloBE top-up tax exposure estimated at £12.3M. Safe harbor eligibility: CbCR safe harbor fails, but de minimis exception may apply (revenue £18.2M in UK). Recommendation: Detailed substance calculation and potential restructuring of IP ownership.",
      jurisdiction: "UK",
      severity: "high",
      dueDate: "2025-12-20",
    },
    {
      id: "7",
      type: "opportunity",
      title: "Renewable Energy Credits - India",
      description: "AI Analysis: Solar project investments in Rajasthan (commissioned Q2 2024) qualify for accelerated depreciation benefits at 40% (vs standard 15%) not yet claimed in advance tax calculations. Additionally eligible for: (1) Interest subsidy under MNRE scheme (~INR 8M over 5 years), (2) Generation-based incentive at INR 0.75/kWh, (3) Excise duty exemption on equipment. Total unclaimed value: INR 42M NPV. Claim probability: 98% based on project documentation review and precedent analysis.",
      jurisdiction: "India",
      severity: "low",
    },
    {
      id: "8",
      type: "risk",
      title: "Withholding Tax Exposure - China",
      description: "AI Analysis: Service payments to Singapore parent ($18.6M in 2024) may trigger 10% withholding under revised tax treaty interpretation (SAT Bulletin 37 implications). Current position: services classified as 'technical services' exempt under Article 12(3). Risk factors: (1) SAT's narrowing interpretation in recent rulings, (2) Benefit test may fail due to primary beneficiary analysis, (3) Similar transactions audited in 3 peer companies with 100% assessment rate. Estimated exposure: $1.86M + interest + 50% penalty = $3.1M total. Mitigation: Restructure as cost reimbursement or obtain advance ruling.",
      jurisdiction: "China",
      severity: "medium",
    },
    {
      id: "9",
      type: "compliance",
      title: "Pillar Two IIR Filing - France",
      description: "AI Analysis: Income Inclusion Rule (IIR) filing required by 12/31/2025 for French parent company. AI detected 14 low-taxed constituent entities across 6 jurisdictions requiring top-up tax calculation. GloBE Information Return complexity score: 9.5/10 due to: (1) Joint ventures requiring equity method adjustments, (2) Multi-tiered holding structure, (3) Push-down accounting implications. Estimated preparation time: 450-600 hours. Current resource allocation: insufficient. Recommend: Engage Big 4 for GIR preparation + implement Pillar Two tax engine software.",
      jurisdiction: "France",
      severity: "high",
      dueDate: "2025-12-31",
    },
    {
      id: "10",
      type: "opportunity",
      title: "Energy Efficiency Tax Deduction - USA",
      description: "AI Analysis: Section 179D commercial building energy efficiency deduction available for 3 facilities upgraded in 2024 (total sq ft: 2.4M). Energy models show 30-40% reduction vs ASHRAE baseline, qualifying for $2.50-5.00/sq ft deduction. Estimated benefit: $8.2M. Requirements: (1) Obtain certification from qualified professional, (2) Substantiate costs >$0.50/sq ft threshold, (3) Document prevailing wage compliance for enhanced rates. AI cross-check with utility bills confirms savings. Claim confidence: 91%.",
      jurisdiction: "USA",
      severity: "medium",
    },
    {
      id: "11",
      type: "position",
      title: "Controlled Foreign Corporation (CFC) Attribution - USA",
      description: "AI Analysis: Subpart F income calculations for 8 CFCs may overstate GILTI inclusion by $12.4M due to: (1) Incorrect high-tax exclusion elections, (2) Qualified business asset investment (QBAI) understated by 18% (missing leased assets), (3) Foreign tax credit pooling errors. Recomputation using corrected methodology shows potential refund of $3.1M for tax years 2022-2024. Risk: Amended returns may trigger IRS examination. Probability of sustaining position: 78% based on technical analysis and supporting case law.",
      jurisdiction: "USA",
      severity: "high",
    },
    {
      id: "12",
      type: "risk",
      title: "VAT Recovery Limitation - UK",
      description: "AI Analysis: Input VAT recovery on mixed-use assets (corporate aircraft, dual-purpose vehicles) may be overstated. HMRC's VAT Notice 700/64 analysis shows recovery position exceeds safe harbor by 23%. Audit probability model: 68% likelihood of HMRC challenge within 24 months. Exposure: £2.8M input VAT disallowance + assessments for prior 4-year period = £11.2M + interest. Recommendation: Voluntary disclosure under Code of Practice 9 would reduce penalties from 100% to 30%; net savings: £5.6M.",
      jurisdiction: "UK",
      severity: "high",
    },
    {
      id: "13",
      type: "compliance",
      title: "Indirect Tax Compliance - India (GST)",
      description: "AI Analysis: Electronic credit ledger reconciliation shows INR 34M in input tax credit claims without corresponding supplier filings in GSTR-2A (mismatch rate: 18%). Common causes: (1) Supplier filing delays, (2) GSTIN mismatches, (3) Invoice date misalignment. Compliance risk: ITC reversal + 18% interest + potential penalty (100% of tax). Rule 36(4) requires reversal if supplier doesn't file within 180 days. Recommendation: Immediate supplier outreach campaign + file GSTR-3B with protective reversal to avoid interest.",
      jurisdiction: "India",
      severity: "high",
      dueDate: "2025-12-10",
    },
    {
      id: "14",
      type: "opportunity",
      title: "Film & TV Production Tax Credit - UK",
      description: "AI Analysis: Corporate video production expenses ($4.8M in 2024) for training, marketing, and technical documentation may qualify for Audio-Visual Expenditure Credit at 34%. AI classification of expenditures identified: (1) $2.1M in qualifying production costs, (2) 80% UK spend requirement met, (3) Cultural test likely passed based on content analysis. Estimated credit: $714K. Note: Recent HMRC manuals clarify corporate videos can qualify if intended for public release. Claim success probability: 62% (moderate due to novel interpretation).",
      jurisdiction: "UK",
      severity: "low",
    },
    {
      id: "15",
      type: "position",
      title: "Customs Valuation - China",
      description: "AI Analysis: Transfer pricing for intercompany imports may not align with customs valuation methods, creating potential adjustments. Discrepancy detected: TP arm's length price (cost + 8% markup) vs customs declared value (cost + 3%). Undervaluation exposure: RMB 48M over 3 years. Customs authorities increasingly sharing data with tax bureau. Risk: (1) Import duty assessments (RMB 7.2M), (2) VAT on adjustment (RMB 6.2M), (3) Penalties up to 100%. Recommendation: Conduct advance pricing arrangement (APA) covering both tax and customs, or adjust customs values prospectively with protective disclosure.",
      jurisdiction: "China",
      severity: "high",
    },
  ];

  const aiInsights = [
    {
      title: "Risk Concentration Alert",
      description: "68% of high-severity gaps concentrated in China and UK jurisdictions. Historical pattern indicates regulatory focus shifting to these markets.",
      icon: AlertTriangle,
      color: "text-destructive",
    },
    {
      title: "Opportunity Value",
      description: "$12.1M in unclaimed tax benefits identified across R&D credits, renewable incentives, and efficiency deductions. 89% claim success probability.",
      icon: TrendingUp,
      color: "text-[#22C55E]",
    },
    {
      title: "Predicted Audit Triggers",
      description: "ML model identifies 4 gaps with >70% audit probability in next 18 months. Proactive remediation could reduce exposure by $8.3M.",
      icon: Brain,
      color: "text-primary",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Cross-Reference Engine - Gap Assessment</h1>
        <p className="text-muted-foreground mt-1">AI-powered identification of compliance, position, opportunity, and risk gaps with predictive analytics</p>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {aiInsights.map((insight, idx) => {
            const Icon = insight.icon;
            return (
              <Card key={idx} className="p-4">
                <div className="flex items-start gap-3">
                  <Icon className={`h-5 w-5 mt-1 ${insight.color}`} />
                  <div>
                    <h3 className="font-semibold mb-1">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <GapAssessment gaps={gaps} onGapClick={(gap) => console.log("Gap clicked:", gap.title)} />
      </div>
    </div>
  );
}
