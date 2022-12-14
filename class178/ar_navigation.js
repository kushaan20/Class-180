var coordinates = {}

$(document).ready(function(){
    getCoordinates()
    display()
})

function getCoordinates(){
    var search = new URLSearchParams(window.location.search)
    if(search.has('source') && search.has('destination')){
        var source = search.get('source')
        var destination = search.get('destination')
        coordinates.s_lat = source.split(";")[0]
        coordinates.s_long = source.split(";")[1]

        coordinates.d_lat = destination.split(";")[0]
        coordinates.d_long = destination.split(";")[1]
    } else{
        window.history.back()
    }
}

function display(){
    $.ajax({
        url:`https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates.s_long}%2C${coordinates.s_lat}%3B${coordinates.d_lon}%2C${coordinates.d_lat}?alternatives=true&geometries=polyline&steps=true&access_token=pk.eyJ1Ijoia3VzaGFhbmFnYXJ3YWwiLCJhIjoiY2xhMTRzeTIwMDN1NTNvcGZrdTV2MDgxaCJ9.D_6nrH3kon9pDM1b2Jd5sg`,
        type:"get",
        success: function(response){
            console.log(response)
            var images = {
                "turn_left":"ar_left.png",
                "turn_right":"ar_right.png",
                "turn_slight_left":"ar_slight_left.png",
                "turn_slight_right":"ar_slight_right.png",
                "straight":"straight.png"
            }
        }
    })
}