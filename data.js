const { useState, useEffect, useRef } = React;
// ─── DEFAULT TEAMS (overridden by setup modal) ───────────────────────────────
const DEFAULT_TEAMS = ["Team A","Team B","Team C"];

// ─── DATA ────────────────────────────────────────────────────────────────────

const OPS_DATA = [
  {site:"DK-Copenhagen",category:"Dairy spreads",segment:"Retail - major chains",market:"Nordic",volume:1840,utilPct:91,prodCost:412,logCost:38,totalCts:450,otif:96.2,notes:"Core line - high utilisation"},
  {site:"DK-Copenhagen",category:"Dairy spreads",segment:"Retail - major chains",market:"DACH",volume:620,utilPct:91,prodCost:412,logCost:112,totalCts:524,otif:88.1,notes:"Long haul - margin squeeze"},
  {site:"DK-Copenhagen",category:"Chilled ready meals",segment:"Foodservice",market:"Nordic",volume:390,utilPct:91,prodCost:487,logCost:41,totalCts:528,otif:93.4,notes:"Growing segment"},
  {site:"DK-Copenhagen",category:"Chilled ready meals",segment:"Retail - discount",market:"Nordic",volume:210,utilPct:91,prodCost:487,logCost:39,totalCts:526,otif:91.0,notes:"Price sensitive"},
  {site:"DK-Copenhagen",category:"Ambient sauces",segment:"Retail - major chains",market:"DACH",volume:480,utilPct:91,prodCost:298,logCost:108,totalCts:406,otif:89.3,notes:"Competitive pricing pressure"},
  {site:"SE-Gothenburg",category:"Dairy spreads",segment:"Retail - major chains",market:"Nordic",volume:1240,utilPct:78,prodCost:398,logCost:29,totalCts:427,otif:97.1,notes:"Underutilised vs DK"},
  {site:"SE-Gothenburg",category:"Dairy spreads",segment:"Private label",market:"Nordic",volume:880,utilPct:78,prodCost:391,logCost:31,totalCts:422,otif:96.8,notes:"PL growing fast"},
  {site:"SE-Gothenburg",category:"Ambient sauces",segment:"Retail - major chains",market:"Nordic",volume:560,utilPct:78,prodCost:301,logCost:28,totalCts:329,otif:95.2,notes:"Good margin"},
  {site:"SE-Gothenburg",category:"Ambient sauces",segment:"Retail - major chains",market:"DACH",volume:290,utilPct:78,prodCost:301,logCost:115,totalCts:416,otif:86.4,notes:"Same issue as CPH"},
  {site:"SE-Gothenburg",category:"Chilled ready meals",segment:"Foodservice",market:"Nordic",volume:180,utilPct:78,prodCost:492,logCost:33,totalCts:525,otif:94.1,notes:"Small volume"},
  {site:"NO-Oslo",category:"Dairy spreads",segment:"Retail - major chains",market:"Nordic",volume:680,utilPct:67,prodCost:431,logCost:22,totalCts:453,otif:95.8,notes:"High cost site"},
  {site:"NO-Oslo",category:"Dairy spreads",segment:"Private label",market:"Nordic",volume:290,utilPct:67,prodCost:428,logCost:24,totalCts:452,otif:94.9,notes:""},
  {site:"NO-Oslo",category:"Chilled ready meals",segment:"Retail - major chains",market:"Nordic",volume:140,utilPct:67,prodCost:501,logCost:25,totalCts:526,otif:93.2,notes:"Very low utilisation"},
  {site:"NO-Oslo",category:"Ambient sauces",segment:"Foodservice",market:"Nordic",volume:95,utilPct:67,prodCost:312,logCost:21,totalCts:333,otif:96.1,notes:""},
  {site:"PL-Gdansk",category:"Dairy spreads",segment:"Retail - major chains",market:"Nordic",volume:410,utilPct:54,prodCost:389,logCost:87,totalCts:476,otif:82.3,notes:"Long haul to Nordics adds cost"},
  {site:"PL-Gdansk",category:"Dairy spreads",segment:"Retail - major chains",market:"DACH",volume:890,utilPct:54,prodCost:389,logCost:67,totalCts:456,otif:91.2,notes:"Better positioned for DACH"},
  {site:"PL-GDANSK",category:"Ambient sauces",segment:"Retail - major chains",market:"DACH",volume:1240,utilPct:54,prodCost:271,logCost:61,totalCts:332,otif:93.4,notes:"LOWEST COST DACH"},
  {site:"Poland Site 3",category:"Ambient sauces",segment:"Private label",market:"DACH",volume:680,utilPct:54,prodCost:268,logCost:64,totalCts:332,otif:92.8,notes:"Duplicate entry? Same site"},
  {site:"PL-Gdansk",category:"Ambient sauces",segment:"Retail - discount",market:"DACH",volume:390,utilPct:54,prodCost:271,logCost:63,totalCts:334,otif:91.6,notes:""},
  {site:"PL-Gdansk",category:"Chilled ready meals",segment:"Retail - major chains",market:"DACH",volume:0,utilPct:54,prodCost:null,logCost:null,totalCts:null,otif:null,notes:"NOT YET PRODUCING - line being installed"},
  {site:"PL-Gdansk",category:"Packaging co-man",segment:"Third party",market:"Export",volume:320,utilPct:54,prodCost:198,logCost:72,totalCts:270,otif:78.4,notes:"Co-manufacturing 3rd party - unclear strategic fit"},
  {site:"DK-Copenhagen",category:"Dairy spreads",segment:"Private label",market:"DACH",volume:380,utilPct:91,prodCost:412,logCost:114,totalCts:526,otif:85.2,notes:"Worst margin combo"},
  {site:"SE-Gothenburg",category:"Dairy spreads",segment:"Retail - major chains",market:"DACH",volume:410,utilPct:78,prodCost:398,logCost:118,totalCts:516,otif:87.9,notes:""},
  {site:"NO-Oslo",category:"Dairy spreads",segment:"Retail - major chains",market:"DACH",volume:120,utilPct:67,prodCost:431,logCost:189,totalCts:620,otif:79.1,notes:"OUTLIER - NO to DACH very expensive"},
  {site:"DK-Copenhagen",category:"Ambient sauces",segment:"Private label",market:"Nordic",volume:290,utilPct:91,prodCost:298,logCost:36,totalCts:334,otif:94.3,notes:""},
  {site:"SE-Gothenburg",category:"Chilled ready meals",segment:"Private label",market:"Nordic",volume:95,utilPct:78,prodCost:492,logCost:30,totalCts:522,otif:93.8,notes:"New - only 3 months data"},
  {site:"PL-Gdansk",category:"Dairy spreads",segment:"Foodservice",market:"DACH",volume:180,utilPct:54,prodCost:389,logCost:69,totalCts:458,otif:88.7,notes:""},
  {site:"NO-Oslo",category:"Ambient sauces",segment:"Retail - major chains",market:"DACH",volume:85,utilPct:67,prodCost:312,logCost:176,totalCts:488,otif:81.2,notes:"NO to DACH uneconomic"},
  {site:"DK-Copenhagen",category:"Chilled ready meals",segment:"Retail - major chains",market:"DACH",volume:140,utilPct:91,prodCost:487,logCost:116,totalCts:603,otif:83.4,notes:"Highest cost-to-serve in portfolio"},
  {site:"SE-Gothenburg",category:"Ambient sauces",segment:"Retail - discount",market:"Nordic",volume:320,utilPct:78,prodCost:299,logCost:27,totalCts:326,otif:96.4,notes:"Best margin line"},
];

const PL_DATA = [
  {year:"FY2022",revenue:1089,revenueNordic:812,revenueDACH:198,revenueOther:79,cogs:-762,grossProfit:327,grossMarginPct:30.0,distrib:-98,sm:-44,ga:-61,ebit:124,ebitMarginPct:11.4,netFinance:-18,pbt:106,tax:-26,netProfit:80,inventory:87,invDays:42,capex:34,capexDK:12,capexSE:11,capexNO:8,capexPL:3,netDebt:142,otif:94.1,headcount:1840},
  {year:"FY2023",revenue:1143,revenueNordic:821,revenueDACH:241,revenueOther:81,cogs:-817,grossProfit:326,grossMarginPct:28.5,distrib:-109,sm:-47,ga:-68,ebit:102,ebitMarginPct:8.9,netFinance:-24,pbt:78,tax:-19,netProfit:59,inventory:104,invDays:47,capex:61,capexDK:8,capexSE:9,capexNO:7,capexPL:37,netDebt:198,otif:91.3,headcount:2380},
  {year:"FY2024",revenue:1198,revenueNordic:814,revenueDACH:289,revenueOther:95,cogs:-874,grossProfit:324,grossMarginPct:27.0,distrib:-124,sm:-51,ga:-74,ebit:75,ebitMarginPct:6.3,netFinance:-31,pbt:44,tax:-11,netProfit:33,inventory:128,invDays:53,capex:58,capexDK:9,capexSE:8,capexNO:6,capexPL:35,netDebt:241,otif:87.6,headcount:2410},
];

const SCENARIO_CRITERIA = [
  {criterion:"Total cost-to-serve reduction",unit:"€M/year",weight:"High"},
  {criterion:"Capex required",unit:"€M",weight:"High"},
  {criterion:"OTIF improvement",unit:"% points",weight:"High"},
  {criterion:"Scope 1 emissions reduction",unit:"%",weight:"Medium"},
  {criterion:"Implementation complexity",unit:"H/M/L",weight:"Medium"},
  {criterion:"Time to first benefit",unit:"Months",weight:"Medium"},
  {criterion:"Organisational disruption",unit:"H/M/L",weight:"Low"},
  {criterion:"Nordic service level risk",unit:"H/M/L",weight:"High"},
  {criterion:"DACH growth enablement",unit:"H/M/L",weight:"High"},
  {criterion:"Net debt impact year 3",unit:"€M",weight:"High"},
];

const SITE_REF = [
  {site:"DK-Copenhagen",util:"91%",costIndex:"100 (base)",logDACH:"High (€108–116/t)",logNordic:"Low (€36–41/t)",assets:"Brand, quality, buyer relationships"},
  {site:"SE-Gothenburg",util:"78%",costIndex:"97",logDACH:"High (€115–118/t)",logNordic:"Low (€27–33/t)",assets:"Capacity headroom, dairy expertise"},
  {site:"NO-Oslo",util:"67%",costIndex:"105",logDACH:"Very high (€176–189/t)",logNordic:"Low (€21–25/t)",assets:"Norwegian market relationships"},
  {site:"PL-Gdansk",util:"54%",costIndex:"92",logDACH:"Low (€61–72/t)",logNordic:"Medium (€69–87/t)",assets:"Modern ambient lines, port access, new chilled line installing"},
];

