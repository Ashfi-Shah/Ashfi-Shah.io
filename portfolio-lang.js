/* Portfolio English / French language switch. */
(() => {
  "use strict";
  const english = window.portfolioEnglish;
  const french = window.portfolioFrench;
  if (!Array.isArray(english) || !Array.isArray(french)) return;

  const normalise = text => text.replace(/\s+/g, " ").trim();
  const lookup = new Map(english.map((value, index) => [value, index]));
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (node.parentElement.closest("script, style, noscript")) return NodeFilter.FILTER_REJECT;
      return lookup.has(normalise(node.nodeValue)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    nodes.push({ node, index: lookup.get(normalise(node.nodeValue)) });
  }

  function applyLanguage(language) {
    const translated = language === "fr";
    const source = translated ? french : english;
    nodes.forEach(({ node, index }) => { node.nodeValue = source[index]; });

    // The footer label is outside the position-based translation arrays.
    document.querySelectorAll('[data-i18n="footerLastUpdated"]').forEach(element => {
      element.textContent = translated ? "Dernière mise à jour :" : "Last Updated:";
    });

    // Dates remain in DD-MM-YYYY in both languages.
    document.querySelectorAll(".footer-updated-date").forEach(element => {
      const isoDate = element.getAttribute("datetime");
      if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate || "")) return;
      const [year, month, day] = isoDate.split("-");
      element.textContent = `${day}-${month}-${year}`;
    });

    document.documentElement.lang = translated ? "fr-CA" : "en-GB";
    document.title = "Ashfi Shah | Portfolio";
    document.querySelectorAll(".language-switch [data-lang]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === language));
    });
    try { localStorage.setItem("ashfi-language", language); } catch (_) {}
  }

  document.querySelectorAll(".language-switch [data-lang]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
  let saved = "en";
  try { saved = localStorage.getItem("ashfi-language") || "en"; } catch (_) {}
  applyLanguage(saved === "fr" ? "fr" : "en");
})();
