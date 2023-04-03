const responsive={
0:{
  items:1
},
650:{
  items:2
},
1000:{
  items:3
}
}






$("document").ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // click event on toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });
// owl-carousel blog
$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:false,
  autoplayTimeout:2000,
  dots:false,
  nav:true,
  responsive:responsive
});

$('.move-up').click(function(){
$('html,body').animate({
  scrollTop:0
},800)

})

});
