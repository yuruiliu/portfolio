/* ==========================================================
   main.js —— 渲染项目列表 + 导航交互
   ========================================================== */
(function () {
  "use strict";

  /* ---------- 渲染项目列表 ---------- */
  const list = document.getElementById("projectList");

  if (list && Array.isArray(projects)) {
    const frag = document.createDocumentFragment();

    projects.forEach((p) => {
      const item = document.createElement("article");
      item.className = "project";

      const stackHtml = p.stack.map((s) => `<span>${s}</span>`).join("");

      item.innerHTML = `
        <div class="project-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="project-body">
          <span class="project-cat">${p.category}</span>
          <h3 class="project-title">${p.name}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-stack">${stackHtml}</div>
          <span class="project-date">${p.date}</span>
        </div>
      `;

      frag.appendChild(item);
    });

    list.appendChild(frag);
  }

  /* ---------- 导航高亮：滚动监听 ---------- */
  const links = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link")
  );

  // 各区块在文档中的位置，用于定位
  function getSections() {
    return links
      .map((link) => {
        const id = link.getAttribute("href");
        const el = document.querySelector(id);
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);
  }

  const sections = getSections();

  function onScroll() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop + 120;
    let current = sections[0] ? sections[0].link : null;

    sections.forEach(({ link, el }) => {
      if (el.offsetTop <= scrollPos) current = link;
    });

    links.forEach((link) =>
      link.classList.toggle("active", link === current)
    );
  }

  if (sections.length) {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();