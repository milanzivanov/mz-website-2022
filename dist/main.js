function e(e){window.innerWidth>800&&$(".nav-toggle-btn, .nav-backdrop-container").removeClass("active")}jQuery((function(){"use strict";if($(".nav-toggle-btn").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").toggleClass("active")})),$(".nav-backdrop-container").on("click",(function(e){$(".nav-toggle-btn, .nav-backdrop-container").removeClass("active")})),$(".magnific-popup-link").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}}),$(".back-to-top").length){const e=100,t=function(){$(window).scrollTop()>e?$(".back-to-top").addClass("show"):($(".back-to-top").removeClass("show"),$(".show-fire").removeClass("show"))};t(),$(window).on("scroll",(function(){t()})),$(".back-to-top").on("click",(function(e){e.preventDefault(),$(".show-fire").addClass("show"),$("html,body").animate({scrollTop:0},50)}))}})),document.querySelector(".nav-desktop__list").addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("nav-desktop__link")){const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}})),e(),window.addEventListener("resize",e),document.addEventListener("keydown",e=>{"Escape"===e.key&&(document.querySelector(".nav-backdrop-container").classList.remove("active"),document.querySelector(".nav-toggle-btn").classList.remove("active"))});const t=document.querySelector(".nav-desktop"),n=function(e,t){if(e.target.classList.contains("nav-desktop__link")){const t=e.target;t.closest(".nav-desktop").querySelectorAll(".nav-desktop__link").forEach(e=>{e!==t&&(e.style.opacity=this)})}};t.addEventListener("mouseover",n.bind(.3)),t.addEventListener("mouseout",n.bind(1));const o=document.querySelector(".header"),s=document.querySelector("main"),c=o.getBoundingClientRect().height,a=function(e){const[t]=e;t.isIntersecting?o.classList.remove("sticky"):o.classList.add("sticky")},i=new IntersectionObserver(a,{root:null,threshold:0,rootMargin:`-${c}px`});async function l(){const e=new Request("https://milanzivanov.github.io/Data/works.json"),t=await fetch(e),n=await t.json();r(n),d(n)}function r(e){const t=document.querySelector(".skills-container-icons"),n=e.skills;let o="";for(const e of n)o+=`\n      <div class="skill-icon">\n        <i \n          class="${e.iconClass}"\n          data-aos="fade-up">\n        </i>\n        <p>${e.iconTitle}</p>\n      </div>\n    `;t.innerHTML=o}function d(e){const t=document.querySelector(".projects__content"),n=e.works;for(const e of n){const n=document.createElement("div");n.className="projects__row",n.setAttribute("data-aos","flip-left");const o=document.createElement("div");o.classList.add("projects__row--img"),n.appendChild(o);const s=document.createElement("a");s.className="magnific-popup-link",s.href=e.linkSrc,s.rel="dns-prefetch",s.target="_blank";const c=document.createElement("img");c.src=e.src,c.setAttribute("loading","lazy");const a=document.createElement("div");a.className="projects__row--text",n.appendChild(a);const i=document.createElement("div");i.classList.add("text-container"),a.appendChild(i);const l=document.createElement("h3");l.className="section-h3-title project-container--title",l.textContent=e.title,i.appendChild(l);const r=document.createElement("div");r.classList.add("text-container--description"),i.appendChild(r);const d=document.createElement("p");d.className="paragraph-text paragraph-text--border-bottom",d.textContent=e.body,r.appendChild(d);const p=document.createElement("p");p.classList.add("paragraph-text"),p.textContent=e.projectTime,r.appendChild(p);const u=document.createElement("div");u.classList.add("skill-container"),r.appendChild(u);const m=document.createElement("p");m.classList.add("paragraph-strong"),m.textContent="Skill used:",u.appendChild(m);const v=document.createElement("ul");v.classList.add("list-icon-container"),u.appendChild(v),o.appendChild(s),s.appendChild(c);const h=document.createElement("a");h.className="popup-link btn btn--size btn--theme",h.href=e.linkSrc,h.target="_blank",h.rel="dns-prefetch",h.textContent="View It Here",i.appendChild(h),t.appendChild(n);const g=e.technologiesUsed;for(const e of g){const t=document.createElement("li"),n=document.createElement("i");n.className=e.svgIcon+" devicon",v.appendChild(t),t.appendChild(n)}}}i.observe(s),$(".slick-slider").slick({slidesToShow:1,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:1e4,cssEase:"ease-out",asNavFor:".slider-nav",prevArrow:$(".left-nav-custom"),nextArrow:$(".right-nav-custom")}),$(".slider-nav").slick({arrows:!1,slidesToShow:3,slidesToScroll:1,asNavFor:".slick-slider",dots:!1,centerMode:!0,focusOnSelect:!0}),AOS.init({}),l();const p=document.getElementById("date");p.innerHTML=(new Date).getFullYear();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicmVtb3ZlTWVudU9uUmVzaXplSWZBY3RpdmUiLCJlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIiQiLCJyZW1vdmVDbGFzcyIsImpRdWVyeSIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImdhbGxlcnkiLCJlbmFibGVkIiwiaW1hZ2UiLCJ0aXRsZVNyYyIsImxlbmd0aCIsInNjcm9sbFRyaWdnZXIiLCJiYWNrVG9Ub3AiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlkIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImtleSIsInJlbW92ZSIsIm5hdiIsImhhbmRsZUhvdmVyIiwib3BhY2l0eSIsImxpbmsiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInN0eWxlIiwidGhpcyIsImJpbmQiLCJoZWFkZXIiLCJtYWluIiwiaGVhZGVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic3RpY2t5TmF2IiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJhZGQiLCJoZWFkZXJPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJhc3luYyIsInBvcHVsYXRlIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicG9wdWxhdGVTa2lsbHMiLCJwb3B1bGF0ZVdvcmtzIiwiY29udGFpbmVyU2tpbGxzIiwic2tpbGxzIiwib3V0cHV0Iiwic2tpbGwiLCJpY29uQ2xhc3MiLCJpY29uVGl0bGUiLCJpbm5lckhUTUwiLCJzZWN0aW9uIiwid29ya3MiLCJ3b3JrIiwiY29udGFpbmVyUHJvamVjdHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwicHJvamVjdFJvd0ltZyIsImFwcGVuZENoaWxkIiwicHJvamVjdEFuY2hvckxpbmsiLCJocmVmIiwibGlua1NyYyIsInJlbCIsImltZ1Byb2plY3QiLCJzcmMiLCJwcm9qZWN0Um93VGV4dCIsInRleHRDb250YWluZXIiLCJoM1RpdGxlUm93VGV4dCIsInRleHRDb250ZW50IiwidGl0bGUiLCJyb3dUZXh0RGl2Iiwicm93VGV4dFBhcmFncmFwaCIsImJvZHkiLCJyb3dUZXh0VGltZSIsInByb2plY3RUaW1lIiwic2tpbGxDb250YWluZXIiLCJyb3dUZXh0U3Ryb25nIiwic2tpbGxMaXN0IiwiYnRuVGV4dFJvdyIsInNraWxsc1VzZWQiLCJ0ZWNobm9sb2dpZXNVc2VkIiwibGlzdEl0ZW0iLCJsaXN0SWNvbiIsInN2Z0ljb24iLCJvYnNlcnZlIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiY3NzRWFzZSIsImFzTmF2Rm9yIiwicHJldkFycm93IiwibmV4dEFycm93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCIsIkFPUyIsImluaXQiLCJkYXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiJBQXlFQSxTQUFTQSxFQUEyQkMsR0FDOUJDLE9BQU9DLFdBQWEsS0FDdEJDLEVBQUUsNENBQTRDQyxZQUFZLFVBM0U5REMsUUFBTyxXQUNMLGFBMEJBLEdBeEJBRixFQUFFLG1CQUFtQkcsR0FBRyxTQUFTLFNBQVVOLEdBQ3pDRyxFQUFFLDRDQUE0Q0ksWUFBWSxhQUc1REosRUFBRSwyQkFBMkJHLEdBQUcsU0FBUyxTQUFVTixHQUNqREcsRUFBRSw0Q0FBNENDLFlBQVksYUFJNURE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dXNlIHN0cmljdFwiO1xyXG4gIC8vIG9wZW4gbW9iaWxlIG1lbnUgYW5kIGhhbWJ1cmdlciBidG5cclxuICAkKFwiLm5hdi10b2dnbGUtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoXCIubmF2LXRvZ2dsZS1idG4sIC5uYXYtYmFja2Ryb3AtY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5uYXYtdG9nZ2xlLWJ0biwgLm5hdi1iYWNrZHJvcC1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE1hZ25pZmljIHBvcHVwXHJcbiAgJChcIi5tYWduaWZpYy1wb3B1cC1saW5rXCIpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgLy8gb3RoZXIgb3B0aW9uc1xyXG4gICAgZ2FsbGVyeToge1xyXG4gICAgICAvLyBvcHRpb25zIGZvciBnYWxsZXJ5XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgLy8gb3B0aW9ucyBmb3IgaW1hZ2UgY29udGVudCB0eXBlXHJcbiAgICAgIHRpdGxlU3JjOiBcInRpdGxlXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyBidHRcclxuICBpZiAoJChcIi5iYWNrLXRvLXRvcFwiKS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRyaWdnZXIgPSAxMDAsIC8vIHB4XHJcbiAgICAgIGJhY2tUb1RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IHNjcm9sbFRyaWdnZXIpIHtcclxuICAgICAgICAgICQoXCIuYmFjay10by10b3BcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmJhY2stdG8tdG9wXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICAgICQoXCIuc2hvdy1maXJlXCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICBiYWNrVG9Ub3AoKTtcclxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJhY2tUb1RvcCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmJhY2stdG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgJChcIi5zaG93LWZpcmVcIikuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG5cclxuICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDUwXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gU2Nyb2xsIHRvIHNlY3Rpb24gd2l0aCBldmVudCBkZWxhZ2F0aW9uIGJldHRlciBhcHByb2FjaFxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1kZXNrdG9wX19saXN0XCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIE1hdGNoaW5nIHN0cmF0ZWd5XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWRlc2t0b3BfX2xpbmtcIikpIHtcclxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFJlbW92ZSBhY3RpdmUgbWVudSBtb2JpbGUgb24gcmVzaXplIGlmIGl0IGlzIGFjdGl2ZSBidXQgdGhpcyBzY2VuYXJpbyBpcyBub3QgcmVhbCBpbiByZWFsIHNpdHVhdGlvblxyXG5mdW5jdGlvbiByZW1vdmVNZW51T25SZXNpemVJZkFjdGl2ZShlKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gODAwKSB7XHJcbiAgICAkKFwiLm5hdi10b2dnbGUtYnRuLCAubmF2LWJhY2tkcm9wLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbnJlbW92ZU1lbnVPblJlc2l6ZUlmQWN0aXZlKCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlbW92ZU1lbnVPblJlc2l6ZUlmQWN0aXZlKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBSZW1vdmUgYWN0aXZlIHN0YXRlIGZyb20gbW9iaWxlIG1lbnUgd2l0aCBrZXkgZXNjYXBlXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFja2Ryb3AtY29udGFpbmVyXCIpXHJcbiAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtdG9nZ2xlLWJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gTmF2IGxpbmsgZWZmZWN0XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWRlc2t0b3BcIik7XHJcblxyXG4vLyBSZWZhY3RvcmluZ1xyXG5jb25zdCBoYW5kbGVIb3ZlciA9IGZ1bmN0aW9uIChlLCBvcGFjaXR5KSB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1kZXNrdG9wX19saW5rXCIpKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IGxpbmtcclxuICAgICAgLmNsb3Nlc3QoXCIubmF2LWRlc2t0b3BcIilcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWRlc2t0b3BfX2xpbmtcIik7XHJcblxyXG4gICAgc2libGluZ3MuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgaWYgKGVsICE9PSBsaW5rKSB7XHJcbiAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IHRoaXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuLy8gZGVza3RvcCBuYXZcclxubmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaGFuZGxlSG92ZXIuYmluZCgwLjMpKTtcclxubmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBoYW5kbGVIb3Zlci5iaW5kKDEpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gU3RpY2t5TmF2XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbmNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbi8vIGNvbnNvbGUubG9nKGhlYWRlckhlaWdodCk7XHJcblxyXG5jb25zdCBzdGlja3lOYXYgPSBmdW5jdGlvbiAoZW50cmllcykge1xyXG4gIGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzO1xyXG4gIC8vIGNvbnNvbGUubG9nKGVudHJ5KTtcclxuXHJcbiAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGhlYWRlck9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHN0aWNreU5hdiwge1xyXG4gIHJvb3Q6IG51bGwsXHJcbiAgdGhyZXNob2xkOiAwLFxyXG4gIHJvb3RNYXJnaW46IGAtJHtoZWFkZXJIZWlnaHR9cHhgLFxyXG59KTtcclxuXHJcbmhlYWRlck9ic2VydmVyLm9ic2VydmUobWFpbik7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFNsaWNrXHJcbiQoXCIuc2xpY2stc2xpZGVyXCIpLnNsaWNrKHtcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgYXJyb3dzOiB0cnVlLFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDEwMDAwLFxyXG4gIGNzc0Vhc2U6IFwiZWFzZS1vdXRcIixcclxuICBhc05hdkZvcjogXCIuc2xpZGVyLW5hdlwiLFxyXG4gIHByZXZBcnJvdzogJChcIi5sZWZ0LW5hdi1jdXN0b21cIiksXHJcbiAgbmV4dEFycm93OiAkKFwiLnJpZ2h0LW5hdi1jdXN0b21cIiksXHJcbn0pO1xyXG5cclxuJChcIi5zbGlkZXItbmF2XCIpLnNsaWNrKHtcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhc05hdkZvcjogXCIuc2xpY2stc2xpZGVyXCIsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQU9TXHJcbi8vIGFuaW1hdGlvblxyXG5BT1MuaW5pdCh7fSk7XHJcblxyXG4vLyBqc29uIGZpbGUgd2l0aCBteSBmZSB3b3Jrc1xyXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZSgpIHtcclxuICBjb25zdCByZXF1ZXN0VVJMID0gXCJodHRwczovL21pbGFueml2YW5vdi5naXRodWIuaW8vRGF0YS93b3Jrcy5qc29uXCI7XHJcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3RVUkwpO1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcG9wdWxhdGVTa2lsbHMoZGF0YSk7XHJcbiAgcG9wdWxhdGVXb3JrcyhkYXRhKTtcclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBza2lsbHMgZGF0YVxyXG5mdW5jdGlvbiBwb3B1bGF0ZVNraWxscyhkYXRhKSB7XHJcbiAgY29uc3QgY29udGFpbmVyU2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lsbHMtY29udGFpbmVyLWljb25zXCIpO1xyXG4gIGNvbnN0IHNraWxscyA9IGRhdGEuc2tpbGxzO1xyXG5cclxuICBsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHJcbiAgZm9yIChjb25zdCBza2lsbCBvZiBza2lsbHMpIHtcclxuICAgIG91dHB1dCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1pY29uXCI+XHJcbiAgICAgICAgPGkgXHJcbiAgICAgICAgICBjbGFzcz1cIiR7c2tpbGwuaWNvbkNsYXNzfVwiXHJcbiAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICAgICAgPHA+JHtza2lsbC5pY29uVGl0bGV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBjb250YWluZXJTa2lsbHMuaW5uZXJIVE1MID0gb3V0cHV0O1xyXG59XHJcblxyXG4vLyB3b3JrcyBkYXRhXHJcbmZ1bmN0aW9uIHBvcHVsYXRlV29ya3MoZGF0YSkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX19jb250ZW50XCIpO1xyXG4gIGNvbnN0IHdvcmtzID0gZGF0YS53b3JrcztcclxuXHJcbiAgZm9yIChjb25zdCB3b3JrIG9mIHdvcmtzKSB7XHJcbiAgICBjb25zdCBjb250YWluZXJQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXJQcm9qZWN0cy5jbGFzc05hbWUgPSBcInByb2plY3RzX19yb3dcIjtcclxuICAgIGNvbnRhaW5lclByb2plY3RzLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zXCIsIFwiZmxpcC1sZWZ0XCIpO1xyXG5cclxuICAgIC8vXHJcbiAgICBjb25zdCBwcm9qZWN0Um93SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RSb3dJbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3RzX19yb3ctLWltZ1wiKTtcclxuICAgIGNvbnRhaW5lclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RSb3dJbWcpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RBbmNob3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBwcm9qZWN0QW5jaG9yTGluay5jbGFzc05hbWUgPSBcIm1hZ25pZmljLXBvcHVwLWxpbmtcIjtcclxuICAgIHByb2plY3RBbmNob3JMaW5rLmhyZWYgPSB3b3JrLmxpbmtTcmM7XHJcbiAgICBwcm9qZWN0QW5jaG9yTGluay5yZWwgPSBcImRucy1wcmVmZXRjaFwiO1xyXG4gICAgcHJvamVjdEFuY2hvckxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuXHJcbiAgICBjb25zdCBpbWdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZ1Byb2plY3Quc3JjID0gd29yay5zcmM7XHJcbiAgICBpbWdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImxvYWRpbmdcIiwgXCJsYXp5XCIpO1xyXG5cclxuICAgIC8vXHJcbiAgICBjb25zdCBwcm9qZWN0Um93VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0Um93VGV4dC5jbGFzc05hbWUgPSBcInByb2plY3RzX19yb3ctLXRleHRcIjtcclxuICAgIGNvbnRhaW5lclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RSb3dUZXh0KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHQtY29udGFpbmVyXCIpO1xyXG4gICAgcHJvamVjdFJvd1RleHQuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgaDNUaXRsZVJvd1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBoM1RpdGxlUm93VGV4dC5jbGFzc05hbWUgPSBcInNlY3Rpb24taDMtdGl0bGUgcHJvamVjdC1jb250YWluZXItLXRpdGxlXCI7XHJcbiAgICBoM1RpdGxlUm93VGV4dC50ZXh0Q29udGVudCA9IHdvcmsudGl0bGU7XHJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgzVGl0bGVSb3dUZXh0KTtcclxuXHJcbiAgICBjb25zdCByb3dUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJvd1RleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHQtY29udGFpbmVyLS1kZXNjcmlwdGlvblwiKTtcclxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93VGV4dERpdik7XHJcblxyXG4gICAgY29uc3Qgcm93VGV4dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcm93VGV4dFBhcmFncmFwaC5jbGFzc05hbWUgPSBcInBhcmFncmFwaC10ZXh0IHBhcmFncmFwaC10ZXh0LS1ib3JkZXItYm90dG9tXCI7XHJcbiAgICByb3dUZXh0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gd29yay5ib2R5O1xyXG4gICAgcm93VGV4dERpdi5hcHBlbmRDaGlsZChyb3dUZXh0UGFyYWdyYXBoKTtcclxuXHJcbiAgICBjb25zdCByb3dUZXh0VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcm93VGV4dFRpbWUuY2xhc3NMaXN0LmFkZChcInBhcmFncmFwaC10ZXh0XCIpO1xyXG4gICAgcm93VGV4dFRpbWUudGV4dENvbnRlbnQgPSB3b3JrLnByb2plY3RUaW1lO1xyXG4gICAgcm93VGV4dERpdi5hcHBlbmRDaGlsZChyb3dUZXh0VGltZSk7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2tpbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNraWxsLWNvbnRhaW5lclwiKTtcclxuICAgIHJvd1RleHREaXYuYXBwZW5kQ2hpbGQoc2tpbGxDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHJvd1RleHRTdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHJvd1RleHRTdHJvbmcuY2xhc3NMaXN0LmFkZChcInBhcmFncmFwaC1zdHJvbmdcIik7XHJcbiAgICByb3dUZXh0U3Ryb25nLnRleHRDb250ZW50ID0gXCJTa2lsbCB1c2VkOlwiO1xyXG4gICAgc2tpbGxDb250YWluZXIuYXBwZW5kQ2hpbGQocm93VGV4dFN0cm9uZyk7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgc2tpbGxMaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWljb24tY29udGFpbmVyXCIpO1xyXG4gICAgc2tpbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoc2tpbGxMaXN0KTtcclxuXHJcbiAgICBwcm9qZWN0Um93SW1nLmFwcGVuZENoaWxkKHByb2plY3RBbmNob3JMaW5rKTtcclxuICAgIHByb2plY3RBbmNob3JMaW5rLmFwcGVuZENoaWxkKGltZ1Byb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IGJ0blRleHRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGJ0blRleHRSb3cuY2xhc3NOYW1lID0gXCJwb3B1cC1saW5rIGJ0biBidG4tLXNpemUgYnRuLS10aGVtZVwiO1xyXG4gICAgYnRuVGV4dFJvdy5ocmVmID0gd29yay5saW5rU3JjO1xyXG4gICAgYnRuVGV4dFJvdy50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgYnRuVGV4dFJvdy5yZWwgPSBcImRucy1wcmVmZXRjaFwiO1xyXG4gICAgYnRuVGV4dFJvdy50ZXh0Q29udGVudCA9IFwiVmlldyBJdCBIZXJlXCI7XHJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blRleHRSb3cpO1xyXG5cclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyUHJvamVjdHMpO1xyXG5cclxuICAgIC8vIHdvcmsgc2tpbGxcclxuICAgIGNvbnN0IHNraWxsc1VzZWQgPSB3b3JrLnRlY2hub2xvZ2llc1VzZWQ7XHJcbiAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHNraWxsc1VzZWQpIHtcclxuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGNvbnN0IGxpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAgIGxpc3RJY29uLmNsYXNzTmFtZSA9IHNraWxsLnN2Z0ljb24gKyBcIiBkZXZpY29uXCI7XHJcbiAgICAgIHNraWxsTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJY29uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnBvcHVsYXRlKCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gU2V0IGRhdGVcclxuY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcclxuZGF0ZS5pbm5lckhUTUwgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiJdfQ==
