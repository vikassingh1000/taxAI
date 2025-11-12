import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText } from "lucide-react";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  jurisdiction: string;
  status: "proposed" | "enacted";
  impact: "high" | "medium" | "low" | "informational";
  type: "income" | "indirect" | "energy-specific";
  description: string;
  beforeText?: string;
  afterText?: string;
}

export default function RegulatoryPage() {
  const events: TimelineEvent[] = [
    {
      id: "1",
      date: "2025-11-08",
      title: "US Clean Energy Credit Extension",
      jurisdiction: "USA",
      status: "enacted",
      impact: "high",
      type: "energy-specific",
      description: "Treasury finalizes regulations extending production tax credits for offshore wind through 2035.",
      beforeText: "PTC available through 2025 at $26/MWh",
      afterText: "PTC extended through 2035 at $27.5/MWh with prevailing wage requirements",
    },
    {
      id: "2",
      date: "2025-11-05",
      title: "UK Energy Profits Levy Extension",
      jurisdiction: "UK",
      status: "enacted",
      impact: "high",
      type: "energy-specific",
      description: "Windfall tax on oil and gas profits extended to 2030 with rate increase from 35% to 38%.",
      beforeText: "Energy Profits Levy at 35% expiring 2028",
      afterText: "EPL increased to 38% and extended through 2030; investment allowance reduced to 66%",
    },
    {
      id: "3",
      date: "2025-11-02",
      title: "France CBAM Expansion",
      jurisdiction: "France",
      status: "enacted",
      impact: "high",
      type: "energy-specific",
      description: "Carbon Border Adjustment Mechanism expands to include refined petroleum products.",
      beforeText: "CBAM applies to crude oil imports only",
      afterText: "CBAM extended to refined products; quarterly reporting required; certificates at €85/tonne CO2",
    },
    {
      id: "4",
      date: "2025-11-01",
      title: "China Transfer Pricing Safe Harbors Tightened",
      jurisdiction: "China",
      status: "enacted",
      impact: "high",
      type: "income",
      description: "SAT narrows safe harbor ranges for intercompany services and financing transactions.",
      beforeText: "Service markup safe harbor: 5-10%",
      afterText: "Service markup safe harbor reduced to 5-7%; contemporaneous documentation mandatory",
    },
    {
      id: "5",
      date: "2025-10-30",
      title: "Germany E-Invoicing Postponed",
      jurisdiction: "Germany",
      status: "enacted",
      impact: "low",
      type: "indirect",
      description: "B2B e-invoicing mandate delayed by 6 months to July 2026.",
    },
    {
      id: "6",
      date: "2025-10-28",
      title: "India Transfer Pricing Documentation Update",
      jurisdiction: "India",
      status: "enacted",
      impact: "medium",
      type: "income",
      description: "Enhanced country-by-country reporting requirements and master file specifications.",
    },
    {
      id: "7",
      date: "2025-10-25",
      title: "France Mandatory E-Invoicing B2B",
      jurisdiction: "France",
      status: "enacted",
      impact: "high",
      type: "indirect",
      description: "All B2B transactions must use certified e-invoicing platforms effective Q1 2026.",
    },
    {
      id: "8",
      date: "2025-10-22",
      title: "India GST Rate Changes Proposed",
      jurisdiction: "India",
      status: "proposed",
      impact: "medium",
      type: "indirect",
      description: "GST Council proposes bringing natural gas under GST regime at 12% rate.",
    },
  ];

  const getImpactColor = (impact: string) => {
    const colors = {
      high: "bg-destructive text-destructive-foreground",
      medium: "bg-primary text-primary-foreground",
      low: "bg-accent text-accent-foreground",
      informational: "bg-muted text-muted-foreground",
    };
    return colors[impact as keyof typeof colors] || colors.informational;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Regulatory Change Timeline</h1>
        <p className="text-muted-foreground mt-1">Chronological feed of tax developments across all jurisdictions</p>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <Tabs defaultValue="timeline">
          <TabsList>
            <TabsTrigger value="timeline" data-testid="tab-timeline">
              <Calendar className="h-4 w-4 mr-2" />
              Timeline View
            </TabsTrigger>
            <TabsTrigger value="comparison" data-testid="tab-comparison">
              <FileText className="h-4 w-4 mr-2" />
              What Changed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="mt-6">
            <div className="relative space-y-6">
              <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-border" />
              {events.map((event, idx) => (
                <div key={event.id} className="relative pl-16">
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <Card className="p-4 hover-elevate" data-testid={`card-event-${event.id}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-muted-foreground font-mono">{event.date}</span>
                          <Badge variant="outline">{event.jurisdiction}</Badge>
                          <Badge variant="outline">{event.status}</Badge>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                      </div>
                      <Badge className={getImpactColor(event.impact)}>{event.impact.toUpperCase()}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="mt-6 space-y-6">
            {events
              .filter((e) => e.beforeText && e.afterText)
              .map((event) => (
                <Card key={event.id} className="p-6" data-testid={`card-comparison-${event.id}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <Badge variant="outline">{event.jurisdiction}</Badge>
                    <Badge className={getImpactColor(event.impact)}>{event.impact.toUpperCase()}</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                      <p className="text-xs font-semibold text-destructive mb-2">BEFORE</p>
                      <p className="text-sm">{event.beforeText}</p>
                    </div>
                    <div className="p-4 bg-[#22C55E]/10 rounded-md border border-[#22C55E]/20">
                      <p className="text-xs font-semibold text-[#22C55E] mb-2">AFTER</p>
                      <p className="text-sm">{event.afterText}</p>
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
