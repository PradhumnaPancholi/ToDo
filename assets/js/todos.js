//check off specific item by clicking//
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

//click on X to delete an item//
$("ul").on("click", "span", function(event){
    //removing an item with fadeout effect
     $(this).parent().fadeOut(500, function(){
        $(this).remove();
     });
    //to stop the code bubble//
    event.stopPropagation();
});

//adding new item//
$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        //grabbing inut as new item//
        var newToDo = $(this).val();
        //clear the input//
        $(this).val("");
        //create a new li and add to ul//
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + newToDo + "</li>")
    }
});