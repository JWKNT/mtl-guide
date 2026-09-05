(() => {
  "use strict";

  const sections = [...document.querySelectorAll(".doc-section")];
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
