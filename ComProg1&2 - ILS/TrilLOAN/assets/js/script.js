document.addEventListener("DOMContentLoaded", async () => {
  const isInPages = window.location.pathname.includes("/pages/");
  const base = isInPages ? ".." : ".";

  try {
    // HEADER
    const header = document.getElementById("header");
    const headerRes = await fetch(`${base}/components/header.html`);
    header.innerHTML = await headerRes.text();

    // NAVBAR
    const navbar = header.querySelector("#navbar");
    const navbarRes = await fetch(`${base}/components/navbar.html`);
    navbar.innerHTML = await navbarRes.text();

    // FOOTER
    const footer = document.getElementById("footer");
    const footerRes = await fetch(`${base}/components/footer.html`);
    footer.innerHTML = await footerRes.text();
  } catch (err) {
    console.error("Component loading failed:", err);
  }
});