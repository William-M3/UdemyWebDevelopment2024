// $("h1").addClass("big-title margin-50");

// $("h1").text("Bye");
// $("button").text("Don't Click Me");

// $("a").attr("href", "https://www.yahoo.com/")

// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

// $("button").click(function(){
//     $("h1").css("color", "purple");
// });

// $("input").keydown(function(event){
//     console.log(event.key);
// });

$(document).on("keydown", function(event){
   $("h1").text(event.key);
});