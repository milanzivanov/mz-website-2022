function e(e){window.innerWidth>800&&$(".nav-toggle-btn, .nav-backdrop-container").removeClass("active")}jQuery((function(){"use strict";if($(".nav-toggle-btn").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").toggleClass("active")})),$(".nav-backdrop-container").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").removeClass("active")})),$(".magnific-popup-link").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}}),$(".back-to-top").length){const e=100,t=function(){$(window).scrollTop()>e?$(".back-to-top").addClass("show"):($(".back-to-top").removeClass("show"),$(".show-fire").removeClass("show"))};t(),$(window).on("scroll",(function(){t()})),$(".back-to-top").on("click",(function(e){e.preventDefault(),$(".show-fire").addClass("show"),$("html,body").animate({scrollTop:0},50)}))}})),document.querySelector(".nav-desktop__list").addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("nav-desktop__link")){const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}})),e(),window.addEventListener("resize",e),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(document.querySelector(".nav-backdrop-container").classList.remove("active"),document.querySelector(".nav-toggle-btn").classList.remove("active"))}));const t=document.querySelector(".nav-desktop"),n=function(e,t){if(e.target.classList.contains("nav-desktop__link")){const t=e.target;t.closest(".nav-desktop").querySelectorAll(".nav-desktop__link").forEach(e=>{e!==t&&(e.style.opacity=this)})}};t.addEventListener("mouseover",n.bind(.3)),t.addEventListener("mouseout",n.bind(1));const o=document.querySelector(".header"),s=document.querySelector("main"),a=o.getBoundingClientRect().height,c=function(e){const[t]=e;t.isIntersecting?o.classList.remove("sticky"):o.classList.add("sticky")},i=new IntersectionObserver(c,{root:null,threshold:0,rootMargin:`-${a}px`});async function l(){const e=new Request("https://milanzivanov.github.io/Data/works.json"),t=await fetch(e),n=await t.json();r(n),d(n)}function r(e){const t=document.querySelector(".skills-container-icons"),n=e.skills;let o="";for(const e of n)o+=`\n      <div class="skill-icon">\n        <i \n          class="${e.iconClass}"\n          data-aos="fade-up">\n        </i>\n        <p>${e.iconTitle}</p>\n      </div>\n    `;t.innerHTML=o}function d(e){const t=document.querySelector(".projects__content"),n=e.works;for(const e of n){const n=document.createElement("div");n.className="projects__row projects__row--reverse",n.setAttribute("data-aos","flip-left");const o=document.createElement("div");o.classList.add("projects__row--img"),n.appendChild(o);const s=document.createElement("a");s.className="magnific-popup-link",s.href=e.linkSrc,s.rel="dns-prefetch",s.target="_blank";const a=document.createElement("img");a.src=e.src,a.setAttribute("loading","lazy");const c=document.createElement("div");c.className="projects__row--text",n.appendChild(c);const i=document.createElement("div");i.classList.add("text-container"),c.appendChild(i);const l=document.createElement("h3");l.className="section-h3-title project-container--title",l.textContent=e.title,i.appendChild(l);const r=document.createElement("div");r.classList.add("text-container--description"),i.appendChild(r);const d=document.createElement("p");d.className="paragraph-primary-16 paragraph-text",d.textContent=e.body,r.appendChild(d);const p=document.createElement("p");p.classList.add("paragraph-time"),p.textContent=e.projectTime,r.appendChild(p);const m=document.createElement("div");m.classList.add("skill-container"),r.appendChild(m);const u=document.createElement("p");u.classList.add("paragraph-strong"),u.textContent="Skill used:",m.appendChild(u);const v=document.createElement("ul");v.classList.add("list-icon-container"),m.appendChild(v),o.appendChild(s),s.appendChild(a);const h=document.createElement("a");h.className="popup-link btn btn--size btn--theme",h.href=e.linkSrc,h.target="_blank",h.rel="dns-prefetch",h.textContent="View It Here",i.appendChild(h),t.appendChild(n);const k=e.technologiesUsed;for(const e of k){const t=document.createElement("li"),n=document.createElement("i");n.className=e.svgIcon+" devicon",v.appendChild(t),t.appendChild(n)}}}i.observe(s),$(".slick-slider").slick({slidesToShow:1,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:1e4,cssEase:"ease-out",asNavFor:".slider-nav",prevArrow:$(".left-nav-custom"),nextArrow:$(".right-nav-custom")}),$(".slider-nav").slick({arrows:!1,slidesToShow:3,slidesToScroll:1,asNavFor:".slick-slider",dots:!1,centerMode:!0,focusOnSelect:!0}),particlesJS("particles-js",{particles:{number:{value:65},color:{value:"#ddd"},shape:{type:"circle",stroke:{width:1,color:"#ddd"}},image:{src:"some link"},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1}},size:{value:3,random:!0,anim:{enable:!1,speed:100,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ddd",width:1},move:{enable:!0,speed:3,direction:"none"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:50,duration:.4}}}}),AOS.init({}),l();const p=document.getElementById("date");p.innerHTML=(new Date).getFullYear();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicmVtb3ZlTWVudU9uUmVzaXplSWZBY3RpdmUiLCJlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIiQiLCJyZW1vdmVDbGFzcyIsImpRdWVyeSIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImdhbGxlcnkiLCJlbmFibGVkIiwiaW1hZ2UiLCJ0aXRsZVNyYyIsImxlbmd0aCIsInNjcm9sbFRyaWdnZXIiLCJiYWNrVG9Ub3AiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlkIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImtleSIsInJlbW92ZSIsIm5hdiIsImhhbmRsZUhvdmVyIiwib3BhY2l0eSIsImxpbmsiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInN0eWxlIiwidGhpcyIsImJpbmQiLCJoZWFkZXIiLCJtYWluIiwiaGVhZGVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic3RpY2t5TmF2IiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJhZGQiLCJoZWFkZXJPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJhc3luYyIsInBvcHVsYXRlIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicG9wdWxhdGVTa2lsbHMiLCJwb3B1bGF0ZVdvcmtzIiwiY29udGFpbmVyU2tpbGxzIiwic2tpbGxzIiwib3V0cHV0Iiwic2tpbGwiLCJpY29uQ2xhc3MiLCJpY29uVGl0bGUiLCJpbm5lckhUTUwiLCJzZWN0aW9uIiwid29ya3MiLCJ3b3JrIiwiY29udGFpbmVyUHJvamVjdHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwicHJvamVjdFJvd0ltZyIsImFwcGVuZENoaWxkIiwicHJvamVjdEFuY2hvckxpbmsiLCJocmVmIiwibGlua1NyYyIsInJlbCIsImltZ1Byb2plY3QiLCJzcmMiLCJwcm9qZWN0Um93VGV4dCIsInRleHRDb250YWluZXIiLCJoM1RpdGxlUm93VGV4dCIsInRleHRDb250ZW50IiwidGl0bGUiLCJyb3dUZXh0RGl2Iiwicm93VGV4dFBhcmFncmFwaCIsImJvZHkiLCJyb3dUZXh0VGltZSIsInByb2plY3RUaW1lIiwic2tpbGxDb250YWluZXIiLCJyb3dUZXh0U3Ryb25nIiwic2tpbGxMaXN0IiwiYnRuVGV4dFJvdyIsInNraWxsc1VzZWQiLCJ0ZWNobm9sb2dpZXNVc2VkIiwibGlzdEl0ZW0iLCJsaXN0SWNvbiIsInN2Z0ljb24iLCJvYnNlcnZlIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiY3NzRWFzZSIsImFzTmF2Rm9yIiwicHJldkFycm93IiwibmV4dEFycm93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCIsInBhcnRpY2xlc0pTIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJjb2xvciIsInNoYXBlIiwic3Ryb2tlIiwid2lkdGgiLCJyYW5kb20iLCJhbmltIiwiZW5hYmxlIiwic3BlZWQiLCJzaXplIiwic2l6ZV9taW4iLCJzeW5jIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwibW9kZXMiLCJyZXB1bHNlIiwiZHVyYXRpb24iLCJBT1MiLCJpbml0IiwiZGF0ZSIsImdldEVs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RUFBRSx1QkFHZkEsRUFBRSxlQUFlNEcsTUFBTSxDQUNyQkUsUUFBUSxFQUNSRCxhQUFjLEVBQ2RTLGVBQWdCLEVBQ2hCSCxTQUFVLGdCQUNWSixNQUFNLEVBQ05RLFlBQVksRUFDWkMsZUFBZSxJQUtqQkMsWUFBWSxlQUFnQixDQUMxQkMsVUFBVyxDQUNUQyxPQUFRLENBQ05DLE1BQU8sSUFFVEMsTUFBTyxDQUNMRCxNQUFPLFFBRVRFLE1BQU8sQ0FDTHhILEtBQU0sU0FDTnlILE9BQVEsQ0FDTkMsTUFBTyxFQUNQSCxNQUFPLFNBR1hwSCxNQUFPLENBQ0w4RSxJQUFLLGFBRVB2RCxRQUFTLENBQ1A0RixNQUFPLEdBQ1BLLFFBQVEsRUFDUkMsS0FBTSxDQUNKQyxRQUFRLEVBQ1JDLE1BQU8sSUFHWEMsS0FBTSxDQUNKVCxNQUFPLEVBQ1BLLFFBQVEsRUFDUkMsS0FBTSxDQUNKQyxRQUFRLEVBQ1JDLE1BQU8sSUFDUEUsU0FBVSxHQUNWQyxNQUFNLElBR1ZDLFlBQWEsQ0FDWEwsUUFBUSxFQUNSTSxTQUFVLElBQ1ZaLE1BQU8sT0FDUEcsTUFBTyxHQUVUVSxLQUFNLENBQ0pQLFFBQVEsRUFDUkMsTUFBTyxFQUNQTyxVQUFXLFNBR2ZDLGNBQWUsQ0FDYkMsT0FBUSxDQUNOQyxRQUFTLENBQ1BYLFFBQVEsRUFDUlksS0FBTSxXQUVSQyxRQUFTLENBQ1BiLFFBQVEsRUFDUlksS0FBTSxTQUdWRSxNQUFPLENBQ0xDLFFBQVMsQ0FDUFQsU0FBVSxHQUNWVSxTQUFVLFFBU2xCQyxJQUFJQyxLQUFLLElBK0hUNUYsSUFJQSxNQUFNNkYsRUFBT3BJLFNBQVNxSSxlQUFlLFFBQ3JDRCxFQUFLOUUsV0FBWSxJQUFJZ0YsTUFBT0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShmdW5jdGlvbiAoKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgLy8gb3BlbiBtb2JpbGUgbWVudSBhbmQgaGFtYnVyZ2VyIGJ0blxyXG4gICQoXCIubmF2LXRvZ2dsZS1idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5uYXYtdG9nZ2xlLWJ0biwgLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIubmF2LWJhY2tkcm9wLWNvbnRhaW5lclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLm5hdi10b2dnbGUtYnRuLCAubmF2LWJhY2tkcm9wLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgLy8gTWFnbmlmaWMgcG9wdXBcclxuICAkKFwiLm1hZ25pZmljLXBvcHVwLWxpbmtcIikubWFnbmlmaWNQb3B1cCh7XHJcbiAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAvLyBvdGhlciBvcHRpb25zXHJcbiAgICBnYWxsZXJ5OiB7XHJcbiAgICAgIC8vIG9wdGlvbnMgZm9yIGdhbGxlcnlcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAvLyBvcHRpb25zIGZvciBpbWFnZSBjb250ZW50IHR5cGVcclxuICAgICAgdGl0bGVTcmM6IFwidGl0bGVcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIHBhcmFsbGF4XHJcbiAgLy8gbm90IGluIHVzZSBmb3Igbm93XHJcbiAgLy8gbGV0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWJvdXQtY29udGFpbmVyX19ib3gtLXBhcmFsbGF4Jyk7XHJcbiAgLy8gbmV3IHNpbXBsZVBhcmFsbGF4KGltYWdlLCB7fSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIGJ0dFxyXG4gIGlmICgkKFwiLmJhY2stdG8tdG9wXCIpLmxlbmd0aCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsVHJpZ2dlciA9IDEwMCwgLy8gcHhcclxuICAgICAgYmFja1RvVG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAoc2Nyb2xsVG9wID4gc2Nyb2xsVHJpZ2dlcikge1xyXG4gICAgICAgICAgJChcIi5iYWNrLXRvLXRvcFwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIuYmFjay10by10b3BcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgICAgJChcIi5zaG93LWZpcmVcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIGJhY2tUb1RvcCgpO1xyXG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgYmFja1RvVG9wKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuYmFjay10by10b3BcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAkKFwiLnNob3ctZmlyZVwiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcblxyXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTBcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBTY3JvbGwgdG8gc2VjdGlvbiB3aXRoIGV2ZW50IGRlbGFnYXRpb24gYmV0dGVyIGFwcHJvYWNoXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWRlc2t0b3BfX2xpc3RcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gTWF0Y2hpbmcgc3RyYXRlZ3lcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtZGVza3RvcF9fbGlua1wiKSkge1xyXG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUmVtb3ZlIGFjdGl2ZSBtZW51IG1vYmlsZSBvbiByZXNpemUgaWYgaXQgaXMgYWN0aXZlIGJ1dCB0aGlzIHNjZW5hcmlvIGlzIG5vdCByZWFsIGluIHJlYWwgc2l0dWF0aW9uXHJcbmZ1bmN0aW9uIHJlbW92ZU1lbnVPblJlc2l6ZUlmQWN0aXZlKGUpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4MDApIHtcclxuICAgICQoXCIubmF2LXRvZ2dsZS1idG4sIC5uYXYtYmFja2Ryb3AtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxufVxyXG5cclxucmVtb3ZlTWVudU9uUmVzaXplSWZBY3RpdmUoKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVtb3ZlTWVudU9uUmVzaXplSWZBY3RpdmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFJlbW92ZSBhY3RpdmUgc3RhdGUgZnJvbSBtb2JpbGUgbWVudSB3aXRoIGtleSBlc2NhcGVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIilcclxuICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi10b2dnbGUtYnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBOYXYgbGluayBlZmZlY3RcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtZGVza3RvcFwiKTtcclxuXHJcbi8vIFJlZmFjdG9yaW5nXHJcbmNvbnN0IGhhbmRsZUhvdmVyID0gZnVuY3Rpb24gKGUsIG9wYWNpdHkpIHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWRlc2t0b3BfX2xpbmtcIikpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IHNpYmxpbmdzID0gbGlua1xyXG4gICAgICAuY2xvc2VzdChcIi5uYXYtZGVza3RvcFwiKVxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtZGVza3RvcF9fbGlua1wiKTtcclxuXHJcbiAgICBzaWJsaW5ncy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBpZiAoZWwgIT09IGxpbmspIHtcclxuICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdGhpcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4vLyBkZXNrdG9wIG5hdlxyXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBoYW5kbGVIb3Zlci5iaW5kKDAuMykpO1xyXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGhhbmRsZUhvdmVyLmJpbmQoMSkpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBTdGlja3lOYXZcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuY29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuLy8gY29uc29sZS5sb2coaGVhZGVySGVpZ2h0KTtcclxuXHJcbmNvbnN0IHN0aWNreU5hdiA9IGZ1bmN0aW9uIChlbnRyaWVzKSB7XHJcbiAgY29uc3QgW2VudHJ5XSA9IGVudHJpZXM7XHJcbiAgLy8gY29uc29sZS5sb2coZW50cnkpO1xyXG5cclxuICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaGVhZGVyT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoc3RpY2t5TmF2LCB7XHJcbiAgcm9vdDogbnVsbCxcclxuICB0aHJlc2hvbGQ6IDAsXHJcbiAgcm9vdE1hcmdpbjogYC0ke2hlYWRlckhlaWdodH1weGAsXHJcbn0pO1xyXG5cclxuaGVhZGVyT2JzZXJ2ZXIub2JzZXJ2ZShtYWluKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gU2xpY2tcclxuJChcIi5zbGljay1zbGlkZXJcIikuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogMSxcclxuICBhcnJvd3M6IHRydWUsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYXV0b3BsYXlTcGVlZDogMTAwMDAsXHJcbiAgY3NzRWFzZTogXCJlYXNlLW91dFwiLFxyXG4gIGFzTmF2Rm9yOiBcIi5zbGlkZXItbmF2XCIsXHJcbiAgcHJldkFycm93OiAkKFwiLmxlZnQtbmF2LWN1c3RvbVwiKSxcclxuICBuZXh0QXJyb3c6ICQoXCIucmlnaHQtbmF2LWN1c3RvbVwiKSxcclxufSk7XHJcblxyXG4kKFwiLnNsaWRlci1uYXZcIikuc2xpY2soe1xyXG4gIGFycm93czogZmFsc2UsXHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFzTmF2Rm9yOiBcIi5zbGljay1zbGlkZXJcIixcclxuICBkb3RzOiBmYWxzZSxcclxuICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gIGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gcGFydGljbGVzanNcclxucGFydGljbGVzSlMoXCJwYXJ0aWNsZXMtanNcIiwge1xyXG4gIHBhcnRpY2xlczoge1xyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIHZhbHVlOiA2NSxcclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB2YWx1ZTogXCIjZGRkXCIsXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgdHlwZTogXCJjaXJjbGVcIixcclxuICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgY29sb3I6IFwiI2RkZFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHNyYzogXCJzb21lIGxpbmtcIixcclxuICAgIH0sXHJcbiAgICBvcGFjaXR5OiB7XHJcbiAgICAgIHZhbHVlOiAwLjUsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgYW5pbToge1xyXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB2YWx1ZTogMyxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMTAwLFxyXG4gICAgICAgIHNpemVfbWluOiAwLjEsXHJcbiAgICAgICAgc3luYzogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICBjb2xvcjogXCIjZGRkXCIsXHJcbiAgICAgIHdpZHRoOiAxLFxyXG4gICAgfSxcclxuICAgIG1vdmU6IHtcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMyxcclxuICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgb25ob3Zlcjoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiBcInJlcHVsc2VcIixcclxuICAgICAgfSxcclxuICAgICAgb25jbGljazoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiBcInB1c2hcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2Rlczoge1xyXG4gICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgZGlzdGFuY2U6IDUwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBBT1NcclxuLy8gYW5pbWF0aW9uXHJcbkFPUy5pbml0KHt9KTtcclxuXHJcbi8vIGpzb24gZmlsZSB3aXRoIG15IGZlIHdvcmtzXHJcbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlKCkge1xyXG4gIGNvbnN0IHJlcXVlc3RVUkwgPSBcImh0dHBzOi8vbWlsYW56aXZhbm92LmdpdGh1Yi5pby9EYXRhL3dvcmtzLmpzb25cIjtcclxuICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdFVSTCk7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBwb3B1bGF0ZVNraWxscyhkYXRhKTtcclxuICBwb3B1bGF0ZVdvcmtzKGRhdGEpO1xyXG59XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHNraWxscyBkYXRhXHJcbmZ1bmN0aW9uIHBvcHVsYXRlU2tpbGxzKGRhdGEpIHtcclxuICBjb25zdCBjb250YWluZXJTa2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxscy1jb250YWluZXItaWNvbnNcIik7XHJcbiAgY29uc3Qgc2tpbGxzID0gZGF0YS5za2lsbHM7XHJcblxyXG4gIGxldCBvdXRwdXQgPSBcIlwiO1xyXG5cclxuICBmb3IgKGNvbnN0IHNraWxsIG9mIHNraWxscykge1xyXG4gICAgb3V0cHV0ICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInNraWxsLWljb25cIj5cclxuICAgICAgICA8aSBcclxuICAgICAgICAgIGNsYXNzPVwiJHtza2lsbC5pY29uQ2xhc3N9XCJcclxuICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgICA8cD4ke3NraWxsLmljb25UaXRsZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGNvbnRhaW5lclNraWxscy5pbm5lckhUTUwgPSBvdXRwdXQ7XHJcbn1cclxuXHJcbi8vIHdvcmtzIGRhdGFcclxuZnVuY3Rpb24gcG9wdWxhdGVXb3JrcyhkYXRhKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNfX2NvbnRlbnRcIik7XHJcbiAgY29uc3Qgd29ya3MgPSBkYXRhLndvcmtzO1xyXG5cclxuICBmb3IgKGNvbnN0IHdvcmsgb2Ygd29ya3MpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lclByb2plY3RzLmNsYXNzTmFtZSA9IFwicHJvamVjdHNfX3JvdyBwcm9qZWN0c19fcm93LS1yZXZlcnNlXCI7XHJcbiAgICBjb250YWluZXJQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvc1wiLCBcImZsaXAtbGVmdFwiKTtcclxuXHJcbiAgICAvL1xyXG4gICAgY29uc3QgcHJvamVjdFJvd0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0Um93SW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c19fcm93LS1pbWdcIik7XHJcbiAgICBjb250YWluZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Um93SW1nKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0QW5jaG9yTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgcHJvamVjdEFuY2hvckxpbmsuY2xhc3NOYW1lID0gXCJtYWduaWZpYy1wb3B1cC1saW5rXCI7XHJcbiAgICBwcm9qZWN0QW5jaG9yTGluay5ocmVmID0gd29yay5saW5rU3JjO1xyXG4gICAgcHJvamVjdEFuY2hvckxpbmsucmVsID0gXCJkbnMtcHJlZmV0Y2hcIjtcclxuICAgIHByb2plY3RBbmNob3JMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcblxyXG4gICAgY29uc3QgaW1nUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWdQcm9qZWN0LnNyYyA9IHdvcmsuc3JjO1xyXG4gICAgaW1nUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJsb2FkaW5nXCIsIFwibGF6eVwiKTtcclxuXHJcbiAgICAvL1xyXG4gICAgY29uc3QgcHJvamVjdFJvd1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdFJvd1RleHQuY2xhc3NOYW1lID0gXCJwcm9qZWN0c19fcm93LS10ZXh0XCI7XHJcbiAgICBjb250YWluZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Um93VGV4dCk7XHJcblxyXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lclwiKTtcclxuICAgIHByb2plY3RSb3dUZXh0LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGgzVGl0bGVSb3dUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaDNUaXRsZVJvd1RleHQuY2xhc3NOYW1lID0gXCJzZWN0aW9uLWgzLXRpdGxlIHByb2plY3QtY29udGFpbmVyLS10aXRsZVwiO1xyXG4gICAgaDNUaXRsZVJvd1RleHQudGV4dENvbnRlbnQgPSB3b3JrLnRpdGxlO1xyXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoM1RpdGxlUm93VGV4dCk7XHJcblxyXG4gICAgY29uc3Qgcm93VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb3dUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lci0tZGVzY3JpcHRpb25cIik7XHJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJvd1RleHREaXYpO1xyXG5cclxuICAgIGNvbnN0IHJvd1RleHRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHJvd1RleHRQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJwYXJhZ3JhcGgtcHJpbWFyeS0xNiBwYXJhZ3JhcGgtdGV4dFwiO1xyXG4gICAgcm93VGV4dFBhcmFncmFwaC50ZXh0Q29udGVudCA9IHdvcmsuYm9keTtcclxuICAgIHJvd1RleHREaXYuYXBwZW5kQ2hpbGQocm93VGV4dFBhcmFncmFwaCk7XHJcblxyXG4gICAgY29uc3Qgcm93VGV4dFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHJvd1RleHRUaW1lLmNsYXNzTGlzdC5hZGQoXCJwYXJhZ3JhcGgtdGltZVwiKTtcclxuICAgIHJvd1RleHRUaW1lLnRleHRDb250ZW50ID0gd29yay5wcm9qZWN0VGltZTtcclxuICAgIHJvd1RleHREaXYuYXBwZW5kQ2hpbGQocm93VGV4dFRpbWUpO1xyXG5cclxuICAgIGNvbnN0IHNraWxsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNraWxsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJza2lsbC1jb250YWluZXJcIik7XHJcbiAgICByb3dUZXh0RGl2LmFwcGVuZENoaWxkKHNraWxsQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCByb3dUZXh0U3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICByb3dUZXh0U3Ryb25nLmNsYXNzTGlzdC5hZGQoXCJwYXJhZ3JhcGgtc3Ryb25nXCIpO1xyXG4gICAgcm93VGV4dFN0cm9uZy50ZXh0Q29udGVudCA9IFwiU2tpbGwgdXNlZDpcIjtcclxuICAgIHNraWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd1RleHRTdHJvbmcpO1xyXG5cclxuICAgIGNvbnN0IHNraWxsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHNraWxsTGlzdC5jbGFzc0xpc3QuYWRkKFwibGlzdC1pY29uLWNvbnRhaW5lclwiKTtcclxuICAgIHNraWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNraWxsTGlzdCk7XHJcblxyXG4gICAgcHJvamVjdFJvd0ltZy5hcHBlbmRDaGlsZChwcm9qZWN0QW5jaG9yTGluayk7XHJcbiAgICBwcm9qZWN0QW5jaG9yTGluay5hcHBlbmRDaGlsZChpbWdQcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBidG5UZXh0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBidG5UZXh0Um93LmNsYXNzTmFtZSA9IFwicG9wdXAtbGluayBidG4gYnRuLS1zaXplIGJ0bi0tdGhlbWVcIjtcclxuICAgIGJ0blRleHRSb3cuaHJlZiA9IHdvcmsubGlua1NyYztcclxuICAgIGJ0blRleHRSb3cudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIGJ0blRleHRSb3cucmVsID0gXCJkbnMtcHJlZmV0Y2hcIjtcclxuICAgIGJ0blRleHRSb3cudGV4dENvbnRlbnQgPSBcIlZpZXcgSXQgSGVyZVwiO1xyXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5UZXh0Um93KTtcclxuXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lclByb2plY3RzKTtcclxuXHJcbiAgICAvLyB3b3JrIHNraWxsXHJcbiAgICBjb25zdCBza2lsbHNVc2VkID0gd29yay50ZWNobm9sb2dpZXNVc2VkO1xyXG4gICAgZm9yIChjb25zdCBza2lsbCBvZiBza2lsbHNVc2VkKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBjb25zdCBsaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICBsaXN0SWNvbi5jbGFzc05hbWUgPSBza2lsbC5zdmdJY29uICsgXCIgZGV2aWNvblwiO1xyXG4gICAgICBza2lsbExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0SWNvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5wb3B1bGF0ZSgpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFNldCBkYXRlXHJcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XHJcbmRhdGUuaW5uZXJIVE1MID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4iXX0=
