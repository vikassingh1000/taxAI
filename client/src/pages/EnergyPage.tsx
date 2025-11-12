import EnergyLensFeed, { type EnergyEvent } from "@/components/EnergyLensFeed";

export default function EnergyPage() {
  const events: EnergyEvent[] = [
    {
      id: "1",
      title: "US Inflation Reduction Act - Clean Energy Credit Extension",
      date: "2025-11-08",
      sector: "renewables",
      impact: "high",
      description: "Treasury issues final regulations extending production tax credits for offshore wind projects through 2035.",
      commodityContext: "Offshore wind development accelerating; installed capacity projected to reach 30 GW by 2030.",
      taxImplications: [
        "Enhanced PTC rates of $27.5/MWh available for projects meeting prevailing wage requirements",
        "Direct pay election available for tax-exempt entities through 2032",
        "Energy storage add-on qualification extends ITC benefits",
      ],
    },
    {
      id: "2",
      title: "EU Carbon Border Adjustment Mechanism (CBAM) Reporting Begins",
      date: "2025-10-30",
      sector: "upstream",
      impact: "high",
      description: "First quarterly CBAM reports due for importers of crude oil and refined products into EU.",
      commodityContext: "Brent crude at $82/bbl; carbon pricing differential creating $8-12/bbl cost impact on non-EU imports.",
      taxImplications: [
        "Embedded emissions reporting required for all crude imports from non-EU sources",
        "CBAM certificates pricing at €85/tonne CO2, creating material cost increase",
        "Transfer pricing implications for intercompany crude purchases",
      ],
    },
    {
      id: "3",
      title: "India GST Rate Changes for Petroleum Products",
      date: "2025-10-22",
      sector: "downstream",
      impact: "medium",
      description: "GST Council proposes bringing natural gas under GST regime at 12% rate, effective April 2026.",
      taxImplications: [
        "Input tax credit availability will reduce cascading tax effect",
        "Petroleum products remain outside GST for now",
        "State VAT implications require separate analysis",
      ],
    },
    {
      id: "4",
      title: "UK Windfall Tax Extension Proposed",
      date: "2025-11-05",
      sector: "upstream",
      impact: "high",
      description: "Energy Profits Levy extended through 2030 with increased rate from 35% to 38%.",
      commodityContext: "North Sea production declining; oil at $80/bbl makes incremental projects economically marginal.",
      taxImplications: [
        "Effective combined tax rate on UK upstream profits now 78%",
        "Investment allowance reduced from 80% to 66%",
        "Decommissioning tax relief timing accelerated",
      ],
    },
    {
      id: "5",
      title: "China Carbon Trading Market Expansion",
      date: "2025-11-01",
      sector: "power",
      impact: "medium",
      description: "National ETS expands to include petrochemical and steel sectors effective 2026.",
      commodityContext: "Carbon allowance prices stable at ¥80/tonne; expected to increase with expanded coverage.",
      taxImplications: [
        "Carbon costs will be deductible for income tax purposes",
        "Transfer pricing implications for intercompany carbon allowance transfers",
        "Potential for carbon tax credits in certain provinces",
      ],
    },
    {
      id: "6",
      title: "Germany Hydrogen Tax Incentive Package",
      date: "2025-10-28",
      sector: "renewables",
      impact: "high",
      description: "New tax credits for green hydrogen production and distribution infrastructure investment.",
      taxImplications: [
        "Investment tax credit of 40% for electrolysis capacity installation",
        "Enhanced depreciation rates for hydrogen distribution assets",
        "VAT exemption for green hydrogen sales to industrial users",
      ],
    },
    {
      id: "7",
      title: "France Petroleum Products Excise Duty Increase",
      date: "2025-10-25",
      sector: "midstream",
      impact: "medium",
      description: "Excise duty on diesel and gasoline to increase by 5% effective January 2026.",
      taxImplications: [
        "Retail price impact estimated at €0.08/liter",
        "Transfer pricing benchmarking affected for petroleum product distribution",
        "Biofuel blend exemptions expanded to 15% content",
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Energy Lens Intelligence Feed</h1>
        <p className="text-muted-foreground mt-1">
          Tax developments filtered through energy sector perspective with commodity context
        </p>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <EnergyLensFeed events={events} />
      </div>
    </div>
  );
}
