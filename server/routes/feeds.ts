import { Router } from "express";

const router = Router();

const feeds = [
      {
        id: "1",
        timestamp: "2 minutes ago",
        type: "regulatory",
        title: "France: DGFIP Issues CBAM Implementation Guidance",
        jurisdiction: "France",
        priority: "high",
        summary: "Tax authority publishes 142-page technical guidance on carbon border adjustment mechanism certificate calculations for petroleum products. Key change: Scope 3 upstream emissions now required for crude oil imports effective immediately.",
        category: "Carbon Emissions",
      },
      {
        id: "2",
        timestamp: "8 minutes ago",
        type: "alert",
        title: "UK Risk Score Increased: 62 → 71",
        jurisdiction: "UK",
        priority: "critical",
        summary: "ML model detected significant risk escalation triggered by: (1) EPL rate increase announcement, (2) Transfer pricing audit initiated for 2 peer companies, (3) Parliamentary discussion of additional windfall measures. Recommended action: Review UK investment thesis.",
        category: "Risk Management",
      },
      {
        id: "3",
        timestamp: "15 minutes ago",
        type: "market",
        title: "Brent Crude Crosses $85/bbl Threshold",
        priority: "medium",
        summary: "Price movement triggers tax implications: (1) UK EPL higher bracket activated, (2) Kazakhstan excess profit tax now applicable, (3) Trinidad SPT rate increases to 30%. Estimated quarterly impact: $24M additional tax burden.",
        category: "Energy Market",
      },
      {
        id: "4",
        timestamp: "23 minutes ago",
        type: "energy",
        title: "US Treasury Releases PTC Wage Requirement Safe Harbors",
        jurisdiction: "USA",
        priority: "high",
        summary: "Final regulations provide three safe harbor options for prevailing wage compliance on offshore wind projects. Most favorable option: Annual certification by qualified third-party satisfies requirements. Applies retroactively to projects that began construction in 2024.",
        category: "Energy Policy",
      },
      {
        id: "5",
        timestamp: "34 minutes ago",
        type: "competitor",
        title: "Shell Announces $4.2B UK Investment Deferral",
        jurisdiction: "UK",
        priority: "medium",
        summary: "Competitor press release cites EPL extension and reduced investment allowance as primary factors in capital reallocation decision. Projects deferred: 3 North Sea developments (combined 180 MMboe). Industry coalition forming to lobby for fiscal term improvements.",
        category: "Investment",
      },
      {
        id: "6",
        timestamp: "41 minutes ago",
        type: "regulatory",
        title: "China SAT: New Transfer Pricing Circular Released",
        jurisdiction: "China",
        priority: "high",
        summary: "SAT Announcement 28 published with immediate effect. Key provisions: (1) Contemporaneous documentation deadline moved to May 31 (from June 30), (2) Hard-to-value intangibles regulations tightened, (3) Cost contribution arrangement approval now mandatory. Compliance impact: 45-day acceleration of documentation timelines.",
        category: "Transfer Pricing",
      },
      {
        id: "7",
        timestamp: "52 minutes ago",
        type: "alert",
        title: "Gap Identified: Missing Master File Update",
        jurisdiction: "USA",
        priority: "critical",
        summary: "Cross-reference engine detected: US master file last updated March 2024, but organizational restructure completed in July 2024. Gap creates CbCR consistency risk across 6 jurisdictions. Action required: Update master file within 30 days to avoid penalty exposure (estimated: $500K).",
        category: "Compliance",
      },
      {
        id: "8",
        timestamp: "1 hour ago",
        type: "market",
        title: "EU ETS Carbon Price Reaches €88/tonne",
        jurisdiction: "France",
        priority: "medium",
        summary: "Carbon allowance price increase impacts: (1) CBAM certificate costs up 3.5%, (2) Refining margin compression of €0.04/liter, (3) Transfer pricing benchmarks for CO2-intensive products require adjustment. Quarterly impact: €12M increased compliance costs.",
        category: "Carbon Market",
      },
      {
        id: "9",
        timestamp: "1 hour ago",
        type: "regulatory",
        title: "India: GST Council Meeting Minutes Published",
        jurisdiction: "India",
        priority: "high",
        summary: "Council confirms natural gas GST proposal advancing to December vote. Probability model updated: 72% → 78% enactment likelihood. Industry consultation period announced (Nov 20 - Dec 5). Recommended action: Submit formal comments supporting transition timeline extension.",
        category: "GST",
      },
      {
        id: "10",
        timestamp: "1 hour ago",
        type: "energy",
        title: "Germany Hydrogen Strategy: Tax Incentive Details Released",
        jurisdiction: "Germany",
        priority: "medium",
        summary: "Federal Ministry of Finance publishes implementation decree for green hydrogen tax credits. Investment tax credit confirmed at 40% for electrolysis capacity >10 MW. Prevailing wage requirements apply (mirrors US IRA structure). Effective date: Projects with FID after January 1, 2026.",
        category: "Hydrogen Strategy",
      },
      {
        id: "11",
        timestamp: "2 hours ago",
        type: "competitor",
        title: "TotalEnergies Announces Pillar Two Effective Rate",
        priority: "low",
        summary: "Competitor Q3 earnings call discloses 15.8% global blended ETR under Pillar Two calculation. Commentary suggests minimal top-up tax exposure. Benchmarking implication: Our preliminary 13.2% calculation indicates competitive disadvantage requiring strategic review.",
        category: "Tax Strategy",
      },
      {
        id: "12",
        timestamp: "2 hours ago",
        type: "alert",
        title: "Deadline Alert: India CbCR Due in 13 Days",
        jurisdiction: "India",
        priority: "critical",
        summary: "Filing deadline December 15, 2025 approaching. Status check shows documentation 67% complete. Critical path items remaining: (1) Related party schedules, (2) Financial data reconciliation, (3) Local file narrative. Escalation recommended to ensure timely filing.",
        category: "Compliance",
      },
];

  
// GET /api/feeds
router.get("/", (_req, res) => {
  res.json(feeds);
});

export default router;
