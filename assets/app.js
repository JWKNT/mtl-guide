(() => {
  "use strict";

  const sections = [...document.querySelectorAll(".doc-section")];
  const toc = document.querySelector("#doc-toc");
  const tocToggle = document.querySelector("#toc-toggle");
  const backdrop = document.querySelector("#toc-backdrop");

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

  function setToc(open) {
    if (!toc || !tocToggle || !backdrop) return;
    toc.classList.toggle("is-open", open);
    tocToggle.setAttribute("aria-expanded", String(open));
    backdrop.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  }

  tocToggle?.addEventListener("click", () => setToc(!toc.classList.contains("is-open")));
  backdrop?.addEventListener("click", () => setToc(false));
  toc?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setToc(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toc?.classList.contains("is-open")) setToc(false);
  });

  if ("IntersectionObserver" in window && sections.length) {
    const links = new Map([...document.querySelectorAll(".doc-toc a")].map((link) => [link.hash.slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      links.forEach((link) => link.classList.remove("is-active"));
      links.get(visible[0].target.id)?.classList.add("is-active");
    }, { rootMargin: "-10% 0px -75%", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
