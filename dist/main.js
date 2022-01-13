jQuery((function(){"use strict";if($(".nav-toggle-btn").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").toggleClass("active")})),$(".nav-backdrop-container").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").removeClass("active")})),$(".magnific-popup-link").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}}),$(".back-to-top").length){const e=100,n=function(){$(window).scrollTop()>e?$(".back-to-top").addClass("show"):($(".back-to-top").removeClass("show"),$(".show-fire").removeClass("show"))};n(),$(window).on("scroll",(function(){n()})),$(".back-to-top").on("click",(function(e){e.preventDefault(),$(".show-fire").addClass("show"),$("html,body").animate({scrollTop:0},50)}))}$(".scrollTo").on("click",(function(){const e=$(this).attr("href");if($(e).length){const n=$(e).offset().top;$("html,body").animate({scrollTop:n-20},100,"linear")}return $(".nav-toggle-btn, .nav-backdrop-container").removeClass("active"),!1}))})),$(".slick-slider").slick({slidesToShow:1,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:1e4,cssEase:"ease-out",asNavFor:".slider-nav",prevArrow:$(".left-nav-custom"),nextArrow:$(".right-nav-custom")}),$(".slider-nav").slick({arrows:!1,slidesToShow:3,slidesToScroll:1,asNavFor:".slick-slider",dots:!1,centerMode:!0,focusOnSelect:!0}),particlesJS("particles-js",{particles:{number:{value:65},color:{value:"#ddd"},shape:{type:"circle",stroke:{width:1,color:"#ddd"}},image:{src:"some link"},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1}},size:{value:3,random:!0,anim:{enable:!1,speed:100,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ddd",width:1},move:{enable:!0,speed:3,direction:"none"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:50,duration:.4}}}});let e="https://milanzivanov.github.io/Data/works.json",n=document.querySelector(".projects__content");async function o(){const o=await fetch(e);let t=(await o.json()).works;output="";for(let e of t)output+=`\n    \n\n      <div class="projects__row projects__row--reverse">\n          <div class="projects__row--img">\n              <a \n                  href="${e.linkSrc}"\n                  class="magnific-popup-link" \n                  target="_blank">\n                      <img loading="lazy" src="${e.src}" alt="${e.author}" />\n              </a>\n          </div>\n          <div class="projects__row--text">\n              <div class="text-container">\n                  <h3 class="section-h3-title project-container--title">${e.title}</h3>\n                  <p class="paragraph-primary-16 text-container--description">${e.body}</p>\n\n                  <a \n                      class="popup-link btn btn--size btn--theme" \n                      href="${e.linkSrc}"\n                      target="_blank">\n                      Case Study\n                  </a>\n              </div>\n          </div>\n          \n      </div>\n      `;n.innerHTML=output}o();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiJCIsIm9uIiwiZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImdhbGxlcnkiLCJlbmFibGVkIiwiaW1hZ2UiLCJ0aXRsZVNyYyIsImxlbmd0aCIsInNjcm9sbFRyaWdnZXIiLCJiYWNrVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsImdldEVsZW0iLCJ0aGlzIiwiYXR0ciIsImdldE9mZnNldCIsIm9mZnNldCIsInRvcCIsInNsaWNrIiwic2xpZGVzVG9TaG93IiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNzc0Vhc2UiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInNsaWRlc1RvU2Nyb2xsIiwiY2VudGVyTW9kZSIsImZvY3VzT25TZWxlY3QiLCJwYXJ0aWNsZXNKUyIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiY29sb3IiLCJzaGFwZSIsInN0cm9rZSIsIndpZHRoIiwic3JjIiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJlbmFibGUiLCJzcGVlZCIsInNpemUiLCJzaXplX21pbiIsInN5bmMiLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJtb2RlcyIsInJlcHVsc2UiLCJkdXJhdGlvbiIsInJlcXVlc3RVUkwiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXN5bmMiLCJmZXRjaFVzZXJzIiwicmVzIiwiZmV0Y2giLCJ3b3JrcyIsImpzb24iLCJvdXRwdXQiLCJ3b3JrIiwibGlua1NyYyIsImF1dGhvciIsInRpdGxlIiwiYm9keSIsImlubmVySFRNTCJdLCJt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LFVBQVlOLE9BR3RCTCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuICAvLyBvcGVuIG1vYmlsZSBtZW51IGFuZCBoYW1idXJnZXIgYnRuXHJcbiAgJChcIi5uYXYtdG9nZ2xlLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLm5hdi10b2dnbGUtYnRuLCAubmF2LWJhY2tkcm9wLWNvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBcclxuICAkKFwiLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5uYXYtdG9nZ2xlLWJ0biwgLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE1hZ25pZmljIHBvcHVwXHJcbiAgJChcIi5tYWduaWZpYy1wb3B1cC1saW5rXCIpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgLy8gb3RoZXIgb3B0aW9uc1xyXG4gICAgZ2FsbGVyeToge1xyXG4gICAgICAvLyBvcHRpb25zIGZvciBnYWxsZXJ5XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgLy8gb3B0aW9ucyBmb3IgaW1hZ2UgY29udGVudCB0eXBlXHJcbiAgICAgIHRpdGxlU3JjOiBcInRpdGxlXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBidHRcclxuICBpZiAoJChcIi5iYWNrLXRvLXRvcFwiKS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRyaWdnZXIgPSAxMDAsIC8vIHB4XHJcbiAgICAgIGJhY2tUb1RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IHNjcm9sbFRyaWdnZXIpIHtcclxuICAgICAgICAgICQoXCIuYmFjay10by10b3BcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmJhY2stdG8tdG9wXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICAgICQoXCIuc2hvdy1maXJlXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICBiYWNrVG9Ub3AoKTtcclxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJhY2tUb1RvcCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmJhY2stdG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICQoXCIuc2hvdy1maXJlXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1MFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBzY3JvbGwgdG8gc2VjdGlvblxyXG4gICQoJy5zY3JvbGxUbycpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBnZXRFbGVtID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICBjb25zdCB0YXJnZXREaXN0YW5jZSA9IDIwO1xyXG4gICAgaWYgKCQoZ2V0RWxlbSkubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGdldE9mZnNldCA9ICQoZ2V0RWxlbSkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6IGdldE9mZnNldCAtIHRhcmdldERpc3RhbmNlXHJcbiAgICAgIH0sIDEwMCwgJ2xpbmVhcicpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIubmF2LXRvZ2dsZS1idG4sIC5uYXYtYmFja2Ryb3AtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vIFNsaWNrXHJcbiQoXCIuc2xpY2stc2xpZGVyXCIpLnNsaWNrKHtcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgYXJyb3dzOiB0cnVlLFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDEwMDAwLFxyXG4gIGNzc0Vhc2U6IFwiZWFzZS1vdXRcIixcclxuICBhc05hdkZvcjogJy5zbGlkZXItbmF2JyxcclxuICBwcmV2QXJyb3c6ICQoXCIubGVmdC1uYXYtY3VzdG9tXCIpLFxyXG4gIG5leHRBcnJvdzogJChcIi5yaWdodC1uYXYtY3VzdG9tXCIpXHJcbn0pO1xyXG5cclxuJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcbiAgYXJyb3dzOiBmYWxzZSxcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgYXNOYXZGb3I6ICcuc2xpY2stc2xpZGVyJyxcclxuICBkb3RzOiBmYWxzZSxcclxuICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gIGZvY3VzT25TZWxlY3Q6IHRydWVcclxufSk7XHJcblxyXG4vLyBwYXJ0aWNsZXNqc1xyXG5wYXJ0aWNsZXNKUyhcInBhcnRpY2xlcy1qc1wiLCB7XHJcbiAgcGFydGljbGVzOiB7XHJcbiAgICBudW1iZXI6IHtcclxuICAgICAgdmFsdWU6IDY1LFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHZhbHVlOiBcIiNkZGRcIixcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICB0eXBlOiBcImNpcmNsZVwiLFxyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBjb2xvcjogXCIjZGRkXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgc3JjOiBcInNvbWUgbGlua1wiLFxyXG4gICAgfSxcclxuICAgIG9wYWNpdHk6IHtcclxuICAgICAgdmFsdWU6IDAuNSxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHZhbHVlOiAzLFxyXG4gICAgICByYW5kb206IHRydWUsXHJcbiAgICAgIGFuaW06IHtcclxuICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiAxMDAsXHJcbiAgICAgICAgc2l6ZV9taW46IDAuMSxcclxuICAgICAgICBzeW5jOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgIGNvbG9yOiBcIiNkZGRcIixcclxuICAgICAgd2lkdGg6IDEsXHJcbiAgICB9LFxyXG4gICAgbW92ZToge1xyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAzLFxyXG4gICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGludGVyYWN0aXZpdHk6IHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6IFwicmVwdWxzZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6IFwicHVzaFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICBkaXN0YW5jZTogNTAsXHJcbiAgICAgICAgZHVyYXRpb246IDAuNCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyBqc29uIGZpbGUgd2l0aCBteSBmZSB3b3Jrc1xyXG5sZXQgcmVxdWVzdFVSTCA9IFwiaHR0cHM6Ly9taWxhbnppdmFub3YuZ2l0aHViLmlvL0RhdGEvd29ya3MuanNvblwiO1xyXG5sZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNfX2NvbnRlbnRcIik7XHJcbi8vIGxldCB0aXRsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzIC53cmFwcGVyLWlubmVyXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VycygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VVJMKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBsZXQgd29ya3MgPSBkYXRhLndvcmtzO1xyXG5cclxuICAvLyBsZXQgbXlIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAvLyBteUgyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy10aXRsZVwiKTtcclxuICAvLyBteUgyLnRleHRDb250ZW50ID0gZGF0YS50aXRsZU5hbWU7XHJcbiAgLy8gdGl0bGVOYW1lLmFwcGVuZENoaWxkKG15SDIpO1xyXG5cclxuICBvdXRwdXQgPSBcIlwiO1xyXG5cclxuICBmb3IgKGxldCB3b3JrIG9mIHdvcmtzKSB7XHJcblxyXG4gICAgb3V0cHV0ICs9IGBcclxuICAgIFxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19yb3cgcHJvamVjdHNfX3Jvdy0tcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19yb3ctLWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiJHt3b3JrLmxpbmtTcmN9XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYWduaWZpYy1wb3B1cC1saW5rXCIgXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVwibGF6eVwiIHNyYz1cIiR7d29yay5zcmN9XCIgYWx0PVwiJHt3b3JrLmF1dGhvcn1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19yb3ctLXRleHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1oMy10aXRsZSBwcm9qZWN0LWNvbnRhaW5lci0tdGl0bGVcIj4ke3dvcmsudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYXJhZ3JhcGgtcHJpbWFyeS0xNiB0ZXh0LWNvbnRhaW5lci0tZGVzY3JpcHRpb25cIj4ke3dvcmsuYm9keX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG9wdXAtbGluayBidG4gYnRuLS1zaXplIGJ0bi0tdGhlbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3dvcmsubGlua1NyY31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXNlIFN0dWR5XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBvdXRwdXQ7XHJcbn1cclxuXHJcbmZldGNoVXNlcnMoKTtcclxuIl19
