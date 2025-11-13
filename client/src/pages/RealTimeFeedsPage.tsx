
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Radio, Search, TrendingUp, FileText, Zap, Globe, Filter } from "lucide-react";

// interface FeedItem {
//   id: string;
//   timestamp: string;
//   type: "regulatory" | "market" | "alert" | "energy" | "competitor";
//   title: string;
//   jurisdiction?: string;
//   priority: "critical" | "high" | "medium" | "low";
//   summary: string;
// }

// export default function RealTimeFeedsPage() {
//   const feedItems: FeedItem[] = [
//     {
//       id: "1",
//       timestamp: "2 minutes ago",
//       type: "regulatory",
//       title: "France: DGFIP Issues CBAM Implementation Guidance",
//       jurisdiction: "France",
//       priority: "high",
//       summary: "Tax authority publishes 142-page technical guidance on carbon border adjustment mechanism certificate calculations for petroleum products. Key change: Scope 3 upstream emissions now required for crude oil imports effective immediately.",
//     },
//     {
//       id: "2",
//       timestamp: "8 minutes ago",
//       type: "alert",
//       title: "UK Risk Score Increased: 62 → 71",
//       jurisdiction: "UK",
//       priority: "critical",
//       summary: "ML model detected significant risk escalation triggered by: (1) EPL rate increase announcement, (2) Transfer pricing audit initiated for 2 peer companies, (3) Parliamentary discussion of additional windfall measures. Recommended action: Review UK investment thesis.",
//     },
//     {
//       id: "3",
//       timestamp: "15 minutes ago",
//       type: "market",
//       title: "Brent Crude Crosses $85/bbl Threshold",
//       priority: "medium",
//       summary: "Price movement triggers tax implications: (1) UK EPL higher bracket activated, (2) Kazakhstan excess profit tax now applicable, (3) Trinidad SPT rate increases to 30%. Estimated quarterly impact: $24M additional tax burden.",
//     },
//     {
//       id: "4",
//       timestamp: "23 minutes ago",
//       type: "energy",
//       title: "US Treasury Releases PTC Wage Requirement Safe Harbors",
//       jurisdiction: "USA",
//       priority: "high",
//       summary: "Final regulations provide three safe harbor options for prevailing wage compliance on offshore wind projects. Most favorable option: Annual certification by qualified third-party satisfies requirements. Applies retroactively to projects that began construction in 2024.",
//     },
//     {
//       id: "5",
//       timestamp: "34 minutes ago",
//       type: "competitor",
//       title: "Shell Announces $4.2B UK Investment Deferral",
//       jurisdiction: "UK",
//       priority: "medium",
//       summary: "Competitor press release cites EPL extension and reduced investment allowance as primary factors in capital reallocation decision. Projects deferred: 3 North Sea developments (combined 180 MMboe). Industry coalition forming to lobby for fiscal term improvements.",
//     },
//     {
//       id: "6",
//       timestamp: "41 minutes ago",
//       type: "regulatory",
//       title: "China SAT: New Transfer Pricing Circular Released",
//       jurisdiction: "China",
//       priority: "high",
//       summary: "SAT Announcement 28 published with immediate effect. Key provisions: (1) Contemporaneous documentation deadline moved to May 31 (from June 30), (2) Hard-to-value intangibles regulations tightened, (3) Cost contribution arrangement approval now mandatory. Compliance impact: 45-day acceleration of documentation timelines.",
//     },
//     {
//       id: "7",
//       timestamp: "52 minutes ago",
//       type: "alert",
//       title: "Gap Identified: Missing Master File Update",
//       jurisdiction: "USA",
//       priority: "critical",
//       summary: "Cross-reference engine detected: US master file last updated March 2024, but organizational restructure completed in July 2024. Gap creates CbCR consistency risk across 6 jurisdictions. Action required: Update master file within 30 days to avoid penalty exposure (estimated: $500K).",
//     },
//     {
//       id: "8",
//       timestamp: "1 hour ago",
//       type: "market",
//       title: "EU ETS Carbon Price Reaches €88/tonne",
//       jurisdiction: "France",
//       priority: "medium",
//       summary: "Carbon allowance price increase impacts: (1) CBAM certificate costs up 3.5%, (2) Refining margin compression of €0.04/liter, (3) Transfer pricing benchmarks for CO2-intensive products require adjustment. Quarterly impact: €12M increased compliance costs.",
//     },
//     {
//       id: "9",
//       timestamp: "1 hour ago",
//       type: "regulatory",
//       title: "India: GST Council Meeting Minutes Published",
//       jurisdiction: "India",
//       priority: "high",
//       summary: "Council confirms natural gas GST proposal advancing to December vote. Probability model updated: 72% → 78% enactment likelihood. Industry consultation period announced (Nov 20 - Dec 5). Recommended action: Submit formal comments supporting transition timeline extension.",
//     },
//     {
//       id: "10",
//       timestamp: "1 hour ago",
//       type: "energy",
//       title: "Germany Hydrogen Strategy: Tax Incentive Details Released",
//       jurisdiction: "Germany",
//       priority: "medium",
//       summary: "Federal Ministry of Finance publishes implementation decree for green hydrogen tax credits. Investment tax credit confirmed at 40% for electrolysis capacity >10 MW. Prevailing wage requirements apply (mirrors US IRA structure). Effective date: Projects with FID after January 1, 2026.",
//     },
//     {
//       id: "11",
//       timestamp: "2 hours ago",
//       type: "competitor",
//       title: "TotalEnergies Announces Pillar Two Effective Rate",
//       priority: "low",
//       summary: "Competitor Q3 earnings call discloses 15.8% global blended ETR under Pillar Two calculation. Commentary suggests minimal top-up tax exposure. Benchmarking implication: Our preliminary 13.2% calculation indicates competitive disadvantage requiring strategic review.",
//     },
//     {
//       id: "12",
//       timestamp: "2 hours ago",
//       type: "alert",
//       title: "Deadline Alert: India CbCR Due in 13 Days",
//       jurisdiction: "India",
//       priority: "critical",
//       summary: "Filing deadline December 15, 2025 approaching. Status check shows documentation 67% complete. Critical path items remaining: (1) Related party schedules, (2) Financial data reconciliation, (3) Local file narrative. Escalation recommended to ensure timely filing.",
//     },
//   ];

//   const getPriorityColor = (priority: string) => {
//     const colors = {
//       critical: "bg-destructive text-destructive-foreground",
//       high: "bg-primary text-primary-foreground",
//       medium: "bg-accent text-accent-foreground",
//       low: "bg-muted text-muted-foreground",
//     };
//     return colors[priority as keyof typeof colors];
//   };

//   const getTypeIcon = (type: string) => {
//     const icons = {
//       regulatory: FileText,
//       market: TrendingUp,
//       alert: Radio,
//       energy: Zap,
//       competitor: Globe,
//     };
//     return icons[type as keyof typeof icons] || FileText;
//   };

//   return (
//     <div className="h-full flex flex-col">
//       <div className="p-6 border-b border-border">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h1 className="text-3xl font-bold" data-testid="text-page-title">Real-time Intelligence Feeds</h1>
//             <p className="text-muted-foreground mt-1">Live updates on tax developments, market changes, and AI-detected events</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <Badge className="bg-[#22C55E] text-white gap-1">
//               <Radio className="h-3 w-3 animate-pulse" />
//               LIVE
//             </Badge>
//             <Button variant="outline" size="icon" data-testid="button-filter-feeds">
//               <Filter className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder="Search feeds by keyword, jurisdiction, or topic..."
//             className="pl-10"
//             data-testid="input-search-feeds"
//           />
//         </div>
//       </div>

//       <div className="flex-1 p-6 overflow-auto">
//         <Tabs defaultValue="all" className="w-full">
//           <TabsList className="grid w-full grid-cols-6">
//             <TabsTrigger value="all" data-testid="tab-all">All Feeds</TabsTrigger>
//             <TabsTrigger value="regulatory" data-testid="tab-regulatory">Regulatory</TabsTrigger>
//             <TabsTrigger value="market" data-testid="tab-market">Market</TabsTrigger>
//             <TabsTrigger value="alert" data-testid="tab-alert">Alerts</TabsTrigger>
//             <TabsTrigger value="energy" data-testid="tab-energy">Energy</TabsTrigger>
//             <TabsTrigger value="competitor" data-testid="tab-competitor">Competitor</TabsTrigger>
//           </TabsList>

//           <TabsContent value="all" className="mt-6">
//             <div className="space-y-4">
//               {feedItems.map((item) => {
//                 const Icon = getTypeIcon(item.type);
//                 return (
//                   <Card key={item.id} className="p-4 hover-elevate cursor-pointer" data-testid={`card-feed-${item.id}`}>
//                     <div className="flex items-start gap-3">
//                       <div className="p-2 rounded-md bg-accent/10 mt-1">
//                         <Icon className="h-5 w-5 text-accent" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-start justify-between mb-2">
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2 mb-1">
//                               <h3 className="font-semibold">{item.title}</h3>
//                               {item.jurisdiction && <Badge variant="outline">{item.jurisdiction}</Badge>}
//                             </div>
//                             <div className="flex items-center gap-2 text-xs text-muted-foreground">
//                               <span>{item.timestamp}</span>
//                               <span>•</span>
//                               <span className="capitalize">{item.type}</span>
//                             </div>
//                           </div>
//                           <Badge className={getPriorityColor(item.priority)}>
//                             {item.priority.toUpperCase()}
//                           </Badge>
//                         </div>
//                         <p className="text-sm text-muted-foreground">{item.summary}</p>
//                       </div>
//                     </div>
//                   </Card>
//                 );
//               })}
//             </div>
//           </TabsContent>

//           {["regulatory", "market", "alert", "energy", "competitor"].map((type) => (
//             <TabsContent key={type} value={type} className="mt-6">
//               <div className="space-y-4">
//                 {feedItems
//                   .filter((item) => item.type === type)
//                   .map((item) => {
//                     const Icon = getTypeIcon(item.type);
//                     return (
//                       <Card key={item.id} className="p-4 hover-elevate cursor-pointer" data-testid={`card-feed-${item.id}`}>
//                         <div className="flex items-start gap-3">
//                           <div className="p-2 rounded-md bg-accent/10 mt-1">
//                             <Icon className="h-5 w-5 text-accent" />
//                           </div>
//                           <div className="flex-1">
//                             <div className="flex items-start justify-between mb-2">
//                               <div className="flex-1">
//                                 <div className="flex items-center gap-2 mb-1">
//                                   <h3 className="font-semibold">{item.title}</h3>
//                                   {item.jurisdiction && <Badge variant="outline">{item.jurisdiction}</Badge>}
//                                 </div>
//                                 <div className="flex items-center gap-2 text-xs text-muted-foreground">
//                                   <span>{item.timestamp}</span>
//                                 </div>
//                               </div>
//                               <Badge className={getPriorityColor(item.priority)}>
//                                 {item.priority.toUpperCase()}
//                               </Badge>
//                             </div>
//                             <p className="text-sm text-muted-foreground">{item.summary}</p>
//                           </div>
//                         </div>
//                       </Card>
//                     );
//                   })}
//               </div>
//             </TabsContent>
//           ))}
//         </Tabs>
//       </div>
//     </div>
//   );
// }


// Changes:
// Add new /api/feeds endpoint with category support
// Update UI to support category and jurisdiction dropdown filters
// Improve feed display and filtering

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Radio, Search, TrendingUp, FileText, Zap, Globe, Filter } from "lucide-react";

interface FeedItem {
  id: string;
  timestamp: string;
  type: "regulatory" | "market" | "alert" | "energy" | "competitor";
  title: string;
  jurisdiction?: string;
  priority?: "critical" | "high" | "medium" | "low";
  summary: string;
  category?: string;
}

export default function RealTimeFeedsPage() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [filteredFeeds, setFilteredFeeds] = useState<FeedItem[]>([]);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("/api/feeds")
      .then((res) => res.json())
      .then((data) => {
        setFeedItems(data);
        setFilteredFeeds(data);
      })
      .catch((err) => console.error("Error fetching feeds:", err));
  }, []);

  useEffect(() => {
    let filtered = [...feedItems];
    if (selectedJurisdiction)
      filtered = filtered.filter((item) => item.jurisdiction === selectedJurisdiction);
    if (selectedCategory)
      filtered = filtered.filter((item) => item.category === selectedCategory);
    if (searchText)
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.summary.toLowerCase().includes(searchText.toLowerCase())
      );
    setFilteredFeeds(filtered);
  }, [selectedJurisdiction, selectedCategory, searchText, feedItems]);

  const getTypeIcon = (type: string) => {
    const icons = {
      regulatory: FileText,
      market: TrendingUp,
      alert: Radio,
      energy: Zap,
      competitor: Globe,
    };
    return icons[type as keyof typeof icons] || FileText;
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      critical: "bg-red-500 text-white",
      high: "bg-orange-500 text-white",
      medium: "bg-blue-500 text-white",
      low: "bg-gray-300 text-gray-700",
    };
    return colors[priority as keyof typeof colors] || colors["low"];
  };

  const jurisdictions = Array.from(new Set(feedItems.map((f) => f.jurisdiction).filter(Boolean)));
  const categories = Array.from(new Set(feedItems.map((f) => f.category).filter(Boolean)));

  function renderMetaLine(item: FeedItem) {
    const meta = [
      item.timestamp,
      item.type,
      item.category
    ].filter(Boolean);

    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {meta.map((v, idx) => (
          <span key={idx} className={idx === 1 ? "capitalize" : ""}>
            {idx > 0 && <span className="mx-1">•</span>}
            {v}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Real-time Intelligence Feeds</h1>
            <p className="text-muted-foreground mt-1">
              Live updates on tax developments, market changes, and AI-detected events
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#22C55E] text-white gap-1">
              <Radio className="h-3 w-3 animate-pulse" />
              LIVE
            </Badge>
            <select
              className="border border-gray-300 rounded p-2 min-w-[130px] text-sm"
              value={selectedJurisdiction}
              onChange={(e) => setSelectedJurisdiction(e.target.value)}
            >
              <option value="">All Jurisdictions</option>
              {jurisdictions.map((j) => (
                <option key={j} value={j}>{j}</option>
              ))}
            </select>
            <select
              className="border border-gray-300 rounded p-2 min-w-[130px] text-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <Button variant="outline" size="icon" data-testid="button-filter-feeds">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search feeds by keyword, jurisdiction, or topic..."
            className="pl-10"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            data-testid="input-search-feeds"
          />
        </div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all" data-testid="tab-all">All Feeds</TabsTrigger>
            <TabsTrigger value="regulatory" data-testid="tab-regulatory">Regulatory</TabsTrigger>
            <TabsTrigger value="market" data-testid="tab-market">Market</TabsTrigger>
            <TabsTrigger value="alert" data-testid="tab-alert">Alerts</TabsTrigger>
            <TabsTrigger value="energy" data-testid="tab-energy">Energy</TabsTrigger>
            <TabsTrigger value="competitor" data-testid="tab-competitor">Competitor</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              {filteredFeeds.map((item) => {
                const Icon = getTypeIcon(item.type);
                const priority = item.priority || "low";
                return (
                  <Card key={item.id} className="p-4 hover-elevate cursor-pointer" data-testid={`card-feed-${item.id}`}>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-accent/10 mt-1 flex-shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold">{item.title}</h3>
                              {item.jurisdiction && <Badge variant="outline">{item.jurisdiction}</Badge>}
                            </div>
                            {renderMetaLine(item)}
                          </div>
                          <Badge className={getPriorityColor(priority) + " px-4 py-1 rounded-full font-semibold text-xs shadow"}>
                            {priority.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.summary}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          {["regulatory", "market", "alert", "energy", "competitor"].map((type) => (
            <TabsContent key={type} value={type} className="mt-6">
              <div className="space-y-4">
                {filteredFeeds
                  .filter((item) => item.type === type)
                  .map((item) => {
                    const Icon = getTypeIcon(item.type);
                    const priority = item.priority || "low";
                    return (
                      <Card key={item.id} className="p-4 hover-elevate cursor-pointer" data-testid={`card-feed-${item.id}`}>
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md bg-accent/10 mt-1 flex-shrink-0">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold">{item.title}</h3>
                                  {item.jurisdiction && <Badge variant="outline">{item.jurisdiction}</Badge>}
                                </div>
                                {renderMetaLine(item)}
                              </div>
                              <Badge className={getPriorityColor(priority) + " px-4 py-1 rounded-full font-semibold text-xs shadow"}>
                                {priority.toUpperCase()}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.summary}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
