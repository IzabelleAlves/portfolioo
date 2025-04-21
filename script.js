function menuMobile() {
  const menuBtn = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-menu");
  const mobileNav = document.getElementById("mobile-nav");
  const menuLinks = document.querySelectorAll("#mobile-nav a");

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
    mobileNav.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    setTimeout(() => mobileNav.classList.add("hidden"), 300); // delay para esconder após transição
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      setTimeout(() => mobileNav.classList.add("hidden"), 300);
    });
  });
}
menuMobile();

//

function projects() {
  const projects = [
    {
      title: "Product list with cart",
      img: "/assets/image/projects/project-lis-cart.png",
      alt: "Product list with cart",
      stack: "HTML | CSS | JavaScript",
      codeUrl: "https://github.com/IzabelleAlves/Product-list-with-cart",
      liveUrl: "https://cart-product-site.netlify.app/",
    },
    {
      title: "Mascots",
      img: "/assets/image/projects/project-mascots.png",
      alt: "Mascots",
      stack: "HTML | CSS | JavaScript",
      codeUrl: "https://github.com/IzabelleAlves/Product-list-with-cart",
      liveUrl: "https://cart-product-site.netlify.app/",
    },
    {
      title: "Cronômetro",
      img: "/assets/image/projects/cronometro.png",
      alt: "Cronômetro",
      stack: "HTML | CSS | JavaScript",
      codeUrl: "https://github.com/IzabelleAlves/Cronometro",
      liveUrl: "https://timemaster-cronometro.netlify.app/",
    },
    {
      title: "MyReminder",
      img: "/assets/image/projects/reminder.png",
      alt: "My Reminder",
      stack: "HTML | CSS | JavaScript",
      codeUrl: "https://github.com/IzabelleAlves/reminder",
      liveUrl: "https://my-reminder1000.netlify.app/",
    },
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
}
projects();

//

function articles() {
  const articlesData = [
    {
      topContentLink: `<a href="#projects"><i class="fa-solid fa-arrow-down arrow"></i></a>`,
    },
    {
      topContentText: `<a href="https://drive.google.com/file/d/1RbzmvaRGi7knnoMbMhVGjUxSWLVPDC7h/view?usp=sharing" target="_blank"><p class="text-my-cv">Meu CV <i class="fa-solid fa-arrow-right"></i></p></a>`,
    },
  ];

  const socialIcons = `
  <div class="links-social-icons-article">
    <a href="https://www.linkedin.com/in/izabellealvess/" target="_blank" data-name="link linkedin">
      <i class="fa-brands fa-linkedin"></i>
    </a>
    <a href="https://github.com/IzabelleAlves" target="_blank" data-name="link github">
      <i class="fa-brands fa-square-github"></i>
    </a>
  </div>
`;

  const container1 = document.getElementById("container-article1");
  const container2 = document.getElementById("container-article2");

  // Para o primeiro conjunto de artigos
  articlesData.forEach((item, index) => {
    if (item.topContentLink) {
      const article1 = document.createElement("article");
      article1.classList.add("icons-wrapper");
      article1.innerHTML = item.topContentLink + socialIcons;
      container1.appendChild(article1);
    }

    if (item.topContentText) {
      const article2 = document.createElement("article");
      article2.classList.add("icons-wrapper");
      article2.innerHTML = item.topContentText + socialIcons;
      container2.appendChild(article2);
    }
  });
}
articles();

//

function education() {
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
}
education();

//

function experience() {
  const experience = [
    {
      name: "Residência em Engenharia de Software",
      location: "Sistemas Bem Vivendo Informática",
      description:
        "Participação de projetos reais com foco em metodologias ágeis de desenvolvimento. Atuei na implementação de testes automatizados no front-end com Cypress, assegurando a qualidade das aplicações. Também trabalhei com tecnologias como Next.js, Tailwind CSS e React.",
    },
    {
      name: "Monitoria em Lógica de Programação e Estrutura de Dados",
      location: "IFPE",
      description:
        "Apoio pedagógico de forma voluntária à alunos dos cursos de graduação e curso técnico voltados para a área da tecnologia no IFPE, com foco em Lógica de Programação e Estrutura de Dados. Fui responsável por esclarecer dúvidas, reforçar conteúdos em sala, corrigir atividades e auxiliar na resolução de exercícios. Atuei promovendo o desenvolvimento do raciocínio lógico e incentivando boas práticas de programação, além de colaborar com professores para melhorar a experiência de aprendizagem.",
    },
    {
      name: "PET Conexão Periferia",
      location: "IFPE",
      description:
        "Integrante do Programa de Educação Tutorial (PET) com foco em desenvolvimento de soluções tecnológicas para enfrentamento de problemas sociais. Atuo no desenvolvimento de ferramentas digitais como bots e mapas interativos para o combate à desinformação. Mais informações sobre o programa <a href='https://portal.ifpe.edu.br/igarassu/ensino/pet/' target='_blank'>aqui</a>.",
    },
    {
      name: "CS_Women: promovendo a equidade de gênero em Computação",
      location: "Centro de Informática UFPE",
      description:
        "O Cintia é o grupo de mulheres do Centro de Informática da UFPE, criado com o objetivo de ser uma rede de apoio entre todas as mulheres que fazem parte do Centro de Informática e também da área de TI. O Cintia também tem o objetivo de incentivar a participação feminina nas áreas da ciência, tecnologia e computação, promovendo ações para conquistar mais mulheres a ingressarem nestas áreas e disponibilizando o acompanhamento e amadrinhamento para incentivar as mulheres que já estão inseridas nesse universo. A grande meta é promover a igualdade de gênero na área de atuação do grupo.",
    },
    {
      name: "Recife Cidade Parque",
      location: "Prefeitura da Cidade do Recife",
      description:
        "Parceria entre a Prefeitura do Recife e a Universidade Federal de Pernambuco - UFPE, na busca de soluções para os desafios do Recife diante das mudanças climáticas.",
    },
    {
      name: "Serviço Social",
      location: "UFPE",
      description:
        "Formação complementar com perspectiva crítica e foco em impacto social.",
    },
  ];

  const experienceContainer = document.getElementById("experience");

  experience.forEach((experience) => {
    const cardExperience = document.createElement("div");
    cardExperience.classList.add("card-experience");

    const title = document.createElement("h2");
    title.className = "sub-title title-experience";
    title.textContent = experience.name;

    const iconSee = document.createElement("span");
    iconSee.classList.add("icon-see");
    iconSee.innerHTML = `<i class="fa-solid fa-eye"></i>`;

    const header = document.createElement("div");
    header.classList.add("experience-header");
    header.appendChild(title);
    header.appendChild(iconSee);

    const location = document.createElement("span");
    location.className = "span-date";
    location.textContent = experience.location;

    const description = document.createElement("div");
    description.className = "description-experience hidden text";
    description.innerHTML = experience.description;

    const contentDiv = document.createElement("div");
    contentDiv.appendChild(header);
    contentDiv.appendChild(location);
    contentDiv.appendChild(description);

    cardExperience.appendChild(contentDiv);

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
}
experience();

//

function skills() {
  const skills = [
    { src: "/assets/image/skills/ts.png", alt: "TypeScript" },
    { src: "/assets/image/skills/js.png", alt: "JavaScript" },
    { src: "/assets/image/skills/github.png", alt: "GitHub" },
    { src: "/assets/image/skills/git.png", alt: "Git" },
    { src: "/assets/image/skills/vsCode.png", alt: "VSCode" },
    { src: "/assets/image/skills/react.png", alt: "React" },
    { src: "/assets/image/skills/svelte.png", alt: "Svelte" },
    { src: "/assets/image/skills/vue.png", alt: "Vue.js" },
    { src: "/assets/image/skills/html.png", alt: "HTML5" },
    { src: "/assets/image/skills/css.png", alt: "CSS3" },
    { src: "/assets/image/skills/tailwind.png", alt: "TailwindCSS" },
    { src: "/assets/image/skills/sass.png", alt: "Sass" },
  ];

  const links = [
    { href: "https://github.com/IzabelleAlves", text: "GitHub" },
    { href: "https://www.linkedin.com/in/izabellealvess/", text: "Linkedin" },
    { href: "http://lattes.cnpq.br/8653263824970405", text: "Lattes" },
  ];

  const iconsContainer = document.getElementById("skills-icons");
  const linksContainer = document.getElementById("skills-links");

  skills.forEach((skill, index) => {
    const img = document.createElement("img");
    img.src = skill.src;
    img.alt = skill.alt;
    iconsContainer.appendChild(img);
  });

  links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.textContent = link.text;
    linksContainer.appendChild(a);
  });
}
skills();
