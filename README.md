# The Augmented Consultant Game

This is the original single-file `index.html` (2,117 lines) split into smaller files for easier navigation and editing in Cursor.

**Nothing in the code logic was changed.** Each file contains the exact same lines that were inlined in the original `<script type="text/babel">` block — only the file boundaries are new.

---

## File structure

```
.
├── index.html               # Shell: CDN imports, root div, script tags loading the files below
├── styles.css               # All CSS (was in <style>...</style>)
├── README.md                # This file
└── js/
    ├── data.js              # React hooks alias + DEFAULT_TEAMS, OPS_DATA, PL_DATA, SCENARIO_CRITERIA, SITE_REF
    ├── excelData.js         # downloadExcel() helper + EXCEL_DATA base64 blobs + downloadPhase1-4Excel()
    ├── stepsConfig.js       # bgB64 (background image base64) + STEPS array (game phases)
    ├── helpers.js           # renderIcon(), buildPath(), cornerStyle()
    ├── components.jsx       # CopyButton, DataTab, Phase1Data, Phase2Data, Phase3Data, Phase4Data
    ├── initialMatrixData.js # initialMatrixData object — the pool of brainstorming ideas per phase
    ├── App.jsx              # The main App() component (the big one, ~1,560 lines)
    └── main.jsx             # ReactDOM.createRoot(...).render(<App/>)
```

## How it runs

The HTML uses **Babel standalone in the browser** — there is no build step. Each `js/*.jsx` file is loaded via:

```html
<script type="text/babel" src="js/<file>"></script>
```

Babel transforms each file in the browser and executes them in document order, all sharing the same global script scope. That means `const STEPS` declared in `stepsConfig.js` is visible inside `App.jsx`, just as it was when everything lived in one big script.

**Load order matters.** It's already correct in `index.html` (dependencies come before consumers). If you add a new file, slot it in at the right place.

## How to run locally

Because the HTML loads JS files via `src=`, you can't just open `index.html` from your filesystem (the browser blocks `file://` cross-file fetches). Serve the folder over HTTP instead.

From the project root:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .

# or just use any static server
```

Then open `http://localhost:8000`.

## How to develop in Cursor

1. Open this folder in Cursor.
2. Edit any `.jsx` / `.js` / `.css` file.
3. Save and refresh the browser — Babel re-transpiles on every page load.

If you want faster reloads or proper module imports later, you can migrate to Vite:

```bash
npm create vite@latest . -- --template react
```

…and then convert the script tags into ES module `import`/`export`. For now though, the in-browser Babel setup keeps things zero-config and identical in behavior to the original.

## Notes

- The base64 strings in `stepsConfig.js` (the background image) and `excelData.js` (the four .xlsx files) are very long single lines. Don't reformat them — they're correct as-is.
- All four `Phase1Data` / `Phase2Data` / `Phase3Data` / `Phase4Data` components live together in `components.jsx` because they're the same family of components (the data tab for each phase). Feel free to split them further if you prefer one component per file.
