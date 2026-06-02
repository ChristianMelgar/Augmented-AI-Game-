// ─── MAIN APP ─────────────────────────────────────────────────────────────────

const initialMatrixData = {
  1: {
    pool: [
      {id: "pre_1_0", headline: "HTML interview synthesis tool", desc: "Build an HTML where the team uploads interview transcripts and gets back a structured case for change — current state issues, future state goals, agreements flagged, and contradictions showing exactly who disagrees with whom and on what."},
      {id: "pre_1_1", headline: "Cross-reference agent", desc: "Create an agent that cross-references all interview inputs, surfaces where specific stakeholders contradict each other, and states clearly where there is agreement and where there isn\'t — so the team resolves disagreements with evidence rather than gut feel."},
      {id: "pre_1_2", headline: "Interactive scope configurator", desc: "Build an HTML where the client selects their priorities and constraints and gets back a recommended scope with rationale, trade-offs, and what\'s excluded and why — making the scoping conversation interactive rather than consultant-led."},
      {id: "pre_1_3", headline: "HTML workshop designer", desc: "Input the decision to be made, the participants, and the time available — get back a full agenda, facilitation guide, and pre-read structure. The workshop is designed before the team has had a single internal discussion about it."},
      {id: "pre_1_4", headline: "Firm knowledge base agent", desc: "Create an agent that pulls relevant frameworks, previous similar workshops, and case studies from the firm\'s knowledge base and suggests workshop content and structure for a given topic and client context."},
      {id: "pre_1_5", headline: "HTML hypothesis builder", desc: "Input what you know from public data and early signals — get back a structured hypothesis tree with confidence levels, supporting evidence, and the key questions still open. Built before the first client meeting."},
      {id: "pre_1_6", headline: "Continuous monitoring agent", desc: "Create an agent that monitors public signals relevant to your hypotheses — press, filings, analyst notes, trade publications — and updates the hypothesis tracker automatically as new information emerges."},
      {id: "pre_1_7", headline: "Living project charter", desc: "A project charter that updates itself — as the team adds data and decisions, the document rewrites its own scope, hypotheses, and open questions in real time. The charter is always current without anyone maintaining it."},
      {id: "pre_1_8", headline: "Pre-meeting briefing agent", desc: "An agent that sits in your client emails and calendar, reads the context, and briefs you before every meeting — who\'s in the room, what they care about, what was said last time, and what you need from them today."},
      {id: "pre_1_9", headline: "Stakeholder alignment simulator", desc: "Input each stakeholder\'s known position and priorities and get back a recommended sequence for conversations — showing the path to build momentum toward the decision you need before the steering committee."}
    ],
    placed: []
  },
  2: {
    pool: [
      {id: "pre_2_0", headline: "Data collection plan from hypothesis tree", desc: "Input your hypothesis tree and get back a structured data collection plan — exactly what data is needed, why, where to get it, and what is nice-to-have versus essential. No more collecting data because it feels relevant."},
      {id: "pre_2_1", headline: "Data gap monitoring agent", desc: "Create an agent that monitors what data has been collected and continuously flags gaps — \'you have a hypothesis about Gdansk unit costs but no site-level cost data yet\' — so nothing falls through the cracks."},
      {id: "pre_2_2", headline: "Interview-to-hypothesis mapping tool", desc: "Upload interview transcripts and get back quotes, themes, and evidence mapped directly to each hypothesis — so you know instantly which hypotheses the interviews support, which they challenge, and what\'s still unresolved."},
      {id: "pre_2_3", headline: "Real-time debrief synthesis agent", desc: "An agent that joins your interview debrief, listens to the team discussion, and writes up the structured synthesis in real time — themes, quotes, contradictions, and hypothesis implications. No post-interview admin."},
      {id: "pre_2_4", headline: "Self-building fact-pack HTML", desc: "A fact-pack that builds itself — as data comes in, the HTML updates automatically with charts, comparisons, and narrative. The team edits and challenges rather than builds from scratch."},
      {id: "pre_2_5", headline: "Interactive baseline validation tool", desc: "A baseline validation HTML shared with the client where they confirm, challenge, or annotate each data point directly — getting structured sign-off asynchronously rather than in a two-hour alignment meeting."},
      {id: "pre_2_6", headline: "Targeted validation agent", desc: "An agent that sends targeted validation questions to the right client contacts based on the data — \'Marek, can you confirm the Gdansk utilisation figure for Q3?\' — and chases responses automatically."},
      {id: "pre_2_7", headline: "Instant visual analysis tool", desc: "Upload the raw data and get back an instant visual analysis — outliers flagged, patterns surfaced, and the three things the data says that you didn\'t expect highlighted before the analyst has touched it."},
      {id: "pre_2_8", headline: "Analysis integrity agent", desc: "An agent that continuously cross-checks your analysis against the raw data and flags inconsistencies — so errors get caught before the client sees them, not after."},
      {id: "pre_2_9", headline: "Cost-to-serve scenario tool", desc: "Upload your cost-to-serve data and get back a scenario comparison — which sites are structurally viable, which aren\'t, and what the numbers look like under different volume and cost assumptions."}
    ],
    placed: []
  },
  3: {
    pool: [
      {id: "pre_3_0", headline: "Live scenario modelling HTML", desc: "A live scenario modelling tool where you change a parameter — close Oslo, reduce SKUs by 20%, shift DACH volume to Gdansk — and every output updates instantly: cost-to-serve, service levels, capex, EBIT margin."},
      {id: "pre_3_1", headline: "Interconnected impact model", desc: "A full model where pulling one lever shows the cascade — change service level targets and see the effect on required capacity, logistics cost, and headcount simultaneously. Every decision connected to every other."},
      {id: "pre_3_2", headline: "Assumption propagation agent", desc: "An agent that tracks every assumption change and automatically propagates it through the model — so when the CFO changes the capex ceiling at 4pm, the recommendation update is ready by morning."},
      {id: "pre_3_3", headline: "Change log agent", desc: "An agent that maintains a live change log — every time an assumption or design criterion shifts, it records who changed it, why, and what the impact was on the recommendation. Full audit trail without any manual effort."},
      {id: "pre_3_4", headline: "Scenario suggestion agent", desc: "An agent that analyses your historical data and comparable industry cases to suggest which scenario configurations are worth modelling — so the team doesn\'t spend two weeks on a scenario the data already rules out."},
      {id: "pre_3_5", headline: "Scenario definition tool", desc: "Input your design criteria and constraints and get back a structured longlist of scenario options with the strategic logic for each — ready to pressure-test with the client before the team has built a single model."},
      {id: "pre_3_6", headline: "Auto-generated scenario one-pagers", desc: "An agent that writes a one-pager for each scenario automatically — strategic logic, key assumptions, financial summary, pros and cons — as soon as the model outputs are ready."},
      {id: "pre_3_7", headline: "Interactive scenario comparison for steer-co", desc: "An interactive HTML for the steering committee where they toggle between scenarios, adjust assumptions, and see the recommendation update in real time — rather than reacting to a static slide."},
      {id: "pre_3_8", headline: "Conversational scenario model", desc: "A scenario model where instead of filling in cells, you type \'what if we close Oslo and move DACH volume to Gdansk?\' and the model updates. The inputs are a conversation, the output is the numbers."},
      {id: "pre_3_9", headline: "Conversational recommendation builder", desc: "Talk to the model — \'show me the scenario that maximises EBIT without exceeding €85M capex\' — and it finds the configuration, explains the trade-offs, and drafts the recommendation narrative."}
    ],
    placed: []
  },
  4: {
    pool: [
      {id: "pre_4_0", headline: "Audience-matched storyline builder", desc: "Input the recommendation, the audience, and the key objections and get back a narrative arc structured for that specific room — what goes first, what\'s in the appendix, and what to cut entirely."},
      {id: "pre_4_1", headline: "Auto-assembled pre-read agent", desc: "An agent that assembles the pre-read automatically — pulls the relevant sections from the fact-pack, scenario model, and recommendation, and compiles them into a structured document with a clear decision ask at the top."},
      {id: "pre_4_2", headline: "Interactive pre-read HTML", desc: "Replace the pre-read PDF entirely — an interactive HTML the client reads before the meeting where they can click into the analysis behind any number and flag their questions before they walk in the room."},
      {id: "pre_4_3", headline: "Combined pre-read and decision tool", desc: "A single HTML where the client reads the recommendation, interacts with the scenario model, and registers their position on each decision directly — no separate slides, no separate pre-read, no separate voting tool."},
      {id: "pre_4_4", headline: "Live steering committee experience", desc: "Bring the scenario model into the steering committee itself — instead of presenting slides, the consultant facilitates a live conversation where the committee adjusts assumptions and sees the recommendation respond in real time."},
      {id: "pre_4_5", headline: "Pre-alignment tracker HTML", desc: "Log each stakeholder conversation, their current position, and what it would take to move them. The tool shows visually where you have alignment and where you don\'t — before the meeting, not after."},
      {id: "pre_4_6", headline: "Alignment monitoring agent", desc: "An agent that tracks stakeholder positions across all pre-alignment conversations and flags when you have enough alignment to call the decision — or when a blocker has emerged that needs to be resolved first."},
      {id: "pre_4_7", headline: "Stakeholder stress-test tool", desc: "Input the recommendation and the model and get back the three most likely challenges from the CFO, COO, and Head of Commercial — the data that addresses each, and the framing that lands best."},
      {id: "pre_4_8", headline: "Business case stress-test chat", desc: "Use Claude to simultaneously play the CFO, COO, and Head of Commercial — challenging every assumption in the business case from their perspective before the real meeting. Find the weak points first."},
      {id: "pre_4_9", headline: "Narrative-to-slide converter", desc: "Input the recommendation narrative and get back a structured slide deck — headlines, supporting points, and chart placeholders — so the team is editing and refining rather than building from a blank canvas."}
    ],
    placed: []
  },
};
