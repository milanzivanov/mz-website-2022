jQuery((function(){"use strict";if($(".nav-toggle-btn").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").toggleClass("active")})),$(".nav-backdrop-container").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").removeClass("active")})),$(".magnific-popup-link").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}}),$(".back-to-top").length){const e=100,n=function(){$(window).scrollTop()>e?$(".back-to-top").addClass("show"):($(".back-to-top").removeClass("show"),$(".show-fire").removeClass("show"))};n(),$(window).on("scroll",(function(){n()})),$(".back-to-top").on("click",(function(e){e.preventDefault(),$(".show-fire").addClass("show"),$("html,body").animate({scrollTop:0},50)}))}$(".scrollTo").on("click",(function(){const e=$(this).attr("href");if($(e).length){const n=$(e).offset().top;$("html,body").animate({scrollTop:n-20},100,"linear")}return $(".nav-toggle-btn, .nav-backdrop-container").removeClass("active"),!1}))})),$(".slick-slider").slick({slidesToShow:1,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:1e4,cssEase:"ease-out",asNavFor:".slider-nav",prevArrow:$(".left-nav-custom"),nextArrow:$(".right-nav-custom")}),$(".slider-nav").slick({arrows:!1,slidesToShow:3,slidesToScroll:1,asNavFor:".slick-slider",dots:!1,centerMode:!0,focusOnSelect:!0}),particlesJS("particles-js",{particles:{number:{value:65},color:{value:"#ddd"},shape:{type:"circle",stroke:{width:1,color:"#ddd"}},image:{src:"some link"},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1}},size:{value:3,random:!0,anim:{enable:!1,speed:100,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ddd",width:1},move:{enable:!0,speed:3,direction:"none"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:50,duration:.4}}}});let e="https://milanzivanov.github.io/Data/works.json",n=document.querySelector(".projects__content");async function o(){const o=await fetch(e);let t=(await o.json()).works;output="";for(let e of t)output+=`\n    \n\n      <div class="projects__row projects__row--reverse">\n          <div class="projects__row--img">\n              <a \n                  href="${e.linkSrc}"\n                  class="magnific-popup-link" \n                  target="_blank">\n                      <img loading="lazy" src="${e.src}" alt="${e.author}" />\n              </a>\n          </div>\n          <div class="projects__row--text">\n              <div class="text-container">\n                  <h3 class="section-h3-title project-container--title">${e.title}</h3>\n                  <p class="paragraph-primary-16 text-container--description">${e.body}</p>\n\n                  <a \n                      class="popup-link btn btn--size btn--theme" \n                      href="${e.linkSrc}"\n                      target="_blank">\n                      Case Study\n                  </a>\n              </div>\n          </div>\n          \n      </div>\n      `;n.innerHTML=output}o();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiJCIsIm9uIiwiZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImdhbGxlcnkiLCJlbmFibGVkIiwiaW1hZ2UiLCJ0aXRsZVNyYyIsImxlbmd0aCIsInNjcm9sbFRyaWdnZXIiLCJiYWNrVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsImdldEVsZW0iLCJ0aGlzIiwiYXR0ciIsImdldE9mZnNldCIsIm9mZnNldCIsInRvcCIsInNsaWNrIiwic2xpZGVzVG9TaG93IiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNzc0Vhc2UiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInNsaWRlc1RvU2Nyb2xsIiwiY2VudGVyTW9kZSIsImZvY3VzT25TZWxlY3QiLCJwYXJ0aWNsZXNKUyIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiY29sb3IiLCJzaGFwZSIsInN0cm9rZSIsIndpZHRoIiwic3JjIiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJlbmFibGUiLCJzcGVlZCIsInNpemUiLCJzaXplX21pbiIsInN5bmMiLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJtb2RlcyIsInJlcHVsc2UiLCJkdXJhdGlvbiIsInJlcXVlc3RVUkwiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXN5bmMiLCJmZXRjaFVzZXJzIiwicmVzIiwiZmV0Y2giLCJ3b3JrcyIsImpzb24iLCJvdXRwdXQiLCJ3b3JrIiwibGlua1NyYyIsImF1dGhvciIsInRpdGxlIiwiYm9keSIsImlubmVySFRNTCJdLCJt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ZSxVQUFZTixPQUd0QkwiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShmdW5jdGlvbiAoKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgLy8gb3BlbiBtb2JpbGUgbWVudSBhbmQgaGFtYnVyZ2VyIGJ0blxyXG4gICQoXCIubmF2LXRvZ2dsZS1idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5uYXYtdG9nZ2xlLWJ0biwgLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgXHJcbiAgJChcIi5uYXYtYmFja2Ryb3AtY29udGFpbmVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoXCIubmF2LXRvZ2dsZS1idG4sIC5uYXYtYmFja2Ryb3AtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBNYWduaWZpYyBwb3B1cFxyXG4gICQoXCIubWFnbmlmaWMtcG9wdXAtbGlua1wiKS5tYWduaWZpY1BvcHVwKHtcclxuICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgIC8vIG90aGVyIG9wdGlvbnNcclxuICAgIGdhbGxlcnk6IHtcclxuICAgICAgLy8gb3B0aW9ucyBmb3IgZ2FsbGVyeVxyXG4gICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIC8vIG9wdGlvbnMgZm9yIGltYWdlIGNvbnRlbnQgdHlwZVxyXG4gICAgICB0aXRsZVNyYzogXCJ0aXRsZVwiLFxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgLy8gcmVzZXQgaW5wdXQgXHJcbiAgLy8gJChcIi5idG4tdHJpZ2dlci1yZXNldFwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgLy8gICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RGb3JtXCIpLnJlc2V0KCk7XHJcbiAgLy8gICAkKCcjZW1haWwtZm9ybScpLnZhbChcIlwiKTtcclxuICAvLyAgICQoJyNtZXNzYWdlLWZvcm0nKS52YWwoXCJcIik7XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2coMTIzKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gcGFyYWxsYXhcclxuICAvLyBub3QgaW4gdXNlIGZvciBub3dcclxuICAvLyBsZXQgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhYm91dC1jb250YWluZXJfX2JveC0tcGFyYWxsYXgnKTtcclxuICAvLyBuZXcgc2ltcGxlUGFyYWxsYXgoaW1hZ2UsIHt9KTtcclxuXHJcbiAgLy8gYnR0XHJcbiAgaWYgKCQoXCIuYmFjay10by10b3BcIikubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxUcmlnZ2VyID0gMTAwLCAvLyBweFxyXG4gICAgICBiYWNrVG9Ub3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPiBzY3JvbGxUcmlnZ2VyKSB7XHJcbiAgICAgICAgICAkKFwiLmJhY2stdG8tdG9wXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChcIi5iYWNrLXRvLXRvcFwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgICAkKFwiLnNob3ctZmlyZVwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgYmFja1RvVG9wKCk7XHJcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBiYWNrVG9Ub3AoKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5iYWNrLXRvLXRvcFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAkKFwiLnNob3ctZmlyZVwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcblxyXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTBcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gc2Nyb2xsIHRvIHNlY3Rpb25cclxuICAkKCcuc2Nyb2xsVG8nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZ2V0RWxlbSA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgY29uc3QgdGFyZ2V0RGlzdGFuY2UgPSAyMDtcclxuICAgIGlmICgkKGdldEVsZW0pLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBnZXRPZmZzZXQgPSAkKGdldEVsZW0pLm9mZnNldCgpLnRvcDtcclxuICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiBnZXRPZmZzZXQgLSB0YXJnZXREaXN0YW5jZVxyXG4gICAgICB9LCAxMDAsICdsaW5lYXInKTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiLm5hdi10b2dnbGUtYnRuLCAubmF2LWJhY2tkcm9wLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4vLyBTbGlja1xyXG4kKFwiLnNsaWNrLXNsaWRlclwiKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIGFycm93czogdHJ1ZSxcclxuICBkb3RzOiBmYWxzZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVNwZWVkOiAxMDAwMCxcclxuICBjc3NFYXNlOiBcImVhc2Utb3V0XCIsXHJcbiAgYXNOYXZGb3I6ICcuc2xpZGVyLW5hdicsXHJcbiAgcHJldkFycm93OiAkKFwiLmxlZnQtbmF2LWN1c3RvbVwiKSxcclxuICBuZXh0QXJyb3c6ICQoXCIucmlnaHQtbmF2LWN1c3RvbVwiKVxyXG59KTtcclxuXHJcbiQoJy5zbGlkZXItbmF2Jykuc2xpY2soe1xyXG4gIGFycm93czogZmFsc2UsXHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFzTmF2Rm9yOiAnLnNsaWNrLXNsaWRlcicsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICBmb2N1c09uU2VsZWN0OiB0cnVlXHJcbn0pO1xyXG5cclxuLy8gcGFydGljbGVzanNcclxucGFydGljbGVzSlMoXCJwYXJ0aWNsZXMtanNcIiwge1xyXG4gIHBhcnRpY2xlczoge1xyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIHZhbHVlOiA2NSxcclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB2YWx1ZTogXCIjZGRkXCIsXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgdHlwZTogXCJjaXJjbGVcIixcclxuICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgY29sb3I6IFwiI2RkZFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHNyYzogXCJzb21lIGxpbmtcIixcclxuICAgIH0sXHJcbiAgICBvcGFjaXR5OiB7XHJcbiAgICAgIHZhbHVlOiAwLjUsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgYW5pbToge1xyXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB2YWx1ZTogMyxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMTAwLFxyXG4gICAgICAgIHNpemVfbWluOiAwLjEsXHJcbiAgICAgICAgc3luYzogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICBjb2xvcjogXCIjZGRkXCIsXHJcbiAgICAgIHdpZHRoOiAxLFxyXG4gICAgfSxcclxuICAgIG1vdmU6IHtcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMyxcclxuICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgb25ob3Zlcjoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiBcInJlcHVsc2VcIixcclxuICAgICAgfSxcclxuICAgICAgb25jbGljazoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiBcInB1c2hcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2Rlczoge1xyXG4gICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgZGlzdGFuY2U6IDUwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8ganNvbiBmaWxlIHdpdGggbXkgZmUgd29ya3NcclxubGV0IHJlcXVlc3RVUkwgPSBcImh0dHBzOi8vbWlsYW56aXZhbm92LmdpdGh1Yi5pby9EYXRhL3dvcmtzLmpzb25cIjtcclxubGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX19jb250ZW50XCIpO1xyXG4vLyBsZXQgdGl0bGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cyAud3JhcHBlci1pbm5lclwiKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcnMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVSTCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgbGV0IHdvcmtzID0gZGF0YS53b3JrcztcclxuXHJcbiAgLy8gbGV0IG15SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgLy8gbXlIMi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtdGl0bGVcIik7XHJcbiAgLy8gbXlIMi50ZXh0Q29udGVudCA9IGRhdGEudGl0bGVOYW1lO1xyXG4gIC8vIHRpdGxlTmFtZS5hcHBlbmRDaGlsZChteUgyKTtcclxuXHJcbiAgb3V0cHV0ID0gXCJcIjtcclxuXHJcbiAgZm9yIChsZXQgd29yayBvZiB3b3Jrcykge1xyXG5cclxuICAgIG91dHB1dCArPSBgXHJcbiAgICBcclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c19fcm93IHByb2plY3RzX19yb3ctLXJldmVyc2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c19fcm93LS1pbWdcIj5cclxuICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7d29yay5saW5rU3JjfVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWFnbmlmaWMtcG9wdXAtbGlua1wiIFxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBzcmM9XCIke3dvcmsuc3JjfVwiIGFsdD1cIiR7d29yay5hdXRob3J9XCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c19fcm93LS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb24taDMtdGl0bGUgcHJvamVjdC1jb250YWluZXItLXRpdGxlXCI+JHt3b3JrLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFyYWdyYXBoLXByaW1hcnktMTYgdGV4dC1jb250YWluZXItLWRlc2NyaXB0aW9uXCI+JHt3b3JrLmJvZHl9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBvcHVwLWxpbmsgYnRuIGJ0bi0tc2l6ZSBidG4tLXRoZW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHt3b3JrLmxpbmtTcmN9XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2FzZSBTdHVkeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gb3V0cHV0O1xyXG59XHJcblxyXG5mZXRjaFVzZXJzKCk7XHJcbiJdfQ==
