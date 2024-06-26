var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      
      breakpoints: {
        320:{
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
  });


  var swiper = new Swiper(".mySwiper_two", {
    loop: true, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});



