"use strict";
//ready function of jquery 
$(document).ready(function(){
            //event handler for anchor tag whose parent is jdom  
            $("#paras a").click(function()
            {
                //checks if the current anchor tag's previous attribute has class hide or not     
                if($(this).prev().attr("class") =="hide")
                {
                    $(this).text("Show less"); //if true sets the text to Show less
                }
                else
                {
                    $(this).text("Show more"); //if false sets the text to Show more
                }
                $(this).prev().toggleClass();  //toggleClass of jquery
            }
            );
    }
);   






