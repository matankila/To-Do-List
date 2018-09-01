//set all events for the to do list to run
setToDoList();

//function set all the events for to do list
function setToDoList()
{
	//hover effect on the li's
	$('ul').on("mouseenter",'li',function()
	{
		$(this).find("#trash").css({
            width: "40px",
            transition: "0.2s linear",
            opacity: "1"
        });
	});
    $('ul').on("mouseleave",'li',function()
	{
		$(this).find("#trash").css({
            width: "0",
            transition:  "0.2s linear",
            opacity: "0"
        });
	});
    //when click trash delete the li
    $("ul").on("click","li #trash",function(e)
    {
	    $(this).parent().fadeOut(500,function()//this - #trash this.parant - li
        {
            $(this).remove();//this - li
        });
        e.stopPropagation();//stop bubbling the event listener up    
    });
    //line through the todo completed
    $("ul").on("click",'li',function()
    {   	
    	$(this).toggleClass("completed");
    });
    //toggle visablity of the input when
    // clicking on the plus sign
    $("div #plus").on("click",function()
    {
       $("input").slideToggle(500);
    });
    //will add new todo on enter                                        
    $('input[type="text"]').keypress(function(e){
        var valueToDo;//will get the input value
        var writeToDo;//the html value to insert as a new li to the ul                  
        if(e.which===13)
        {
            valueToDo=$("input").val();
            writeToDo='<li><i id="trash" class="fas fa-trash-alt"></i>'+valueToDo+'</li>';
            $("ul").append(writeToDo);
            $("input").val("");
        }
    });
}