function CopyButton({text}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };
  return <button className="copy-btn" onClick={handleCopy}>{copied ? "✓ Copied" : "Copy text"}</button>;
}

function DataTab({step}) {
  const handleDownload = () => {
    if (step.downloadFn === "phase1") downloadPhase1Excel();
    if (step.downloadFn === "phase2") downloadPhase2Excel();
    if (step.downloadFn === "phase3") downloadPhase3Excel();
    if (step.downloadFn === "phase4") downloadPhase4Excel();
  };

  return (
    <div className="fade-in">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"20px", flexWrap:"wrap", gap:"12px"}}>
        <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#6B655A"}}>MATERIALS FOR THIS PHASE</div>
        <button className="dl-btn" onClick={handleDownload}>↓ {step.dataLabel}</button>
      </div>

      {step.id === 1 && <Phase1Data/>}
      {step.id === 2 && <Phase2Data/>}
      {step.id === 3 && <Phase3Data/>}
      {step.id === 4 && <Phase4Data/>}
    </div>
  );
}

function Phase1Data() {
  const pressTexts = [
    {src:"Trade press, March 2023", text:"NordicFoods finalised its acquisition of Gdansk-based Polaris Food Group for €183M. CEO Henrik Strand described the deal as 'strategically compelling,' citing Polaris's modern packaging line as a key asset. Integration expected to take 18–24 months. Analysts noted that Polaris had been loss-making for two of the past three years, and questioned whether the purchase price reflected integration risk adequately. NordicFoods declined to provide site-level financial data."},
    {src:"Retail industry newsletter, October 2024", text:"Major German and Austrian grocery chains reported private label share gains of 4–6 percentage points in chilled and ambient food categories during H1 2024. Nordic food manufacturers who have expanded into DACH are facing significant margin pressure on new market volumes despite strong top-line growth. One industry consultant noted that serving DACH markets from Nordic production bases adds 15–22% to landed cost compared with central European alternatives."},
    {src:"Investor day — CEO Henrik Strand, September 2024", text:"'We are not satisfied with where our operational performance sits today. Revenue growth has been strong — we've nearly doubled our DACH business in two years — but the economics of that growth have not been what we expected. We are running a network that was designed for a different business. The Board has been clear: we need to either fix the cost structure or reconsider the growth ambitions. What I can tell you is that we are not ruling anything out.'"},
  ];
  return (
    <div>
      <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#6B655A", marginBottom:"12px"}}>P&L SUMMARY — 3 YEAR TREND</div>
      <div style={{overflowX:"auto", marginBottom:"24px"}}>
        <table className="data-table">
          <thead><tr><th>Line Item</th><th>FY2022</th><th>FY2023</th><th>FY2024</th></tr></thead>
          <tbody>
            {[["Revenue (€M)",1089,1143,1198],["  — Nordic",812,821,814],["  — DACH",198,241,289],["Gross profit (€M)",327,326,324],["Gross margin %","30.0%","28.5%","27.0%"],["EBIT (€M)",124,102,75],["EBIT margin %","11.4%","8.9%","6.3%"],["Net profit (€M)",80,59,33],["Inventory days",42,47,53],["Group OTIF %","94.1%","91.3%","87.6%"],["Total Capex (€M)",34,61,58],["  — PL site",3,37,35],["Net debt (€M)",142,198,241]].map((r,i) => (
              <tr key={i}><td style={{fontWeight: r[0].startsWith("  ") ? 400 : 600}}>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#6B655A", marginBottom:"12px"}}>PRESS EXCERPTS — PASTE INTO YOUR AI TOOL</div>
      {pressTexts.map((p,i) => (
        <div key={i} className="press-block">
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"10px", flexWrap:"wrap", gap:"8px"}}>
            <div className="mono-font" style={{fontSize:"10px", letterSpacing:"1.5px", color:"#6B2230", fontWeight:600}}>{p.src.toUpperCase()}</div>
            <CopyButton text={p.text}/>
          </div>
          <p style={{fontSize:"13px", lineHeight:1.7, color:"#1A1814", margin:0}}>{p.text}</p>
        </div>
      ))}
    </div>
  );
}

function Phase2Data() {
  const allText = OPS_DATA.map(r => Object.values(r).join("\t")).join("\n");
  const int1 = `Lars Eriksson, COO: "The network challenge is real. When we acquired Polaris two years ago, the thesis was clear: a central European footprint gives us the cost base to serve DACH properly. What we underestimated was how long it takes to actually integrate a site. The Gdansk team operate very differently — different systems, different quality culture. We're still not running it the way we'd run Copenhagen. We also have a data problem — I genuinely don't have a clean picture of cost-to-serve at the SKU level across all four sites. My instinct? We probably need to concentrate production more. But I'm nervous about what that means for service levels into the Nordic markets if we lean too hard on Poland."`;
  const int2 = `Ingrid Hoffmann, CFO: "I'll be direct. The board is not going to approve another major capex programme without a very clear return case. We've put €93M into Gdansk over the past two years. The site is still running at 54% utilisation. That's not acceptable. On DACH growth — yes, the revenue numbers look good. But I keep asking: at what margin? My hypothesis is that it's partly logistics cost, partly product mix — we're winning on ambient and losing on chilled, and chilled is where the margin sits. I've also looked at the co-manufacturing business we inherited from Polaris. I'm not sure it belongs in the portfolio. It's consuming capacity at a site that should be focused on its own capabilities."`;
  const int3 = `Marek Kowalski, Site Director Gdansk: "I want to be honest because I think we've been talked about rather than talked to. This site has had a difficult two years — three ERP cutover attempts, and we lost some good people. But this site has capabilities that Copenhagen and Gothenburg do not have. Our ambient sauce lines are the most modern in the group — lower cost per tonne than any other site. We are twenty minutes from the port. For DACH logistics, we are better positioned than anywhere else. The chilled ready meals line being installed was the right decision strategically. What I need is a clear mandate and volume commitments. What I have had instead is uncertainty."`;

  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px", flexWrap:"wrap", gap:"8px"}}>
        <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#6B655A"}}>OPERATIONS DATA EXTRACT (30 ROWS — INTENTIONALLY MESSY)</div>
        <CopyButton text={allText}/>
      </div>
      <div style={{overflowX:"auto", marginBottom:"24px"}}>
        <table className="data-table">
          <thead><tr><th>Site</th><th>Category</th><th>Segment</th><th>Market</th><th>Volume (t)</th><th>Util %</th><th>Prod €/t</th><th>Log €/t</th><th>CTS €/t</th><th>OTIF %</th><th>Notes</th></tr></thead>
          <tbody>
            {OPS_DATA.map((r,i) => (
              <tr key={i}>
                <td style={{fontWeight:600,whiteSpace:"nowrap"}}>{r.site}</td>
                <td style={{whiteSpace:"nowrap"}}>{r.category}</td>
                <td style={{whiteSpace:"nowrap"}}>{r.segment}</td>
                <td>{r.market}</td>
                <td style={{textAlign:"right"}}>{r.volume || "—"}</td>
                <td style={{textAlign:"right"}}>{r.utilPct}%</td>
                <td style={{textAlign:"right"}}>{r.prodCost || "—"}</td>
                <td style={{textAlign:"right"}}>{r.logCost || "—"}</td>
                <td style={{textAlign:"right", fontWeight:600, color: r.totalCts > 550 ? "#6B2230" : r.totalCts < 340 ? "#3A7D44" : "inherit"}}>{r.totalCts || "—"}</td>
                <td style={{textAlign:"right", color: r.otif < 85 ? "#6B2230" : "inherit"}}>{r.otif || "—"}</td>
                <td style={{fontSize:"11px", color:"#6B655A", fontStyle:"italic"}}>{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#6B655A", marginBottom:"12px"}}>INTERVIEW EXCERPTS — PASTE INTO YOUR AI TOOL</div>
      {[[int1,"Lars Eriksson, COO","#3A4148"],[int2,"Ingrid Hoffmann, CFO","#3A4148"],[int3,"Marek Kowalski, Site Director Gdansk","#3A4148"]].map(([text,name,col],i) => (
        <div key={i} className="interview-block" style={{borderLeftColor:col}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"10px", flexWrap:"wrap", gap:"8px"}}>
            <div className="mono-font" style={{fontSize:"10px", letterSpacing:"1.5px", color:col, fontWeight:600}}>{name.toUpperCase()}</div>
            <CopyButton text={text}/>
          </div>
          <p style={{fontSize:"13px", lineHeight:1.7, color:"#1A1814", margin:0, fontStyle:"italic"}}>"{text.split('"')[1]}</p>
        </div>
      ))}
    </div>
  );
}

function Phase3Data() {
  return (
    <div>
      <div style={{padding:"16px 20px", background:"#EDE7D6", borderLeft:"3px solid #5A7370", marginBottom:"20px", borderRadius:"0 2px 2px 0"}}>
        <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#5A7370", fontWeight:600, marginBottom:"8px"}}>HOW TO USE THIS</div>
        <p style={{fontSize:"13px", lineHeight:1.6, margin:0, color:"#1A1814"}}>Download the Excel file. Use AI to help you build and name your own scenarios in the empty columns — don't fill them in manually. The site reference data tab has the key numbers you'll need. Try prompting AI to generate scenarios you wouldn't have thought of.</p>
      </div>
      <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#6B655A", marginBottom:"12px"}}>EVALUATION CRITERIA (10 DIMENSIONS)</div>
      <table className="data-table" style={{marginBottom:"24px"}}>
        <thead><tr><th>Criterion</th><th>Unit</th><th>Weight</th></tr></thead>
        <tbody>
          {SCENARIO_CRITERIA.map((r,i) => (
            <tr key={i}><td style={{fontWeight:600}}>{r.criterion}</td><td>{r.unit}</td><td style={{color: r.weight==="High" ? "#6B2230" : r.weight==="Medium" ? "#A86B3F" : "#6B655A", fontWeight:600}}>{r.weight}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#6B655A", marginBottom:"12px"}}>SITE REFERENCE DATA</div>
      <div style={{overflowX:"auto"}}>
        <table className="data-table">
          <thead><tr><th>Site</th><th>Utilisation</th><th>Cost Index</th><th>Logistics → DACH</th><th>Logistics → Nordic</th><th>Strategic Notes</th></tr></thead>
          <tbody>
            {SITE_REF.map((r,i) => (
              <tr key={i}><td style={{fontWeight:600}}>{r.site}</td><td style={{color: parseInt(r.util) < 70 ? "#6B2230" : "inherit", fontWeight:600}}>{r.util}</td><td>{r.costIndex}</td><td>{r.logDACH}</td><td>{r.logNordic}</td><td style={{fontSize:"11px", color:"#6B655A"}}>{r.assets}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Phase4Data() {
  const stakeholders = [
    {name:"Henrik Strand", role:"CEO", priority:"Fix the cost structure without sacrificing the DACH growth story", concern:"Staked his credibility publicly at investor day. Needs a clear, defensible direction — not a nuanced 'it depends.' Nervous about anything read as walking back the acquisition.", quote:"'I don't want a report that tells me what I already know. I want to know what we should do and why we should be confident it's right.'", color:"#1A1814"},
    {name:"Ingrid Hoffmann", role:"CFO", priority:"Return on the Gdansk investment. Margin recovery.", concern:"Managing nervous board members for 18 months. Needs numbers, not strategy language. Skeptical of big upfront capex. Quietly open to restructuring co-manufacturing.", quote:"'Show me the cash flow bridge. Not the strategy slides — the cash flow bridge.'", color:"#6B2230"},
    {name:"Lars Eriksson", role:"COO", priority:"Operational stability during transition.", concern:"Organisation is tired after two years of integration. Worried about another big programme his team can't absorb. Wants 36-month implementation, not 18.", quote:"'The right answer implemented badly is worse than a slightly sub-optimal answer implemented well.'", color:"#3A4148"},
    {name:"Marek Kowalski", role:"Site Director, Gdansk (not on SteerCo)", priority:"Clarity on Gdansk's role in the future network.", concern:"Survival anxiety for his site and team. Actually pragmatic if given a clear positive mandate — but reads any ambiguity as a threat.", quote:"'Give me volume commitments and a clear mandate. That's all I need.'", color:"#5A7370"},
    {name:"Sofia Lindqvist", role:"Head of Commercial", priority:"Protect DACH growth momentum and customer relationships.", concern:"Any disruption to DACH lead times risks relationships she's built. Will oppose anything that increases delivery risk. Hasn't shaped the analysis — will react to it.", quote:"'I'm supportive of this work but I need to understand the service level implications before I can endorse a specific direction.'", color:"#A86B3F"},
  ];
  const allText = stakeholders.map(s => `${s.name} (${s.role})\nPriority: ${s.priority}\nConcern: ${s.concern}\nQuote: ${s.quote}`).join("\n\n");

  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px", flexWrap:"wrap", gap:"8px"}}>
        <div className="mono-font" style={{fontSize:"10px", letterSpacing:"2px", color:"#6B655A"}}>STEERING COMMITTEE — 5 STAKEHOLDERS</div>
        <CopyButton text={allText}/>
      </div>
      {stakeholders.map((s,i) => (
        <div key={i} className="stakeholder-card" style={{borderTop:`3px solid ${s.color}`}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"10px", flexWrap:"wrap", gap:"8px"}}>
            <div>
              <span className="display-font" style={{fontSize:"18px", fontWeight:500}}>{s.name}</span>
              <span className="mono-font" style={{fontSize:"10px", letterSpacing:"1.5px", color:s.color, marginLeft:"12px"}}>{s.role.toUpperCase()}</span>
            </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))", gap:"12px", marginBottom:"12px"}}>
            <div><div className="mono-font" style={{fontSize:"9px", letterSpacing:"1.5px", color:"#6B655A", marginBottom:"4px"}}>STATED PRIORITY</div><p style={{fontSize:"13px", lineHeight:1.5, margin:0, color:"#1A1814"}}>{s.priority}</p></div>
            <div><div className="mono-font" style={{fontSize:"9px", letterSpacing:"1.5px", color:"#6B655A", marginBottom:"4px"}}>UNDERLYING CONCERN</div><p style={{fontSize:"13px", lineHeight:1.5, margin:0, color:"#3D3830"}}>{s.concern}</p></div>
          </div>
          <div style={{padding:"10px 14px", background:"#F5F1E8", borderRadius:"2px", borderLeft:`2px solid ${s.color}`}}>
            <p style={{fontSize:"13px", lineHeight:1.5, margin:0, color:"#1A1814", fontStyle:"italic"}} className="display-font">{s.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
