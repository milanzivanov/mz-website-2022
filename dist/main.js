jQuery((function(){"use strict";if($(".nav-toggle-btn").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").toggleClass("active")})),$(".nav-backdrop-container").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").removeClass("active")})),$(".magnific-popup-link").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}}),$(".back-to-top").length){const e=100,n=function(){$(window).scrollTop()>e?$(".back-to-top").addClass("show"):($(".back-to-top").removeClass("show"),$(".show-fire").removeClass("show"))};n(),$(window).on("scroll",(function(){n()})),$(".back-to-top").on("click",(function(e){e.preventDefault(),$(".show-fire").addClass("show"),$("html,body").animate({scrollTop:0},50)}))}$(".scrollTo").on("click",(function(){const e=$(this).attr("href");if($(e).length){const n=$(e).offset().top;$("html,body").animate({scrollTop:n-20},100,"linear")}return $(".nav-toggle-btn, .nav-backdrop-container").removeClass("active"),!1}))})),$(".slick-slider").slick({slidesToShow:1,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:1e4,cssEase:"ease-out",asNavFor:".slider-nav",prevArrow:$(".left-nav-custom"),nextArrow:$(".right-nav-custom")}),$(".slider-nav").slick({arrows:!1,slidesToShow:3,slidesToScroll:1,asNavFor:".slick-slider",dots:!1,centerMode:!0,focusOnSelect:!0}),particlesJS("particles-js",{particles:{number:{value:65},color:{value:"#ddd"},shape:{type:"circle",stroke:{width:1,color:"#ddd"}},image:{src:"some link"},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1}},size:{value:3,random:!0,anim:{enable:!1,speed:100,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ddd",width:1},move:{enable:!0,speed:3,direction:"none"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:50,duration:.4}}}});let e="https://milanzivanov.github.io/Data/works.json",n=document.querySelector(".projects__content");async function t(){const t=await fetch(e);let o=(await t.json()).works;output="";for(let e of o)output+=`\n    \n\n      <div class="projects__row projects__row--reverse">\n          <div class="projects__row--img">\n              <a \n                  href="${e.linkSrc}"\n                  class="magnific-popup-link" \n                  target="_blank">\n\n                <picture loading="lazy">\n                  <source media="(min-width: 1366px)" srcset="${e.srcLargeDesktop}">\n                  <source media="(min-width: 1024px)" srcset="${e.srcDesktop}">\n                  <source media="(min-width: 360px)" srcset="${e.srcMobile}">\n                  <img \n                    loading="lazy"\n                    src="${e.src}" \n                    alt="${e.title}" />\n                </picture>\n\n              </a>\n          </div>\n          <div class="projects__row--text">\n              <div class="text-container">\n                  <h3 class="section-h3-title project-container--title">${e.title}</h3>\n                  <p class="paragraph-primary-16 text-container--description">${e.body}</p>\n\n                  <a \n                      class="popup-link btn btn--size btn--theme" \n                      href="${e.linkSrc}"\n                      target="_blank">\n                      Case Study\n                  </a>\n              </div>\n          </div>\n          \n      </div>\n      `;n.innerHTML=output}t();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiJCIsIm9uIiwiZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImdhbGxlcnkiLCJlbmFibGVkIiwiaW1hZ2UiLCJ0aXRsZVNyYyIsImxlbmd0aCIsInNjcm9sbFRyaWdnZXIiLCJiYWNrVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsImdldEVsZW0iLCJ0aGlzIiwiYXR0ciIsImdldE9mZnNldCIsIm9mZnNldCIsInRvcCIsInNsaWNrIiwic2xpZGVzVG9TaG93IiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNzc0Vhc2UiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInNsaWRlc1RvU2Nyb2xsIiwiY2VudGVyTW9kZSIsImZvY3VzT25TZWxlY3QiLCJwYXJ0aWNsZXNKUyIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiY29sb3IiLCJzaGFwZSIsInN0cm9rZSIsIndpZHRoIiwic3JjIiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJlbmFibGUiLCJzcGVlZCIsInNpemUiLCJzaXplX21pbiIsInN5bmMiLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJtb2RlcyIsInJlcHVsc2UiLCJkdXJhdGlvbiIsInJlcXVlc3RVUkwiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXN5bmMiLCJmZXRjaFVzZXJzIiwicmVzIiwiZmV0Y2giLCJ3b3JrcyIsImpzb24iLCJvdXRwdXQiLCJ3b3JrIiwibGlua1NyYyIsInNyY0xhcmdlRGVza3RvcCIsInNyY0Rlc2t0b3AiLCJzcmNNb2Jp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SixFQUFLaEMsbUNBQ0xnQyxFQUFLSyxtUEFPMENMLEVBQUtLLDZGQUNDTCxFQUFLTSxzSUFJdkROLEVBQUtDLHVMQVdqQ1gsRUFBUWlCLFVBQVlSLE9BR3RCTCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuICAvLyBvcGVuIG1vYmlsZSBtZW51IGFuZCBoYW1idXJnZXIgYnRuXHJcbiAgJChcIi5uYXYtdG9nZ2xlLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLm5hdi10b2dnbGUtYnRuLCAubmF2LWJhY2tkcm9wLWNvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBcclxuICAkKFwiLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5uYXYtdG9nZ2xlLWJ0biwgLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE1hZ25pZmljIHBvcHVwXHJcbiAgJChcIi5tYWduaWZpYy1wb3B1cC1saW5rXCIpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgLy8gb3RoZXIgb3B0aW9uc1xyXG4gICAgZ2FsbGVyeToge1xyXG4gICAgICAvLyBvcHRpb25zIGZvciBnYWxsZXJ5XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgLy8gb3B0aW9ucyBmb3IgaW1hZ2UgY29udGVudCB0eXBlXHJcbiAgICAgIHRpdGxlU3JjOiBcInRpdGxlXCIsXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLyByZXNldCBpbnB1dCBcclxuICAvLyAkKFwiLmJ0bi10cmlnZ2VyLXJlc2V0XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAvLyAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdEZvcm1cIikucmVzZXQoKTtcclxuICAvLyAgICQoJyNlbWFpbC1mb3JtJykudmFsKFwiXCIpO1xyXG4gIC8vICAgJCgnI21lc3NhZ2UtZm9ybScpLnZhbChcIlwiKTtcclxuXHJcbiAgLy8gICBjb25zb2xlLmxvZygxMjMpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBwYXJhbGxheFxyXG4gIC8vIG5vdCBpbiB1c2UgZm9yIG5vd1xyXG4gIC8vIGxldCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Fib3V0LWNvbnRhaW5lcl9fYm94LS1wYXJhbGxheCcpO1xyXG4gIC8vIG5ldyBzaW1wbGVQYXJhbGxheChpbWFnZSwge30pO1xyXG5cclxuICAvLyBidHRcclxuICBpZiAoJChcIi5iYWNrLXRvLXRvcFwiKS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRyaWdnZXIgPSAxMDAsIC8vIHB4XHJcbiAgICAgIGJhY2tUb1RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IHNjcm9sbFRyaWdnZXIpIHtcclxuICAgICAgICAgICQoXCIuYmFjay10by10b3BcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmJhY2stdG8tdG9wXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICAgICQoXCIuc2hvdy1maXJlXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICBiYWNrVG9Ub3AoKTtcclxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJhY2tUb1RvcCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmJhY2stdG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICQoXCIuc2hvdy1maXJlXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1MFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBzY3JvbGwgdG8gc2VjdGlvblxyXG4gICQoJy5zY3JvbGxUbycpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBnZXRFbGVtID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICBjb25zdCB0YXJnZXREaXN0YW5jZSA9IDIwO1xyXG4gICAgaWYgKCQoZ2V0RWxlbSkubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGdldE9mZnNldCA9ICQoZ2V0RWxlbSkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6IGdldE9mZnNldCAtIHRhcmdldERpc3RhbmNlXHJcbiAgICAgIH0sIDEwMCwgJ2xpbmVhcicpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIubmF2LXRvZ2dsZS1idG4sIC5uYXYtYmFja2Ryb3AtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vIFNsaWNrXHJcbiQoXCIuc2xpY2stc2xpZGVyXCIpLnNsaWNrKHtcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgYXJyb3dzOiB0cnVlLFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDEwMDAwLFxyXG4gIGNzc0Vhc2U6IFwiZWFzZS1vdXRcIixcclxuICBhc05hdkZvcjogJy5zbGlkZXItbmF2JyxcclxuICBwcmV2QXJyb3c6ICQoXCIubGVmdC1uYXYtY3VzdG9tXCIpLFxyXG4gIG5leHRBcnJvdzogJChcIi5yaWdodC1uYXYtY3VzdG9tXCIpXHJcbn0pO1xyXG5cclxuJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcbiAgYXJyb3dzOiBmYWxzZSxcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgYXNOYXZGb3I6ICcuc2xpY2stc2xpZGVyJyxcclxuICBkb3RzOiBmYWxzZSxcclxuICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gIGZvY3VzT25TZWxlY3Q6IHRydWVcclxufSk7XHJcblxyXG4vLyBwYXJ0aWNsZXNqc1xyXG5wYXJ0aWNsZXNKUyhcInBhcnRpY2xlcy1qc1wiLCB7XHJcbiAgcGFydGljbGVzOiB7XHJcbiAgICBudW1iZXI6IHtcclxuICAgICAgdmFsdWU6IDY1LFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHZhbHVlOiBcIiNkZGRcIixcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICB0eXBlOiBcImNpcmNsZVwiLFxyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBjb2xvcjogXCIjZGRkXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgc3JjOiBcInNvbWUgbGlua1wiLFxyXG4gICAgfSxcclxuICAgIG9wYWNpdHk6IHtcclxuICAgICAgdmFsdWU6IDAuNSxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHZhbHVlOiAzLFxyXG4gICAgICByYW5kb206IHRydWUsXHJcbiAgICAgIGFuaW06IHtcclxuICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiAxMDAsXHJcbiAgICAgICAgc2l6ZV9taW46IDAuMSxcclxuICAgICAgICBzeW5jOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgIGNvbG9yOiBcIiNkZGRcIixcclxuICAgICAgd2lkdGg6IDEsXHJcbiAgICB9LFxyXG4gICAgbW92ZToge1xyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAzLFxyXG4gICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGludGVyYWN0aXZpdHk6IHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6IFwicmVwdWxzZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6IFwicHVzaFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICBkaXN0YW5jZTogNTAsXHJcbiAgICAgICAgZHVyYXRpb246IDAuNCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyBqc29uIGZpbGUgd2l0aCBteSBmZSB3b3Jrc1xyXG5sZXQgcmVxdWVzdFVSTCA9IFwiaHR0cHM6Ly9taWxhbnppdmFub3YuZ2l0aHViLmlvL0RhdGEvd29ya3MuanNvblwiO1xyXG5sZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNfX2NvbnRlbnRcIik7XHJcbi8vIGxldCB0aXRsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzIC53cmFwcGVyLWlubmVyXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VycygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VVJMKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBsZXQgd29ya3MgPSBkYXRhLndvcmtzO1xyXG5cclxuICAvLyBsZXQgbXlIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAvLyBteUgyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy10aXRsZVwiKTtcclxuICAvLyBteUgyLnRleHRDb250ZW50ID0gZGF0YS50aXRsZU5hbWU7XHJcbiAgLy8gdGl0bGVOYW1lLmFwcGVuZENoaWxkKG15SDIpO1xyXG5cclxuICBvdXRwdXQgPSBcIlwiO1xyXG5cclxuICBmb3IgKGxldCB3b3JrIG9mIHdvcmtzKSB7XHJcblxyXG4gICAgb3V0cHV0ICs9IGBcclxuICAgIFxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19yb3cgcHJvamVjdHNfX3Jvdy0tcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19yb3ctLWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiJHt3b3JrLmxpbmtTcmN9XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYWduaWZpYy1wb3B1cC1saW5rXCIgXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwaWN0dXJlIGxvYWRpbmc9XCJsYXp5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMzY2cHgpXCIgc3Jjc2V0PVwiJHt3b3JrLnNyY0xhcmdlRGVza3RvcH1cIj5cclxuICAgICAgICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIiBzcmNzZXQ9XCIke3dvcmsuc3JjRGVza3RvcH1cIj5cclxuICAgICAgICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDM2MHB4KVwiIHNyY3NldD1cIiR7d29yay5zcmNNb2JpbGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7d29yay5zcmN9XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiJHt3b3JrLnRpdGxlfVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XHJcblxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19yb3ctLXRleHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1oMy10aXRsZSBwcm9qZWN0LWNvbnRhaW5lci0tdGl0bGVcIj4ke3dvcmsudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYXJhZ3JhcGgtcHJpbWFyeS0xNiB0ZXh0LWNvbnRhaW5lci0tZGVzY3JpcHRpb25cIj4ke3dvcmsuYm9keX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG9wdXAtbGluayBidG4gYnRuLS1zaXplIGJ0bi0tdGhlbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3dvcmsubGlua1NyY31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXNlIFN0dWR5XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBvdXRwdXQ7XHJcbn1cclxuXHJcbmZldGNoVXNlcnMoKTtcclxuIl19
