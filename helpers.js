function renderIcon(type, color, iconColor) {
  const ic = iconColor || "#F5EFE3";
  switch(type) {
    case "hyp": return (<g><circle cx="0" cy="-8" r="10" fill="none" stroke={ic} strokeWidth="2.5"/><line x1="0" y1="2" x2="0" y2="10" stroke={ic} strokeWidth="2.5" strokeLinecap="round"/><circle cx="0" cy="15" r="2" fill={ic}/></g>);
    case "data": return (<g><rect x="-16" y="-12" width="8" height="24" fill={ic} opacity="0.5"/><rect x="-4" y="-16" width="8" height="28" fill={ic} opacity="0.8"/><rect x="8" y="-8" width="8" height="20" fill={ic}/></g>);
    case "model": return (<g><polyline points="-18,12 -10,2 -2,8 6,-6 14,-2 18,-10" fill="none" stroke={ic} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="-10" cy="2" r="2.5" fill={ic}/><circle cx="-2" cy="8" r="2.5" fill={ic}/><circle cx="6" cy="-6" r="2.5" fill={ic}/><circle cx="14" cy="-2" r="2.5" fill={ic}/></g>);
    case "rec": return (<g><path d="M 0 -18 L 14 -4 L 8 -4 L 8 10 L -8 10 L -8 -4 L -14 -4 Z" fill={ic}/><rect x="-8" y="12" width="16" height="4" fill={ic}/></g>);
    default: return null;
  }
}

function buildPath(steps) {
  const pts = steps.map(s => ({x:s.x, y:s.y}));
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length-1; i++) {
    const mid = (pts[i].x + pts[i+1].x) / 2;
    d += ` C ${mid} ${pts[i].y}, ${mid} ${pts[i+1].y}, ${pts[i+1].x} ${pts[i+1].y}`;
  }
  return d;
}

function cornerStyle(pos) {
  const base = {position:"absolute",fontSize:"9px",letterSpacing:"2px",color:"#6B655A",fontFamily:"JetBrains Mono, monospace",zIndex:1};
  if (pos==="tl") return {...base,top:"12px",left:"16px"};
  if (pos==="tr") return {...base,top:"12px",right:"16px"};
  if (pos==="bl") return {...base,bottom:"12px",left:"16px"};
  if (pos==="br") return {...base,bottom:"12px",right:"16px"};
}
