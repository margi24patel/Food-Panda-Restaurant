function initMap() {
    console.log("hi");
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14 
    });
    
    var contentString = '<div id="content">'+
            "Food Panda"+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    
      var gcoder = new google.maps.Geocoder();
      var address = "6380 Fallsview Blvd, Niagara Falls, ON L5K 9K2"; 
    //var address = "700 Humberwood Blvd, Etobicoke, ON M9W 7J4"; 
            gcoder.geocode(
                { 'address': address},
        function (results, status) {
        if (status == 'OK') {
            //address geocoded successfully
            //center map on Humber 
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: 'Food Panda'
            });
            
            
            marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
            } 
        }
    ); 
}


/*
function initializeMap() {
    console.log("hi");
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14 
    });
      var gcoder = new google.maps.Geocoder();
      //var address = "6380 Fallsview Blvd, Niagara Falls, ON L5K 9K2"; 
    var address = "700 Humberwood Blvd, Etobicoke, ON M9W 7J4"; 
            gcoder.geocode(
                { 'address': address},
        function (results, status) {
        if (status == 'OK') {
            //address geocoded successfully
            //center map on Humber 
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map 
            });
            } 
        }
    ); 
}
*/