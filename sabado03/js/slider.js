$(document).ready(function() {

    $(".tumbail-list .item > img").hover(function() {
        
       var img = $(this).attr("data-img");
       
       console.log(img);
       
       var dataimg = JSON.parse(img);
       
       console.log(dataimg);
       
//       $(".slider-big > img").fadeOut(function(){
//          
//          $(this).attr("src",img).fadeIn();
//           
//       });
       
    });

});

