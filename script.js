const projects = [
  {
    title: "Product list with cart",
    img: "/assets/image/project-lis-cart.png",
    alt: "Projeto 1. Product list with cart",
    stack: "HTML | CSS | JavaScript",
    codeUrl: "https://github.com/IzabelleAlves/Product-list-with-cart",
    liveUrl: "https://cart-product-site.netlify.app/",
  },
  {
    title: "Mascots",
    img: "/assets/image/project-mascots.png",
    alt: "Projeto 4. Mascots",
    stack: "HTML | CSS | JavaScript",
    codeUrl: "https://github.com/IzabelleAlves/Product-list-with-cart",
    liveUrl: "https://cart-product-site.netlify.app/",
  },
  // {
  //   title: "",
  //   img: "",
  //   alt: "",
  //   stack: "",
  //   codeUrl: "",
  //   liveUrl: "",
  // },
  // {
  //   title: "",
  //   img: "",
  //   alt: "",
  //   stack: "",
  //   codeUrl: "",
  //   liveUrl: "",
  // },
];

const projectsContainer = document.getElementById("projects");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <a href="${project.liveUrl}" target="_blank">
      <img src="${project.img}" alt="${project.alt}" />
    </a>
    <h2 class="sub-title">${project.title}</h2>
    <div class="project-links">
      <p>${project.stack}</p>
        <div>
          <a href="${project.codeUrl}" target="_blank">Ver código |</a>
          <a href="${project.liveUrl}" target="_blank">Ver projeto</a>
        </div>
    </div>
  `;

  projectsContainer.appendChild(card);
});
