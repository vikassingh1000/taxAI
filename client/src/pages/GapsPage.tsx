import GapAssessment, { type Gap } from "@/components/GapAssessment";

export default function GapsPage() {
  const gaps: Gap[] = [
    {
      id: "1",
      type: "compliance",
      title: "Missing CbCR Filing - India",
      description: "Country-by-Country Report for FY2024 not filed. Deadline approaching in 30 days.",
      jurisdiction: "India",
      severity: "high",
      dueDate: "2025-12-15",
    },
    {
      id: "2",
      type: "position",
      title: "Transfer Pricing Documentation Gap - China",
      description: "Intercompany service agreements lack contemporaneous documentation required under new rules.",
      jurisdiction: "China",
      severity: "high",
      dueDate: "2025-12-31",
    },
    {
      id: "3",
      type: "opportunity",
      title: "Unclaimed R&D Tax Credits - USA",
      description: "Renewable energy R&D activities eligible for enhanced tax credits not claimed in prior year.",
      jurisdiction: "USA",
      severity: "medium",
    },
    {
      id: "4",
      type: "risk",
      title: "PE Exposure - Germany",
      description: "Increased local activities may create permanent establishment risk under updated treaty interpretation.",
      jurisdiction: "Germany",
      severity: "high",
    },
    {
      id: "5",
      type: "compliance",
      title: "E-Invoicing Mandate - France",
      description: "New B2B e-invoicing requirements effective Q1 2026. System integration required.",
      jurisdiction: "France",
      severity: "medium",
      dueDate: "2026-01-01",
    },
    {
      id: "6",
      type: "position",
      title: "Pillar Two GloBE Calculation - UK",
      description: "Global minimum tax calculation methodology requires validation against OECD safe harbors.",
      jurisdiction: "UK",
      severity: "high",
      dueDate: "2025-12-20",
    },
    {
      id: "7",
      type: "opportunity",
      title: "Renewable Energy Credits - India",
      description: "Solar project investments qualify for accelerated depreciation benefits not yet claimed.",
      jurisdiction: "India",
      severity: "low",
    },
    {
      id: "8",
      type: "risk",
      title: "Withholding Tax Exposure - China",
      description: "Service payments may trigger withholding obligations under revised tax treaty interpretation.",
      jurisdiction: "China",
      severity: "medium",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Cross-Reference Engine - Gap Assessment</h1>
        <p className="text-muted-foreground mt-1">AI-powered identification of compliance, position, opportunity, and risk gaps</p>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <GapAssessment gaps={gaps} onGapClick={(gap) => console.log("Gap clicked:", gap.title)} />
      </div>
    </div>
  );
}
