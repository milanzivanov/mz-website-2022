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
    }

  });

  // reset input 
  // $(".btn-trigger-reset").on('click', function(e) {
  //   // document.getElementById("contactForm").reset();
  //   $('#email-form').val("");
  //   $('#message-form').val("");

  //   console.log(123);
  // });

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

  // scroll to section
  $('.scrollTo').on("click", function() {
    const getElem = $(this).attr('href');
    const targetDistance = 20;
    if ($(getElem).length) {
      const getOffset = $(getElem).offset().top;
      $('html,body').animate({
        scrollTop: getOffset - targetDistance
      }, 100, 'linear');
    }

    $(".nav-toggle-btn, .nav-backdrop-container").removeClass("active");

    return false;
  });

});


// Slick
$(".slick-slider").slick({
  slidesToShow: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "ease-out",
  asNavFor: '.slider-nav',
  prevArrow: $(".left-nav-custom"),
  nextArrow: $(".right-nav-custom")
});

$('.slider-nav').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true
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
  // console.log(skills);

  for (const skill of skills) {
    const skillIconBox = document.createElement('div');
    skillIconBox.classList.add("skill-icon");
    const skillImg = document.createElement('img');
    const skillTitle = document.createElement('p');
    
    skillImg.alt = skill.iconTitle;
    skillImg.src = skill.iconSrc;
    skillTitle.textContent = skill.iconTitle;

    skillIconBox.appendChild(skillImg);
    skillIconBox.appendChild(skillTitle);

    containerSkills.appendChild(skillIconBox);

  }
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
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    projectRowText.appendChild(textContainer);
    const h3TitleRowText = document.createElement("h3");
    textContainer.appendChild(h3TitleRowText);
    h3TitleRowText.className = "section-h3-title project-container--title";
    h3TitleRowText.textContent = work.title;
    const rowTextParagraph = document.createElement("p");
    rowTextParagraph.className = "paragraph-primary-16 text-container--description";
    rowTextParagraph.textContent = work.body;
    textContainer.appendChild(rowTextParagraph);
    const btnTextRow = document.createElement("a");
    btnTextRow.className = "popup-link btn btn--size btn--theme";
    btnTextRow.href= work.linkSrc;
    btnTextRow.target = "_blank";
    btnTextRow.rel = "dns-prefetch";
    btnTextRow.textContent = "View It Here";
    textContainer.appendChild(btnTextRow);
    const myList = document.createElement('ul');
    myList.classList.add("list-icon-container");

    containerProjects.appendChild(projectRowImg);
    containerProjects.appendChild(projectRowText);

    projectRowImg.appendChild(projectAnchorLink);
    projectAnchorLink.appendChild(imgProject);
    
    rowTextParagraph.appendChild(myList);

    section.appendChild(containerProjects);


    const skillsUsed = work.technologiesUsed;
    for (const skill of skillsUsed) {
      const listItem = document.createElement('li');
      const listIcon = document.createElement('img');
      listIcon.src = skill.svgIcon;
      myList.appendChild(listItem);
      listItem.appendChild(listIcon);
    }

  }

}




populate();

// const section = document.querySelector(".projects__content");
// // let titleName = document.querySelector(".projects .wrapper-inner");

// async function fetchUsers() {
//   const res = await fetch(requestURL);
//   const data = await res.json();
//   let works = data.works;

//   output = "";

//   for (let work of works) {

//     output += `
    

//       <div 
//         class="projects__row projects__row--reverse"
//         data-aos="flip-left">
//           <div class="projects__row--img">
//               <a 
//                   href="${work.linkSrc}"
//                   rel="dns-prefetch"
//                   class="magnific-popup-link" 
//                   target="_blank">

//                 <picture loading="lazy">
//                   <source media="(min-width: 1366px)" srcset="${work.srcLargeDesktop}">
//                   <source media="(min-width: 1024px)" srcset="${work.srcDesktop}">
//                   <source media="(min-width: 360px)" srcset="${work.srcMobile}">
//                   <img 
//                     loading="lazy"
//                     src="${work.src}" 
//                     alt="${work.title}" />
//                 </picture>

//               </a>
//           </div>

//           <div class="projects__row--text">
//               <div class="text-container">
//                   <h3 class="section-h3-title project-container--title">
//                     ${work.title}
//                   </h3>
//                   <p class="paragraph-primary-16 text-container--description">${work.body}</p>

//                   <a 
//                       class="popup-link btn btn--size btn--theme"
//                       rel="dns-prefetch" 
//                       href="${work.linkSrc}"
//                       target="_blank">
//                       Case Study
//                   </a>
//               </div>
//           </div>
          
//       </div>
//       `;
//   }

//   section.innerHTML = output;
// }

// fetchUsers();
