
function initMap() {
   
    const mark = [{ id:1, m:1,position:{lat: 21.1702, lng: 72.8311},title:'Surat' },{ id:2, m:2, position:{lat: 23.0225, lng: 72.5714},title:'Ahmedabad' },{ id:3, m:3, position:{lat: 22.3039, lng: 70.8022}, title:'Rajkot' },{ id:4, m:4, position:{lat: 22.3072, lng: 73.1812} ,title:'Vadodara'},{ id:5,m:5, position:{lat: 21.6264, lng: 73.0152}, title:'Ankleshwar' }];
    
    let map ;
    let mapOption ={
        center : { lat: 22.2587, lng:71.1924 },
        zoom: 7
    }
    map = new google.maps.Map(document.getElementById("map"), mapOption);
    var infowindow = new google.maps.InfoWindow();
    // The marker, positioned at Uluru
    mark.map((e)=>{
        e.id={
            position:e.position,
            title:e.title,
        }
        const marker = new google.maps.Marker(e.id);
        console.log('e.m:', marker)
        marker.setMap(map)
        google.maps.event.addListener(marker,'click',()=>{
            infowindow.close();
            infowindow.setContent(marker.getTitle())
            infowindow.open(marker.getMap(),marker)
        })
    })
  }
  
  window.initMap = initMap;



     
