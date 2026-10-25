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
    document.documentElement.lang = translated ? "fr-CA" : "en-GB";
    document.title = translated ? "Ashfi Shah | Portfolio" : "Ashfi Shah | Portfolio";
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
