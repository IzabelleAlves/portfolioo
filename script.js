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

const education = [
  {
    name: "Sistemas para Internet | IFPE",
    duration: "Fevereiro 2024 - Dezembro 2026",
  },
  {
    name: "Formação Acelerada em Programação (FAP) - FrontEnd | Softex Pernambuco",
    duration: "Junho 2024 - Dezembro 2024",
  },
  {
    name: "Serviço Social | UFPE	",
    duration: "Agosto 2019 - Outubro 2023",
  },
];

const educationContainer = document.getElementById("education");

education.forEach((education) => {
  const cardEducation = document.createElement("div");
  cardEducation.classList.add("card-education");

  const contentDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "sub-title title-education";
  title.textContent = education.name;

  const span = document.createElement("span");
  span.className = "span-date";
  span.textContent = education.duration;

  contentDiv.appendChild(title);
  contentDiv.appendChild(span);

  cardEducation.appendChild(contentDiv);
  educationContainer.appendChild(cardEducation);
});

// const btn = document.createElement("button");
// btn.textContent = "Ver Mais";
// btn.classList.add("buttons", "btn-filled", "btn-filled-about");
// educationContainer.appendChild(btn);

const experience = [
  {
    name: "Residência em Software",
    location: "Sistemas Bem Vivendo Informática",
    description:
      "Atuação em projetos reais com foco em desenvolvimento ágil. Trabalhei com testes automatizados frontEnd utilizando Cypress, para garantir a qualidade da aplicação. Além de ",
  },
  {
    name: "Monitoria em Lógica de Programação e Estrutura de Dados",
    location: "IFPE",
    description:
      "Apoio a alunos, correção de atividades e reforço de conteúdo em sala.",
  },
];

const experienceContainer = document.getElementById("experience");

experience.forEach((experience) => {
  const cardExperience = document.createElement("div");
  cardExperience.classList.add("card-experience");

  const iconSee = document.createElement("span");
  iconSee.classList.add("icon-see");
  iconSee.innerHTML = `<i class="fa-solid fa-eye"></i>`;

  const contentDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "sub-title title-experience";
  title.textContent = experience.name;

  const span = document.createElement("span");
  span.className = "span-date";
  span.textContent = experience.location;

  const description = document.createElement("p");
  description.className = "description-experience hidden text";
  description.textContent = experience.description;

  contentDiv.appendChild(title);
  contentDiv.appendChild(span);
  contentDiv.appendChild(description);

  cardExperience.appendChild(contentDiv);
  cardExperience.appendChild(iconSee);

  cardExperience.addEventListener("click", () => {
    description.classList.toggle("hidden");

    const icon = iconSee.querySelector("i");

    if (description.classList.contains("hidden")) {
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else {
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  });

  experienceContainer.appendChild(cardExperience);
});
