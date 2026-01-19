const LANG_KEY = "site_lang";
const DEFAULT_LANG = "en";

const I18N = {
  hu: {
    "meta.title": "Katona Zoltán | zka26",
    "meta.description": "Katona Zoltán — IT Support / Junior Sysadmin | Automatizálás és .NET projektek",
    "nav.name": "Katona Zoltán",
    "nav.tagline": "IT Support • IT Ops • Cisco",
    "nav.tagline2": ".NET (WPF/ASP.NET) • Python/C++",
    "nav.aria": "Fő navigáció",
    "nav.projects": "Projektek",
    "nav.skills": "Készségek",
    "nav.opensource": "Nyílt forráskód",
    "nav.contact": "Kapcsolat",
    "lang.label": "Nyelv",
    "lang.hu_name": "Magyar",
    "lang.en_name": "English",
    "lang.menu_aria": "Nyelv kiválasztása",
    "lang.hu_alt": "Magyar (HU)",
    "lang.en_alt": "English (EN)",
    "btn.get_in_touch": "Kapcsolat",
    "btn.repo": "Repo",
    "btn.case_study": "Részletek",
    "btn.examples": "Példák",
    "btn.reading_list": "Olvasnivaló",
    "btn.contributions": "Hozzájárulások",
    "btn.example_pr": "Példa PR",
    "btn.back": "Vissza",
    "theme.toggle_aria": "Téma váltása",
    "theme.light": "Világos mód",
    "theme.dark": "Sötét mód",
    "theme.system": "Rendszer",
    "hero.kicker": "Budapest • Székesfehérvár • Hibrid",
    "hero.title": "Gyakorlati IT-támogatás<br>Fejlesztői szemlélettel",
    "hero.desc": "**IT Support** pozíciót keresek: **felhasználói kérések** kezelése, **Windows végpontok beállítása**, **hibák elhárítása**, alapszintű **ticket alapú támogatás**. Emellett **Cisco routing/switching** laborokból is van gyakorlatom.",
    "hero.desc2": "Másrészt **alkalmazásokat** és **rendszereket** is fejlesztek, ahol a cél az **átlátható felület**, a **megbízható** és **biztonságos adatkezelés** és a gyakorlatban használható kimenetek, riportok és exportok.",
    "hero.cta.github": "GitHub",
    "hero.cta.linkedin": "LinkedIn (opcionális)",
    "hero.cta.projects": "Projektek megtekintése",
    "stats.focus.title": "Fókusz",
    "stats.focus.desc": "Windows végpont támogatás, hálózati alapok, hibakeresés, és kisebb automatizálások, amik időt spórolnak.",
    "stats.focus.tag1": "Windows",
    "stats.focus.tag2": "Cisco",
    "stats.focus.tag3": "Hibakeresés",
    "stats.focus.tag4": "Git",
    "stats.building.title": "Jelenlegi projektek",
    "stats.building.desc": "Egy gyors versenypontozó appot, ami ranglistát és nyomtatható jegyzőkönyvet készít, illetve egy kisvállalati CRM-et, amiben a rendelések, készlet és utánkövetés egy helyen átlátható.",
    "stats.building.tag1": "WPF/.NET 8",
    "stats.building.tag2": "ASP.NET Core",
    "stats.building.tag3": "PostgreSQL",
    "stats.building.tag4": "PDF export",
    "projects.title": "Projektek",
    "projects.subtitle": "Válogatás a korábbi munkáimból és saját fejlesztéseimből",
    "projects.details": "Kiemelések",
    "skills.title": "Készségek",
    "skills.subtitle": "Fő készségek laborokból és gyakorlati projektekből.",
    "s1.title": "Hálózat & infrastruktúra",
    "s1.r1.title": "Routing & Switching (Cisco)",
    "s1.r1.desc": "VLAN/trunk, STP, EtherChannel; IGP routing; FHRP; alap hibakeresés és topológiák felépítése.",
    "s1.r2.title": "Alapszolgáltatások & biztonság",
    "s1.r2.desc": "DHCP/DNS alapok; ACL, NAT/PAT; IPv6 áttekintés; VPN/TLS/IPsec fogalmak, alap hardening.",
    "s1.tag1": "Cisco Packet Tracer",
    "s1.tag2": "IGP • FHRP",
    "s1.tag3": "ACL / NAT",
    "s1.tag4": "Troubleshooting",
    "s2.title": "Fejlesztés & Automatizálás",
    "s2.r1.title": ".NET / Desktop",
    "s2.r1.desc": "C# • WPF • MVVM • DataGrid logika • PDF/nyomtatásra kész kimenet.",
    "s2.r2.title": "Web & Adat",
    "s2.r2.desc": "ASP.NET Core MVC • EF Core • PostgreSQL • Bootstrap • alap HTML/CSS/JS.",
    "s2.tag1": "Git/GitHub",
    "s2.tag2": "Automatizálás (Python/VBA/C++)",
    "s2.tag3": "Dokumentáció",
    "os.title": "Nyílt forráskód",
    "os.subtitle": "Néhány nyílt forráskódú hozzájárulás",
    "contact.title": "Kapcsolat",
    "contact.pitch": "Nyugodtan keressen meg bármikor.",
    "contact.note": "Megjegyzés: a képernyőképek és dokumentumok redaktáltak az érzékeny adatok elkerülésére.",
    "case.loading": "Betöltés…",
    "case.not_found": "Nem található tartalom ehhez:",
    "case.open_raw": "Megnyitás nyersen",
    "footer.copyright": "© <span id=\"year\"></span> Katona Zoltán",
    "footer.built": "HTML • CSS • JS (GitHub Pages)"
  },
  en: {
      "meta.title": "Zoltán Katona | zka26",
    "meta.description": "Zoltán Katona — IT Support / Junior Sysadmin | Automation & .NET projects",
    "nav.name": "Zoltán Katona",
    "nav.tagline": "IT Support • IT Ops • Cisco",
    "nav.tagline2": ".NET (WPF/ASP.NET) • Python/C++",
    "nav.aria": "Primary navigation",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.opensource": "Open Source",
    "nav.contact": "Contact",
    "lang.label": "Language",
    "lang.hu_name": "Hungarian",
    "lang.en_name": "English",
    "lang.menu_aria": "Choose language",
    "lang.hu_alt": "Hungarian (HU)",
    "lang.en_alt": "English (EN)",
    "btn.get_in_touch": "Contact",
    "btn.repo": "Repo",
    "btn.case_study": "Details",
    "btn.examples": "Examples",
    "btn.reading_list": "Reading list",
    "btn.contributions": "Contributions",
    "btn.example_pr": "Example PR",
    "btn.back": "Back",
    "theme.toggle_aria": "Toggle theme",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "theme.system": "System",
    "hero.kicker": "Budapest • Székesfehérvár • Hybrid",
    "hero.title": "Practical IT support<br>Developer mindset",
    "hero.desc": "I’m looking for an **IT Support** role: handling **user requests**, **Windows endpoint setup**, **incident troubleshooting**, and basics **ticket-based support**. I also have hands-on practice from **Cisco routing/switching** labs.",
    "hero.desc2": "On the side, I build **application** and **small systems** focused on **clear UI**, **reliable** and **secure data handling**, and practical outputs like reports and exports.",
    "hero.cta.github": "GitHub",
    "hero.cta.linkedin": "LinkedIn (optional)",
    "hero.cta.projects": "See projects",
    "stats.focus.title": "Focus",
    "stats.focus.desc": "Windows endpoint support, networking fundamentals, troubleshooting, and small automations that save time.",
    "stats.focus.tag1": "Windows",
    "stats.focus.tag2": "Cisco",
    "stats.focus.tag3": "Troubleshooting",
    "stats.focus.tag4": "Git",
    "stats.building.title": "Current projects",
    "stats.building.desc": "A fast competition scoring app that generates clean rankings and printable reports, and a small-business CRM to track orders, stock, and follow-ups in one place.",
    "stats.building.tag1": "WPF/.NET 8",
    "stats.building.tag2": "ASP.NET Core",
    "stats.building.tag3": "PostgreSQL",
    "stats.building.tag4": "PDF export",
    "projects.title": "Projects",
    "projects.subtitle": "A selection of previous work and personal builds",
    "projects.details": "Highlights",
    "skills.title": "Skills",
    "skills.subtitle": "Core skills from hands-on labs and practical projects.",
    "s1.title": "Networking & Infrastructure",
    "s1.r1.title": "Routing & Switching (Cisco)",
    "s1.r1.desc": "VLAN/trunking, STP, EtherChannel; IGP routing; FHRP; troubleshooting and building small topologies.",
    "s1.r2.title": "Core Services & Security",
    "s1.r2.desc": "DHCP/DNS fundamentals; ACLs, NAT/PAT; IPv6 overview; VPN/TLS/IPsec concepts, basic hardening.",
    "s1.tag1": "Packet Tracer",
    "s1.tag2": "IGP • FHRP",
    "s1.tag3": "ACL / NAT",
    "s1.tag4": "Troubleshooting",
    "s2.title": "Development & Automation",
    "s2.r1.title": ".NET & Desktop",
    "s2.r1.desc": "C# • WPF • MVVM • DataGrid logic • PDF/print-ready output.",
    "s2.r2.title": "Web & Data",
    "s2.r2.desc": "ASP.NET Core MVC • EF Core • PostgreSQL • Bootstrap • basic HTML/CSS/JS.",
    "s2.tag1": "Git/GitHub",
    "s2.tag2": "Automation (Python/VBA/C++)",
    "s2.tag3": "Documentation",
    "os.title": "Open Source",
    "os.subtitle": "A few open-source contributions",
    "contact.title": "Contact",
    "contact.pitch": "Feel free to reach out anytime.",
    "contact.note": "Note: Screenshots and documents are redacted to avoid sensitive data.",
    "case.loading": "Loading…",
    "case.not_found": "No content found for:",
    "case.open_raw": "Open raw",
    "footer.copyright": "© <span id=\"year\"></span> Zoltán Katona",
    "footer.built": "HTML • CSS • JS (GitHub Pages)"
  }
};

function t(lang, key) {
  return I18N?.[lang]?.[key] ?? I18N?.[DEFAULT_LANG]?.[key] ?? `[[${key}]]`;
}

function formatI18nHtml(raw) {
  const s = String(raw ?? "");

  // Converts Markdown bold (**text**) to HTML <strong>text</strong>.
  // Intentionally minimal: only bold; no other markdown.
  return s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

window.t = t;

window.__activeLang = window.__activeLang || (localStorage.getItem(LANG_KEY) || DEFAULT_LANG);
window.getActiveLang = () => window.__activeLang;

function applyLang(lang) {
  window.__activeLang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(lang, key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = formatI18nHtml(t(lang, key));
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const raw = el.getAttribute("data-i18n-attr") || "";
    raw.split(";").map(x => x.trim()).filter(Boolean).forEach(pair => {
      const [attr, key] = pair.split(":").map(x => x.trim());
      if (attr && key) el.setAttribute(attr, t(lang, key));
    });
  });

  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) document.title = t(lang, titleEl.getAttribute("data-i18n"));

  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

window.setLang = applyLang;

function getInitialLang() {
  return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getInitialLang());

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });
});
