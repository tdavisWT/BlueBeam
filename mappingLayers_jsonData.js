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
    var room=["CIRC MC"];
var layers=[
    {room:'', status:'',color:''  },
    ];
$( document ).ready(function() {

    $.getJSON('translated.json', function(data) {
       //alert(data);
        //console.log(data);
        for(var i=0;i<room.length;i++)
        {

            for(var k=0;k<data.length;k++)
            {
                alert('Checking for room='+room[i]);
                if(room[i]==data[k]["Room"])
                {
                    alert(data[k]["Room"]+data[k]["Status"]+data[k]["Color"]);
                    c=data[k].Color;
                    s=data[k].Status;
                    r=data[k].Room;
                    layers.push({room: r, status: s, color: c});
                }
            }


        }
        for(var j=0;j<layers.length;j++){
            console.log(layers[j]["room"]+layers[j]["status"]+layers[j]["Color"])
        }
        alert("Total Length="+data.length);
        // var result=JSON.stringify(data);
       // var result2=JSON.parse(data);
        //alert(result2);
        //console.log(result2);
    }); console.log( "ready!" );
});

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle)
            return true;
    }
    return false;
}