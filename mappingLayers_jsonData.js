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
       //alert(data);
        //console.log(data);
        for(var i=0;i<data.length;i++){
            console.log(data[i]["Issue #"]);
        }
        alert("Total Length="+data.length);
        // var result=JSON.stringify(data);
       // var result2=JSON.parse(data);
        //alert(result2);
        //console.log(result2);
    }); console.log( "ready!" );
});
