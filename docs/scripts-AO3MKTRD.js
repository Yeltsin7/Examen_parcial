/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/window.addEventListener("DOMContentLoaded",a=>{var n=function(){const e=document.body.querySelector("#mainNav");e&&(window.scrollY===0?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink"))};n(),document.addEventListener("scroll",n),document.body.querySelector("#mainNav")&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",rootMargin:"0px 0px -40%"});const o=document.body.querySelector(".navbar-toggler");[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map(function(e){e.addEventListener("click",()=>{window.getComputedStyle(o).display!=="none"&&o.click()})}),new SimpleLightbox({elements:"#portfolio a.portfolio-box"})});
