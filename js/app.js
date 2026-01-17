/* app.js
   - Renders projects + open source from /data/projects.json
   - Manages language dropdown UI
   - Manages theme toggle + localized theme label
*/

async function loadJson(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  return await res.json();
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) node.append(child);
  return node;
}

function getLang() {
  return (window.getActiveLang && window.getActiveLang()) || (localStorage.getItem("site_lang") || "hu");
}

function pick(obj) {
  const lang = getLang();
  if (obj && typeof obj === "object" && (obj.hu || obj.en)) return obj[lang] || obj.hu || obj.en;
  return obj;
}

function linkLabel(type) {
  // map link types to i18n keys
  switch (type) {
    case "repo": return window.t(getLang(), "btn.repo");
    case "case": return window.t(getLang(), "btn.case_study");
    case "examples": return window.t(getLang(), "btn.examples");
    case "reading": return window.t(getLang(), "btn.reading_list");
    case "contrib": return window.t(getLang(), "btn.contributions");
    case "example_pr": return window.t(getLang(), "btn.example_pr");
    default: return type;
  }
}

function renderProjectCard(item) {
  const pills = pick(item.pills) || [];
  const title = pick(item.title);
  const desc = pick(item.desc);
  const stack = item.stack;
  const highlights = pick(item.highlights) || [];

  const card = el("article", { class: "card project" });

  card.append(el("div", { class: "top" }, [
    el("span", { class: "pill", text: pills[0] || "" }),
    el("span", { class: "pill", text: pills[1] || "" })
  ]));

  card.append(el("h3", { text: title || "" }));
  card.append(el("p", { text: desc || "" }));

  const meta = el("div", { class: "meta" });
  for (const lnk of (item.links || [])) {
    if (lnk.type === "case" && lnk.doc) {
      meta.append(el("a", { href: `case.html?doc=${encodeURIComponent(lnk.doc)}`, text: linkLabel("case") }));
    } else {
      meta.append(el("a", { href: lnk.href || "#", target: "_blank", rel: "noreferrer noopener", text: linkLabel(lnk.type) }));
    }
  }
  meta.append(el("span", { class: "mini", text: stack || "" }));
  card.append(meta);

  const details = el("details");
  const summary = el("summary", {}, [
    el("span", { text: window.t(getLang(), "projects.details") }),
    el("span", { class: "chev", "aria-hidden": "true" })
  ]);
  details.append(summary);

  const ul = el("ul", { class: "clean" });
  for (const h of highlights) ul.append(el("li", { text: h }));
  details.append(ul);

  card.append(details);
  return card;
}

function renderSimpleCard(item) {
  const pills = pick(item.pills) || [];
  const title = pick(item.title);
  const desc = pick(item.desc);
  const stack = item.stack;

  const card = el("article", { class: "card project" });
  card.append(el("div", { class: "top" }, [
    el("span", { class: "pill", text: pills[0] || "" }),
    el("span", { class: "pill", text: pills[1] || "" })
  ]));
  card.append(el("h3", { text: title || "" }));
  card.append(el("p", { text: desc || "" }));

  const meta = el("div", { class: "meta" });
  for (const lnk of (item.links || [])) {
    meta.append(el("a", { href: lnk.href || "#", target: "_blank", rel: "noreferrer noopener", text: linkLabel(lnk.type) }));
  }
  meta.append(el("span", { class: "mini", text: stack || "" }));
  card.append(meta);
  return card;
}

let DATA_CACHE = null;

async function ensureData() {
  if (DATA_CACHE) return DATA_CACHE;
  DATA_CACHE = await loadJson("data/projects.json");
  return DATA_CACHE;
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const data = DATA_CACHE;
  for (const group of (data.skills || [])) {
    const card = el("article", { class: "card" });

    card.append(el("h3", { text: pick(group.title) || "" }));

    const innerGrid = el("div", { class: "grid", style: "margin-top: 10px;" });
    for (const row of (group.rows || [])) {
      innerGrid.append(el("div", { class: "card", style: "box-shadow:none;" }, [
        el("h3", { style: "text-transform:none; letter-spacing:0; color:var(--fg);", text: pick(row.title) || "" }),
        el("p", { text: pick(row.desc) || "" })
      ]));
    }

    card.append(innerGrid);

    const tagrow = el("div", { class: "tagrow" });
    for (const tag of (pick(group.tags) || [])) tagrow.append(el("span", { class: "tag", text: tag }));
    card.append(tagrow);

    grid.append(card);
  }
}

async function renderAll() {
  const data = await ensureData();

  const projectsGrid = document.getElementById("projectsGrid");
  const osGrid = document.getElementById("osGrid");
  if (!projectsGrid || !osGrid) return;

  projectsGrid.innerHTML = "";
  osGrid.innerHTML = "";

  for (const p of (data.projects || [])) {
    projectsGrid.append(renderProjectCard(p));
  }

  for (const o of (data.openSource || [])) {
    osGrid.append(renderSimpleCard(o));
  }

  renderSkills();
}

/* ---------- Theme ---------- */
function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("themeBtn");
  const label = document.getElementById("themeLabel");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const stored = localStorage.getItem("theme"); // 'dark' | 'light' | null
  let systemPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

  function themeLabelFor(mode) {
    const lang = getLang();
    if (mode === "light") return window.t(lang, "theme.light");
    if (mode === "dark") return window.t(lang, "theme.dark");
    return window.t(lang, "theme.system");
  }

  function applyTheme(mode) {
    root.dataset.themeMode = mode ?? "system";

    if (mode === "light") {
      root.setAttribute("data-theme", "light");
      if (label) label.textContent = themeLabelFor("light");
      return;
    }

    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
      if (label) label.textContent = themeLabelFor("dark");
      return;
    }

    const sys = systemPrefersLight ? "light" : "dark";
    root.setAttribute("data-theme", sys);
    if (label) label.textContent = themeLabelFor("system");
  }

  applyTheme(stored || null);

  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme"); // 'light' | 'dark'
      const next = current === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  }

  document.addEventListener("langchange", () => {
    const mode = root.dataset.themeMode ?? "system";
    if (label) label.textContent = themeLabelFor(mode);
  });

  if (!stored && window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    mq.addEventListener?.("change", (e) => {
      systemPrefersLight = !!e.matches;
      applyTheme(null);
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();

  // Render initial (after i18n initialized)
  await renderAll();

  // Re-render on language change (projects + open source)
  document.addEventListener("langchange", async () => {
    await renderAll();
  });
});
