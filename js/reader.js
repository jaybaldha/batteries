"use strict"
$(document).ready(function () {
    $.getJSON("data/products.json", function (data) {
                console.log(data); //data is an object that goes and return with the info
        $.each(data, function () { //data holds the item in the json file
            $.each(this, function (key, value) {  //take each item and format it 
                // trails for my validation
                //var key1 = key;
                //var value1 = value;
                $("#ProductData").append(
                    //  parssing JSON format to HTML
                     '<div>' +
                              '<h3>' + value.Name + '</h3>' +
                              '<h3>'+ value.Stock +'</h3>'+
                              '<h3>' + value.Quantity on Hand + '</h3>' +
                              '<h3>'+ value.Colour +'</h3>'+
                     '</div>'
                ); //end the append
            }); //end of the second each
        }); //end of the first each
    }); // end getJSON
}); //end ready