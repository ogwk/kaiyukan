// $(function(){
//   $(".share-pc").hover(function(){
//     $(".nav-share").css("background", "#eeeded");
//     $(".share-list").slideToggle(400);
//   }, function(){
//     $(".share-list").slideTogglel(1);
//     $(".nav-share").css("background", "");
//   });
// });

$(function(){
  $(".share-pc").hover(function(){
    $(".nav-share").css("background", "#eeeded");
    $(".share-list").stop().slideToggle(400);
  }, function(){
    $(".share-list").slideToggle(1); 
    $(".nav-share").css("background", "");
  });
});

$(function(){
  $(".language-pc").hover(function(){
    $(".nav-language").css("background", "#eeeded");
    $(".language-list").stop().slideToggle(400);
  }, function(){
    $(".language-list").slideToggle(1); 
    $(".nav-language").css("background", "");
  });
});