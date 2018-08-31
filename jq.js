//set all events
setLisEvents();

//toggle visablity of the input when
// clicking on the plus sign
$("div #plus").on("click",function()
{
	$("input").slideToggle(500);
});
var valueToDo;//will get the input value
var writeToDo;//the html value to insert as a new li to the ul                                                              
$('input[type="text"]').keypress(function(e){
     if(e.which===13)
     {
     	valueToDo=$("input").val();
     	writeToDo='<li><i id="trash" class="fas fa-trash-alt"></i>'+valueToDo+'</li>';
     	$("ul").append(writeToDo);
     	$("input").val("");
     	setLisEvents();//update all events
     }
});
//function set all the events on page
function setLisEvents()
{
	//hover effect on the li's
	$('li').on("mouseenter",function()
	{
		$(this).find("#trash").fadeIn(500);
	});
    $('li').on("mouseleave",function()
	{
		$(this).find("#trash").fadeOut(500);
	});
    //when click trash delete the li
    $("li #trash").on("click",function()
    {
	    $(this).parent().remove();
	    $(this).remove();
    });
    //line through the todo completed
    $("ul li").on("click",function()
    {   	
    	$(this).css("color","grey");
    	$(this).css("text-decoration", "line-through");
    });
    //double click 'delete' the line through
    $("ul li").on("dblclick",function()
    {
    	
    	$(this).css("color","black");
    	$(this).css("text-decoration", "none");   	
    });

}