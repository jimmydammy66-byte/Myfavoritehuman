(() => {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const revealButton = document.getElementById("revealButton");
  const surpriseMessage = document.getElementById("surpriseMessage");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuToggle.querySelector("span").textContent = isOpen ? "−" : "＋";
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.querySelector("span").textContent = "＋";
      });
    });
  }

  if (revealButton && surpriseMessage) {
    revealButton.addEventListener("click", () => {
      const isHidden = surpriseMessage.hidden;
      surpriseMessage.hidden = !isHidden;
      revealButton.setAttribute("aria-expanded", String(isHidden));
      revealButton.innerHTML = isHidden
        ? 'Your note is open <span aria-hidden="true">↙</span>'
        : 'Open your last little note <span aria-hidden="true">↗</span>';
      if (isHidden) {
        surpriseMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

})();
