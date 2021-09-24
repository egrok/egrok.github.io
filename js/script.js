$('.packet__slider').slick({
   slidesToShow: 4,
  slidesToScroll: 4,
  variableWidth: true,
  adaptiveHeight:true,
  arrow:true,
  prevArrow: '<div class="prev"></div>',
nextArrow: '<div class="next"></div>',
mobileFirst:true,
 responsive: [
   {
     breakpoint:1279,
     settings:{
       slideToShow:3,
       slidesToScroll:4,
       arrow:true,
       variableWidth: true,
       adaptiveHeight:true,
     }
   },
   {
     breakpoint:1023,
     settings:{
       slideToShow:2,
       slidesToScroll:2,
     }
   },
   {
     breakpoint:768,
     settings:{
       slideToShow:1,
       slidesToScroll:1,
     }
   },
   {
     breakpoint:425,
     settings:{
       slideToShow:1,
       slidesToScroll:1,
     }
   },
   {
     breakpoint:374,
     settings:{
       slideToShow:1,
       slidesToScroll:1,
     }
   },
 ]
 });

 $('.road__blocks2').slick({
 responsive: [
   {
     breakpoint:768,
     settings:{
       slideToShow:2,
       slidesToScroll:2,
       arrow:true,
       variableWidth: true,
       prevArrow: '<div class="prev"></div>',
       nextArrow: '<div class="next"></div>',
       mobileFirst:true,
     }
   },
   {
     breakpoint:426,
     settings:{
       slideToShow:1,
       slidesToScroll:1,
       arrow:true,
       variableWidth: true,
       prevArrow: '<div class="prev"></div>',
       nextArrow: '<div class="next"></div>',
       mobileFirst:true,
     }
   },
 ]
});
