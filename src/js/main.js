jQuery(function () {
  "use strict";
  // open mobile menu and hamburger btn
  $(".nav-toggle-btn").on("click", function (e) {
    $(".nav-toggle-btn, .nav-backdrop-container").toggleClass("active");
  });

  $(".nav-backdrop-container").on("click", function (e) {
    $(".nav-toggle-btn, .nav-backdrop-container").removeClass("active");
  });

  // Magnific popup
  $(".magnific-popup-link").magnificPopup({
    type: "image",
    // other options
    gallery: {
      // options for gallery
      enabled: true,
    },
    image: {
      // options for image content type
      titleSrc: "title",
    },
  });

  // parallax
  // not in use for now
  // let image = document.getElementsByClassName('about-container__box--parallax');
  // new simpleParallax(image, {});

  // btt
  if ($(".back-to-top").length) {
    const scrollTrigger = 100, // px
      backToTop = function () {
        const scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $(".back-to-top").addClass("show");
        } else {
          $(".back-to-top").removeClass("show");
          $(".show-fire").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $(".back-to-top").on("click", function (e) {
      e.preventDefault();

      $(".show-fire").addClass("show");

      $("html,body").animate(
        {
          scrollTop: 0,
        },
        50
      );
    });
  }
});

// Scroll to section with event delagation better approach
document
  .querySelector(".nav-desktop__list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("nav-desktop__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// Slick
$(".slick-slider").slick({
  slidesToShow: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "ease-out",
  asNavFor: ".slider-nav",
  prevArrow: $(".left-nav-custom"),
  nextArrow: $(".right-nav-custom"),
});

$(".slider-nav").slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slick-slider",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});

// particlesjs
particlesJS("particles-js", {
  particles: {
    number: {
      value: 65,
    },
    color: {
      value: "#ddd",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#ddd",
      },
    },
    image: {
      src: "some link",
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 100,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ddd",
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 50,
        duration: 0.4,
      },
    },
  },
});

// AOS
// animation
AOS.init({});

// json file with my fe works
async function populate() {
  const requestURL = "https://milanzivanov.github.io/Data/works.json";
  const request = new Request(requestURL);

  const res = await fetch(request);
  const data = await res.json();

  populateSkills(data);
  populateWorks(data);
}

// skills data
function populateSkills(data) {
  const containerSkills = document.querySelector(".skills-container-icons");
  const skills = data.skills;

  let output = "";

  for (const skill of skills) {
    output += `
      <div class="skill-icon">
        <i 
          class="${skill.iconClass}"
          data-aos="fade-up">
        </i>
        <p>${skill.iconTitle}</p>
      </div>
    `;
  }

  containerSkills.innerHTML = output;
}

// works data
function populateWorks(data) {
  const section = document.querySelector(".projects__content");
  const works = data.works;

  for (const work of works) {
    const containerProjects = document.createElement("div");
    containerProjects.className = "projects__row projects__row--reverse";
    containerProjects.setAttribute("data-aos", "flip-left");

    //
    const projectRowImg = document.createElement("div");
    projectRowImg.classList.add("projects__row--img");
    containerProjects.appendChild(projectRowImg);

    const projectAnchorLink = document.createElement("a");
    projectAnchorLink.className = "magnific-popup-link";
    projectAnchorLink.href = work.linkSrc;
    projectAnchorLink.rel = "dns-prefetch";
    projectAnchorLink.target = "_blank";

    const imgProject = document.createElement("img");
    imgProject.src = work.src;
    imgProject.setAttribute("loading", "lazy");

    //
    const projectRowText = document.createElement("div");
    projectRowText.className = "projects__row--text";
    containerProjects.appendChild(projectRowText);

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    projectRowText.appendChild(textContainer);

    const h3TitleRowText = document.createElement("h3");
    h3TitleRowText.className = "section-h3-title project-container--title";
    h3TitleRowText.textContent = work.title;
    textContainer.appendChild(h3TitleRowText);

    const rowTextDiv = document.createElement("div");
    rowTextDiv.classList.add("text-container--description");
    textContainer.appendChild(rowTextDiv);

    const rowTextParagraph = document.createElement("p");
    rowTextParagraph.className = "paragraph-primary-16 paragraph-text";
    rowTextParagraph.textContent = work.body;
    rowTextDiv.appendChild(rowTextParagraph);

    const rowTextTime = document.createElement("p");
    rowTextTime.classList.add("paragraph-time");
    rowTextTime.textContent = work.projectTime;
    rowTextDiv.appendChild(rowTextTime);

    const skillContainer = document.createElement("div");
    skillContainer.classList.add("skill-container");
    rowTextDiv.appendChild(skillContainer);

    const rowTextStrong = document.createElement("p");
    rowTextStrong.classList.add("paragraph-strong");
    rowTextStrong.textContent = "Skill used:";
    skillContainer.appendChild(rowTextStrong);

    const skillList = document.createElement("ul");
    skillList.classList.add("list-icon-container");
    skillContainer.appendChild(skillList);

    projectRowImg.appendChild(projectAnchorLink);
    projectAnchorLink.appendChild(imgProject);

    const btnTextRow = document.createElement("a");
    btnTextRow.className = "popup-link btn btn--size btn--theme";
    btnTextRow.href = work.linkSrc;
    btnTextRow.target = "_blank";
    btnTextRow.rel = "dns-prefetch";
    btnTextRow.textContent = "View It Here";
    textContainer.appendChild(btnTextRow);

    section.appendChild(containerProjects);

    // work skill
    const skillsUsed = work.technologiesUsed;
    for (const skill of skillsUsed) {
      const listItem = document.createElement("li");
      const listIcon = document.createElement("i");
      listIcon.className = skill.svgIcon + " devicon";
      skillList.appendChild(listItem);
      listItem.appendChild(listIcon);
    }
  }
}

populate();

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
