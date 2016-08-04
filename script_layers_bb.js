/**
 * Created by Jeevjyot on 7/28/16.
 */


var room=["103J102","103J102","103J102","103J202","103J202"];

var layers=["103J102-O","103J102-C","103J202-C","103J202-O"];

        var value, set_room = new Set(room);

        console.log(set_room.size);
        //for(var j=0;j<set_room.size;j++)


        set_room.forEach(function(i,value){
            console.log(value);
            console.log(i);
        });

//Mapping layers and room and comparing

