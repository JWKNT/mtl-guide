(() => {
  "use strict";

  const sections = [...document.querySelectorAll(".doc-section")];
  const toc = document.querySelector("#doc-toc");
  const tocToggle = document.querySelector("#toc-toggle");
  const narrow = window.matchMedia("(max-width: 650px)");
  document.documentElement.classList.add("guide-enhanced");

  document.querySelectorAll(".doc-content pre").forEach((pre) => {
    const button = document.createElement("button");
    button.className = "copy-code";
    button.type = "button";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code block");
    button.addEventListener("click", async () => {
      const text = pre.querySelector("code")?.textContent || "";
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
        window.setTimeout(() => { button.textContent = "Copy"; }, 1400);
      } catch {
        button.textContent = "Select text";
      }
    });
    pre.append(button);
  });

  // Mobile contents stays in the reading flow. Hidden links leave the tab order;
  // without JavaScript the complete contents remains visible at every width.
  function setToc(open, restoreFocus = false) {
    if (!toc || !tocToggle) return;
    const visible = !narrow.matches || open;
    toc.hidden = !visible;
    tocToggle.setAttribute("aria-expanded", String(visible));
    if (restoreFocus) tocToggle.focus();
  }

  tocToggle?.addEventListener("click", () => setToc(toc.hidden));
  toc?.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || !narrow.matches) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    setToc(false);
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.scrollIntoView();
    history.pushState(null, "", link.hash);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && narrow.matches && toc && !toc.hidden) setToc(false, true);
  });
  const updateLayout = () => setToc(false);
  if (typeof narrow.addEventListener === "function") narrow.addEventListener("change", updateLayout);
  else narrow.addListener(updateLayout);
  updateLayout();

  if ("IntersectionObserver" in window && sections.length) {
    const links = new Map([...document.querySelectorAll(".doc-toc a")].map((link) => [link.hash.slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      links.forEach((link) => { link.classList.remove("is-active"); link.removeAttribute("aria-current"); });
      const active = links.get(visible[0].target.id);
      active?.classList.add("is-active");
      active?.setAttribute("aria-current", "location");
    }, { rootMargin: "-10% 0px -75%", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
