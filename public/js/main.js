$(document).ready(function() {

      var map;
      var citymap = {};

      citymap['chicago'] = {
        center: new google.maps.LatLng(41.878113, -87.629798),
        population: 2842518,
        pointer: null
      };
      citymap['newyork'] = {
        center: new google.maps.LatLng(40.714352, -74.005973),
        population: 8143197,
        pointer: null
      };
      citymap['losangeles'] = {
        center: new google.maps.LatLng(34.052234, -118.243684),
        population: 3844829,
        pointer: null
      }

      function initialize() {
          var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(38.878113, -87.629798),
          mapTypeId: google.maps.MapTypeId.ROADMAP
          };
       //   map = new google.maps.Map(document.getElementById('google_map'),
         //   mapOptions);
      }



      google.maps.event.addDomListener(window, 'load', initialize);

      $("#add_computers").click(function() {
          for (var city in citymap) {
              if (citymap[city].pointer != null) {
                  citymap[city].pointer.setMap(map);
              }
              else {
                  // Construct the circle for each value in citymap. We scale population by 20.
                  var populationOptions = {
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    center: citymap[city].center,
                    radius: citymap[city].population / 20
                  };
                  citymap[city].pointer = new google.maps.Circle(populationOptions);
              }
          }
      });

      $("#remove_computers").click(function() {
          for (var city in citymap) {
              if (citymap[city].pointer != null) {
                  citymap[city].pointer.setMap(null);
              }
          }
      });

      $("#grow_circles").click(function() {
          for (var city in citymap) {
              if (citymap[city].pointer != null) {
                  var rad = citymap[city].pointer.radius*2;
                  while (citymap[city].pointer.radius <= rad) {
                      citymap[city].pointer.radius *= 1.05;
                      citymap[city].pointer.setMap(null);
                      citymap[city].pointer.setMap(map);

                  }
              }
          }
      }); 

      var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36315921-1']);
        _gaq.push(['_setDomainName', 'bl.ocks.org']);
        _gaq.push(['_setAllowLinker', true]);
        _gaq.push(['_trackPageview']);

        (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();


});