/**
 * Created by Jeevjyot on 7/22/16.
 */
//@Author: Jeevjyot Singh Chhabda

////////////////////////////////////////////////////////////////////////////////
//This script the read json data from the excel file
//maps ths JSON data from OCG present in the bluebeam PDF
//one the layers are matched, each layer is assigned the data present in the json
//such as state (ON or OFF)
//and display the results on the PDF sheet
///////////////////////////////////////////////////////////////////////////////
$( document ).ready(function() {

    $.getJSON('translated.json', function(data) {
        var result=JSON.stringify(data);
        var result2=JSON.parse(result);
        alert(result2);
        console.log(result);
    }); console.log( "ready!" );
});
