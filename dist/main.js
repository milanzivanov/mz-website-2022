async function e(){const e=new Request("https://milanzivanov.github.io/Data/works.json"),o=await fetch(e),c=await o.json();t(c),n(c)}function t(e){const t=document.querySelector(".skills-container-icons"),n=e.skills;for(const e of n){const n=document.createElement("div");n.classList.add("skill-icon");const o=document.createElement("img"),c=document.createElement("p");o.alt=e.iconTitle,o.src=e.iconSrc,c.textContent=e.iconTitle,n.appendChild(o),n.appendChild(c),t.appendChild(n)}}function n(e){const t=document.querySelector(".projects__content"),n=e.works;for(const e of n){const n=document.createElement("div");n.className="projects__row projects__row--reverse",n.setAttribute("data-aos","flip-left");const o=document.createElement("div");o.classList.add("projects__row--img");const c=document.createElement("a");c.className="magnific-popup-link",c.href=e.linkSrc,c.rel="dns-prefetch",c.target="_blank";const a=document.createElement("img");a.src=e.src,a.setAttribute("loading","lazy");const s=document.createElement("div");s.className="projects__row--text";const i=document.createElement("div");i.classList.add("text-container"),s.appendChild(i);const l=document.createElement("h3");i.appendChild(l),l.className="section-h3-title project-container--title",l.textContent=e.title;const r=document.createElement("p");r.className="paragraph-primary-16 text-container--description",r.textContent=e.body,i.appendChild(r);const d=document.createElement("a");d.className="popup-link btn btn--size btn--theme",d.href=e.linkSrc,d.target="_blank",d.rel="dns-prefetch",d.textContent="View It Here",i.appendChild(d);const p=document.createElement("ul");p.classList.add("list-icon-container"),n.appendChild(o),n.appendChild(s),o.appendChild(c),c.appendChild(a),r.appendChild(p),t.appendChild(n);const m=e.technologiesUsed;for(const e of m){const t=document.createElement("li"),n=document.createElement("img");n.src=e.svgIcon,p.appendChild(t),t.appendChild(n)}}}jQuery((function(){"use strict";if($(".nav-toggle-btn").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").toggleClass("active")})),$(".nav-backdrop-container").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").removeClass("active")})),$(".magnific-popup-link").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}}),$(".back-to-top").length){const e=100,t=function(){$(window).scrollTop()>e?$(".back-to-top").addClass("show"):($(".back-to-top").removeClass("show"),$(".show-fire").removeClass("show"))};t(),$(window).on("scroll",(function(){t()})),$(".back-to-top").on("click",(function(e){e.preventDefault(),$(".show-fire").addClass("show"),$("html,body").animate({scrollTop:0},50)}))}$(".scrollTo").on("click",(function(){const e=$(this).attr("href");if($(e).length){const t=$(e).offset().top;$("html,body").animate({scrollTop:t-20},100,"linear")}return $(".nav-toggle-btn, .nav-backdrop-container").removeClass("active"),!1}))})),$(".slick-slider").slick({slidesToShow:1,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:1e4,cssEase:"ease-out",asNavFor:".slider-nav",prevArrow:$(".left-nav-custom"),nextArrow:$(".right-nav-custom")}),$(".slider-nav").slick({arrows:!1,slidesToShow:3,slidesToScroll:1,asNavFor:".slick-slider",dots:!1,centerMode:!0,focusOnSelect:!0}),particlesJS("particles-js",{particles:{number:{value:65},color:{value:"#ddd"},shape:{type:"circle",stroke:{width:1,color:"#ddd"}},image:{src:"some link"},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1}},size:{value:3,random:!0,anim:{enable:!1,speed:100,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ddd",width:1},move:{enable:!0,speed:3,direction:"none"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:50,duration:.4}}}}),AOS.init({}),e();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXN5bmMiLCJwb3B1bGF0ZSIsInJlcXVlc3QiLCJSZXF1ZXN0IiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBvcHVsYXRlU2tpbGxzIiwicG9wdWxhdGVXb3JrcyIsImNvbnRhaW5lclNraWxscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNraWxscyIsInNraWxsIiwic2tpbGxJY29uQm94IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNraWxsSW1nIiwic2tpbGxUaXRsZSIsImFsdCIsImljb25UaXRsZSIsInNyYyIsImljb25TcmMiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwic2VjdGlvbiIsIndvcmtzIiwid29yayIsImNvbnRhaW5lclByb2plY3RzIiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwicHJvamVjdFJvd0ltZyIsInByb2plY3RBbmNob3JMaW5rIiwiaHJlZiIsImxpbmtTcmMiLCJyZWwiLCJ0YXJnZXQiLCJpbWdQcm9qZWN0IiwicHJvamVjdFJvd1RleHQiLCJ0ZXh0Q29udGFpbmVyIiwiaDNUaXRsZVJvd1RleHQiLCJ0aXRsZSIsInJvd1RleHRQYXJhZ3JhcGgiLCJib2R5IiwiYnRuVGV4dFJvdyIsIm15TGlzdCIsInNraWxsc1VzZWQiLCJ0ZWNobm9sb2dpZXNVc2VkIiwibGlzdEl0ZW0iLCJsaXN0SWNvbiIsInN2Z0ljb24iLCJqUXVlcnkiLCIkIiwib24iLCJlIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwiZ2FsbGVyeSIsImVuYWJsZWQiLCJpbWFnZSIsInRpdGxlU3JjIiwibGVuZ3RoIiwic2Nyb2xsVHJpZ2dlciIsImJhY2tUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwiZ2V0RWxlbSIsInRoaXMiLCJhdHRyIiwiZ2V0T2Zmc2V0Iiwib2Zmc2V0IiwidG9wIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiY3NzRWFzZSIsImFzTmF2Rm9yIiwicHJldkFycm93IiwibmV4dEFycm93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCIsInBhcnRpY2xlc0pTIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJjb2xvciIsInNoYXBlIiwic3Ryb2tlIiwid2lkdGgiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsImVuYWJsZSIsInNwZWVkIiwic2l6ZSIsInNpemVfbWluIiwic3luYyIsImxpbmVfbGlua2VkIiwiZGlzdGFuY2UiLCJtb3ZlIiwiZGlyZWN0aW9uIiwiaW50ZXJhY3Rpdml0eSIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsIm1vZGVzIiwicmVwdWxzZSIsImR1cmF0aW9uIiwiQU9TIiwiaW5pdCJdLCJtYXBwaW5ncyI6IkFBMExBQSxlQUFlQyxJQUViLE1BQ01DLEVBQVUsSUFBSUMsUUFERCxrREFHYkMsUUFBWUMsTUFBTUgsR0FDbEJJLFFBQWFGLEVBQUlHLE9BRXZCQyxFQUFlRixHQUNmRyxFQUFjSCxHQUtoQixTQUFTRSxFQUFlRixHQUN0QixNQUFNSSxFQUFrQkMsU0FBU0MsY0FBYywyQkFDekNDLEVBQVNQLEVBQUtPLE9BR3BCLElBQUssTUFBTUMsS0FBU0QsRUFBUSxDQUMxQixNQUFNRSxFQUFlSixTQUFTSyxjQUFjLE9BQzVDRCxFQUFhRSxVQUFVQyxJQUFJLGNBQzNCLE1BQU1DLEVBQVdSLFNBQVNLLGNBQWMsT0FDbENJLEVBQWFULFNBQVNLLGNBQWMsS0FFMUNHLEVBQVNFLElBQU1QLEVBQU1RLFVBQ3JCSCxFQUFTSSxJQUFNVCxFQUFNVSxRQUNyQkosRUFBV0ssWUFBY1gsRUFBTVEsVUFFL0JQLEVBQWFXLFlBQVlQLEdBQ3pCSixFQUFhVyxZQUFZTixHQUV6QlYs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QUdmQyxjQUFlLENBQ2JDLE9BQVEsQ0FDTkMsUUFBUyxDQUNQWCxRQUFRLEVBQ1JZLEtBQU0sV0FFUkMsUUFBUyxDQUNQYixRQUFRLEVBQ1JZLEtBQU0sU0FHVkUsTUFBTyxDQUNMQyxRQUFTLENBQ1BULFNBQVUsR0FDVlUsU0FBVSxRQU9sQkMsSUFBSUMsS0FBSyxJQXFIVHhIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZnVuY3Rpb24gKCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG4gIC8vIG9wZW4gbW9iaWxlIG1lbnUgYW5kIGhhbWJ1cmdlciBidG5cclxuICAkKFwiLm5hdi10b2dnbGUtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoXCIubmF2LXRvZ2dsZS1idG4sIC5uYXYtYmFja2Ryb3AtY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIFxyXG4gICQoXCIubmF2LWJhY2tkcm9wLWNvbnRhaW5lclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLm5hdi10b2dnbGUtYnRuLCAubmF2LWJhY2tkcm9wLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgLy8gTWFnbmlmaWMgcG9wdXBcclxuICAkKFwiLm1hZ25pZmljLXBvcHVwLWxpbmtcIikubWFnbmlmaWNQb3B1cCh7XHJcbiAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAvLyBvdGhlciBvcHRpb25zXHJcbiAgICBnYWxsZXJ5OiB7XHJcbiAgICAgIC8vIG9wdGlvbnMgZm9yIGdhbGxlcnlcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAvLyBvcHRpb25zIGZvciBpbWFnZSBjb250ZW50IHR5cGVcclxuICAgICAgdGl0bGVTcmM6IFwidGl0bGVcIixcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vIHJlc2V0IGlucHV0IFxyXG4gIC8vICQoXCIuYnRuLXRyaWdnZXItcmVzZXRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gIC8vICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0Rm9ybVwiKS5yZXNldCgpO1xyXG4gIC8vICAgJCgnI2VtYWlsLWZvcm0nKS52YWwoXCJcIik7XHJcbiAgLy8gICAkKCcjbWVzc2FnZS1mb3JtJykudmFsKFwiXCIpO1xyXG5cclxuICAvLyAgIGNvbnNvbGUubG9nKDEyMyk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIHBhcmFsbGF4XHJcbiAgLy8gbm90IGluIHVzZSBmb3Igbm93XHJcbiAgLy8gbGV0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWJvdXQtY29udGFpbmVyX19ib3gtLXBhcmFsbGF4Jyk7XHJcbiAgLy8gbmV3IHNpbXBsZVBhcmFsbGF4KGltYWdlLCB7fSk7XHJcblxyXG4gIC8vIGJ0dFxyXG4gIGlmICgkKFwiLmJhY2stdG8tdG9wXCIpLmxlbmd0aCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsVHJpZ2dlciA9IDEwMCwgLy8gcHhcclxuICAgICAgYmFja1RvVG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAoc2Nyb2xsVG9wID4gc2Nyb2xsVHJpZ2dlcikge1xyXG4gICAgICAgICAgJChcIi5iYWNrLXRvLXRvcFwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIuYmFjay10by10b3BcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgICAgJChcIi5zaG93LWZpcmVcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIGJhY2tUb1RvcCgpO1xyXG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgYmFja1RvVG9wKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuYmFjay10by10b3BcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgJChcIi5zaG93LWZpcmVcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG5cclxuICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDUwXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHNjcm9sbCB0byBzZWN0aW9uXHJcbiAgJCgnLnNjcm9sbFRvJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGdldEVsZW0gPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgIGNvbnN0IHRhcmdldERpc3RhbmNlID0gMjA7XHJcbiAgICBpZiAoJChnZXRFbGVtKS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgZ2V0T2Zmc2V0ID0gJChnZXRFbGVtKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogZ2V0T2Zmc2V0IC0gdGFyZ2V0RGlzdGFuY2VcclxuICAgICAgfSwgMTAwLCAnbGluZWFyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJChcIi5uYXYtdG9nZ2xlLWJ0biwgLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuLy8gU2xpY2tcclxuJChcIi5zbGljay1zbGlkZXJcIikuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogMSxcclxuICBhcnJvd3M6IHRydWUsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYXV0b3BsYXlTcGVlZDogMTAwMDAsXHJcbiAgY3NzRWFzZTogXCJlYXNlLW91dFwiLFxyXG4gIGFzTmF2Rm9yOiAnLnNsaWRlci1uYXYnLFxyXG4gIHByZXZBcnJvdzogJChcIi5sZWZ0LW5hdi1jdXN0b21cIiksXHJcbiAgbmV4dEFycm93OiAkKFwiLnJpZ2h0LW5hdi1jdXN0b21cIilcclxufSk7XHJcblxyXG4kKCcuc2xpZGVyLW5hdicpLnNsaWNrKHtcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhc05hdkZvcjogJy5zbGljay1zbGlkZXInLFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgZm9jdXNPblNlbGVjdDogdHJ1ZVxyXG59KTtcclxuXHJcbi8vIHBhcnRpY2xlc2pzXHJcbnBhcnRpY2xlc0pTKFwicGFydGljbGVzLWpzXCIsIHtcclxuICBwYXJ0aWNsZXM6IHtcclxuICAgIG51bWJlcjoge1xyXG4gICAgICB2YWx1ZTogNjUsXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IHtcclxuICAgICAgdmFsdWU6IFwiI2RkZFwiLFxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIHR5cGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgIHN0cm9rZToge1xyXG4gICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgIGNvbG9yOiBcIiNkZGRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICBzcmM6IFwic29tZSBsaW5rXCIsXHJcbiAgICB9LFxyXG4gICAgb3BhY2l0eToge1xyXG4gICAgICB2YWx1ZTogMC41LFxyXG4gICAgICByYW5kb206IHRydWUsXHJcbiAgICAgIGFuaW06IHtcclxuICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNpemU6IHtcclxuICAgICAgdmFsdWU6IDMsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgYW5pbToge1xyXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDEwMCxcclxuICAgICAgICBzaXplX21pbjogMC4xLFxyXG4gICAgICAgIHN5bmM6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgZGlzdGFuY2U6IDE1MCxcclxuICAgICAgY29sb3I6IFwiI2RkZFwiLFxyXG4gICAgICB3aWR0aDogMSxcclxuICAgIH0sXHJcbiAgICBtb3ZlOiB7XHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDMsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgbW9kZTogXCJyZXB1bHNlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uY2xpY2s6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgbW9kZTogXCJwdXNoXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgcmVwdWxzZToge1xyXG4gICAgICAgIGRpc3RhbmNlOiA1MCxcclxuICAgICAgICBkdXJhdGlvbjogMC40LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIEFPU1xyXG5BT1MuaW5pdCh7fSk7XHJcblxyXG4vLyBqc29uIGZpbGUgd2l0aCBteSBmZSB3b3Jrc1xyXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZSgpIHtcclxuXHJcbiAgY29uc3QgcmVxdWVzdFVSTCA9IFwiaHR0cHM6Ly9taWxhbnppdmFub3YuZ2l0aHViLmlvL0RhdGEvd29ya3MuanNvblwiO1xyXG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0VVJMKTtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHBvcHVsYXRlU2tpbGxzKGRhdGEpO1xyXG4gIHBvcHVsYXRlV29ya3MoZGF0YSk7XHJcblxyXG59XHJcblxyXG4vLyBza2lsbHMgZGF0YVxyXG5mdW5jdGlvbiBwb3B1bGF0ZVNraWxscyhkYXRhKSB7XHJcbiAgY29uc3QgY29udGFpbmVyU2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lsbHMtY29udGFpbmVyLWljb25zXCIpO1xyXG4gIGNvbnN0IHNraWxscyA9IGRhdGEuc2tpbGxzO1xyXG4gIC8vIGNvbnNvbGUubG9nKHNraWxscyk7XHJcblxyXG4gIGZvciAoY29uc3Qgc2tpbGwgb2Ygc2tpbGxzKSB7XHJcbiAgICBjb25zdCBza2lsbEljb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNraWxsSWNvbkJveC5jbGFzc0xpc3QuYWRkKFwic2tpbGwtaWNvblwiKTtcclxuICAgIGNvbnN0IHNraWxsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zdCBza2lsbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgXHJcbiAgICBza2lsbEltZy5hbHQgPSBza2lsbC5pY29uVGl0bGU7XHJcbiAgICBza2lsbEltZy5zcmMgPSBza2lsbC5pY29uU3JjO1xyXG4gICAgc2tpbGxUaXRsZS50ZXh0Q29udGVudCA9IHNraWxsLmljb25UaXRsZTtcclxuXHJcbiAgICBza2lsbEljb25Cb3guYXBwZW5kQ2hpbGQoc2tpbGxJbWcpO1xyXG4gICAgc2tpbGxJY29uQm94LmFwcGVuZENoaWxkKHNraWxsVGl0bGUpO1xyXG5cclxuICAgIGNvbnRhaW5lclNraWxscy5hcHBlbmRDaGlsZChza2lsbEljb25Cb3gpO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi8vIHdvcmtzIGRhdGFcclxuZnVuY3Rpb24gcG9wdWxhdGVXb3JrcyhkYXRhKSB7XHJcblxyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX19jb250ZW50XCIpO1xyXG4gIGNvbnN0IHdvcmtzID0gZGF0YS53b3JrcztcclxuXHJcbiAgZm9yIChjb25zdCB3b3JrIG9mIHdvcmtzKSB7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyUHJvamVjdHMuY2xhc3NOYW1lID0gXCJwcm9qZWN0c19fcm93IHByb2plY3RzX19yb3ctLXJldmVyc2VcIjtcclxuICAgIGNvbnRhaW5lclByb2plY3RzLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zXCIsIFwiZmxpcC1sZWZ0XCIpO1xyXG5cclxuICAgIC8vIFxyXG4gICAgY29uc3QgcHJvamVjdFJvd0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0Um93SW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c19fcm93LS1pbWdcIik7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEFuY2hvckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHByb2plY3RBbmNob3JMaW5rLmNsYXNzTmFtZSA9IFwibWFnbmlmaWMtcG9wdXAtbGlua1wiO1xyXG4gICAgcHJvamVjdEFuY2hvckxpbmsuaHJlZiA9IHdvcmsubGlua1NyYztcclxuICAgIHByb2plY3RBbmNob3JMaW5rLnJlbCA9IFwiZG5zLXByZWZldGNoXCI7XHJcbiAgICBwcm9qZWN0QW5jaG9yTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG5cclxuICAgIGNvbnN0IGltZ1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nUHJvamVjdC5zcmMgPSB3b3JrLnNyYztcclxuICAgIGltZ1Byb2plY3Quc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLCBcImxhenlcIik7XHJcblxyXG4gICAgLy8gXHJcbiAgICBjb25zdCBwcm9qZWN0Um93VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0Um93VGV4dC5jbGFzc05hbWUgPSBcInByb2plY3RzX19yb3ctLXRleHRcIjtcclxuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250YWluZXJcIik7XHJcbiAgICBwcm9qZWN0Um93VGV4dC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcclxuICAgIGNvbnN0IGgzVGl0bGVSb3dUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoM1RpdGxlUm93VGV4dCk7XHJcbiAgICBoM1RpdGxlUm93VGV4dC5jbGFzc05hbWUgPSBcInNlY3Rpb24taDMtdGl0bGUgcHJvamVjdC1jb250YWluZXItLXRpdGxlXCI7XHJcbiAgICBoM1RpdGxlUm93VGV4dC50ZXh0Q29udGVudCA9IHdvcmsudGl0bGU7XHJcbiAgICBjb25zdCByb3dUZXh0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICByb3dUZXh0UGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwicGFyYWdyYXBoLXByaW1hcnktMTYgdGV4dC1jb250YWluZXItLWRlc2NyaXB0aW9uXCI7XHJcbiAgICByb3dUZXh0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gd29yay5ib2R5O1xyXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dUZXh0UGFyYWdyYXBoKTtcclxuICAgIGNvbnN0IGJ0blRleHRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGJ0blRleHRSb3cuY2xhc3NOYW1lID0gXCJwb3B1cC1saW5rIGJ0biBidG4tLXNpemUgYnRuLS10aGVtZVwiO1xyXG4gICAgYnRuVGV4dFJvdy5ocmVmPSB3b3JrLmxpbmtTcmM7XHJcbiAgICBidG5UZXh0Um93LnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICBidG5UZXh0Um93LnJlbCA9IFwiZG5zLXByZWZldGNoXCI7XHJcbiAgICBidG5UZXh0Um93LnRleHRDb250ZW50ID0gXCJWaWV3IEl0IEhlcmVcIjtcclxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuVGV4dFJvdyk7XHJcbiAgICBjb25zdCBteUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbXlMaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWljb24tY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RSb3dJbWcpO1xyXG4gICAgY29udGFpbmVyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdFJvd1RleHQpO1xyXG5cclxuICAgIHByb2plY3RSb3dJbWcuYXBwZW5kQ2hpbGQocHJvamVjdEFuY2hvckxpbmspO1xyXG4gICAgcHJvamVjdEFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoaW1nUHJvamVjdCk7XHJcbiAgICBcclxuICAgIHJvd1RleHRQYXJhZ3JhcGguYXBwZW5kQ2hpbGQobXlMaXN0KTtcclxuXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lclByb2plY3RzKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc2tpbGxzVXNlZCA9IHdvcmsudGVjaG5vbG9naWVzVXNlZDtcclxuICAgIGZvciAoY29uc3Qgc2tpbGwgb2Ygc2tpbGxzVXNlZCkge1xyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGNvbnN0IGxpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIGxpc3RJY29uLnNyYyA9IHNraWxsLnN2Z0ljb247XHJcbiAgICAgIG15TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJY29uKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxucG9wdWxhdGUoKTtcclxuXHJcbi8vIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX19jb250ZW50XCIpO1xyXG4vLyAvLyBsZXQgdGl0bGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cyAud3JhcHBlci1pbm5lclwiKTtcclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcnMoKSB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVSTCk7XHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgbGV0IHdvcmtzID0gZGF0YS53b3JrcztcclxuXHJcbi8vICAgb3V0cHV0ID0gXCJcIjtcclxuXHJcbi8vICAgZm9yIChsZXQgd29yayBvZiB3b3Jrcykge1xyXG5cclxuLy8gICAgIG91dHB1dCArPSBgXHJcbiAgICBcclxuXHJcbi8vICAgICAgIDxkaXYgXHJcbi8vICAgICAgICAgY2xhc3M9XCJwcm9qZWN0c19fcm93IHByb2plY3RzX19yb3ctLXJldmVyc2VcIlxyXG4vLyAgICAgICAgIGRhdGEtYW9zPVwiZmxpcC1sZWZ0XCI+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNfX3Jvdy0taW1nXCI+XHJcbi8vICAgICAgICAgICAgICAgPGEgXHJcbi8vICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3dvcmsubGlua1NyY31cIlxyXG4vLyAgICAgICAgICAgICAgICAgICByZWw9XCJkbnMtcHJlZmV0Y2hcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hZ25pZmljLXBvcHVwLWxpbmtcIiBcclxuLy8gICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPHBpY3R1cmUgbG9hZGluZz1cImxhenlcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEzNjZweClcIiBzcmNzZXQ9XCIke3dvcmsuc3JjTGFyZ2VEZXNrdG9wfVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiIHNyY3NldD1cIiR7d29yay5zcmNEZXNrdG9wfVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMzYwcHgpXCIgc3Jjc2V0PVwiJHt3b3JrLnNyY01vYmlsZX1cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPGltZyBcclxuLy8gICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHt3b3JrLnNyY31cIiBcclxuLy8gICAgICAgICAgICAgICAgICAgICBhbHQ9XCIke3dvcmsudGl0bGV9XCIgLz5cclxuLy8gICAgICAgICAgICAgICAgIDwvcGljdHVyZT5cclxuXHJcbi8vICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX19yb3ctLXRleHRcIj5cclxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1oMy10aXRsZSBwcm9qZWN0LWNvbnRhaW5lci0tdGl0bGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAke3dvcmsudGl0bGV9XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFyYWdyYXBoLXByaW1hcnktMTYgdGV4dC1jb250YWluZXItLWRlc2NyaXB0aW9uXCI+JHt3b3JrLmJvZHl9PC9wPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgPGEgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBvcHVwLWxpbmsgYnRuIGJ0bi0tc2l6ZSBidG4tLXRoZW1lXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIHJlbD1cImRucy1wcmVmZXRjaFwiIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7d29yay5saW5rU3JjfVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIENhc2UgU3R1ZHlcclxuLy8gICAgICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICAgIGA7XHJcbi8vICAgfVxyXG5cclxuLy8gICBzZWN0aW9uLmlubmVySFRNTCA9IG91dHB1dDtcclxuLy8gfVxyXG5cclxuLy8gZmV0Y2hVc2VycygpO1xyXG4iXX0=
