"use strict"
$(document).ready(function () {
    $.getJSON("data/products.json", function (data) {
                console.log(data); //data is an object that goes and return with the info
        $.each(data, function () { //data holds the item in the json file
            $.each(this, function (key, value) {  //take each item and format it 
                // trails for my validation
                //var key1 = key;
                //var value1 = value;
                $("#ProductData tbody").append(
                    //  parssing JSON format to HTML
                              '<td>' + value.Name + '</td>' +
                              '<td>'+ value.Stock +'</td>'+
                              '<td>' + value.Quantity_on_Hand + '</td>' +
                              '<td>'+ value.Colour +'</td>'
                ); //end the append
            }); //end of the second each
        }); //end of the first each
    }); // end getJSON
}); //end ready