mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcm9uOTdsaSIsImEiOiJjbW5pM2I4YXgwOTBjMnFwcHl1MDQ2bm82In0.cnc2hjzuK1oBWdo6VIBKNQ';

//marker positions
const monument = [151.26708326266586, -33.90129524469586]

const map = new mapboxgl.Map({
    container: 'mapcontainer',
    style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
    config: {
        basemap: {
            showPointOfInterestLabels: false,
            showRoadLabels: false,
            showLandmarkIconLabels: false,
            theme: "faded",
            lightPreset: "dawn"
        }
    },
    projection: 'globe', // display the map as a globe
    zoom: 8.9, // initial zoom level, 0 is the world view, higher values zoom in
    center: [151.282929, -33.85219] // center the map on this longitude and latitude
});

//location data for each marker
const oceanpooldata = [
  {
    "Name": "Bronte Baths",
    "longitude": 151.269321,
    "latitude": -33.90496776,
    "imageurl": "https://oceanrockpools.com.au/wp-content/uploads/2025/11/bronte-baths-price.jpg"
  },
  {
    "Name": "Avalon Rock Pool",
    "longitude": 151.3320911,
    "latitude": -33.63735103,
    "imageurl": "https://oceanrockpools.com.au/wp-content/uploads/2025/01/ocean-pool-Avalon.jpg"
  },
  {
    "Name": "Bondi Iceburgs Pool",
    "longitude": 151.2745431,
    "latitude": -33.89483968,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScr06laDmXlo9tEhtyaOJSFZEDeIqm87-asQ&s"
  },
  {
    "Name": "The Geoff James Pool (Clovelly Ocean Pool)",
    "longitude": 151.2668671,
    "latitude": -33.91392107,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkX93yBFrKihDB6afQutujZz6L92T2e_f0Q&s"
  },
  {
    "Name": "Collaroy Rock Pool",
    "longitude": 151.3047282,
    "latitude": -33.73347419,
    "imageurl": "https://res.cloudinary.com/dsyg3kxa2/image/upload/v1/media/listings/licensed-image_hc1s2h"
  },
  {
    "Name": "Giles Baths",
    "longitude": 151.2606107,
    "latitude": -33.91977279,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUP_YgoA9oXqlX9iK52D1AwSIxWtmBGkztw&s"
  },
  {
    "Name": "Ross Jones Memorial Pool (Coogee Beach Pool)",
    "longitude": 151.257927,
    "latitude": -33.92266671,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKqilL0Z9cDbdVuH7rDkrET9qvhrqlz92UA&s"
  },
  {
    "Name": "McIvers Baths (Coogee Women's Pool)",
    "longitude": 151.2596003,
    "latitude": -33.92407385,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxwCssPnfOdaAPvG9MmfzoLqMZnnG1L6fEg&s"
  },
  {
    "Name": "Wylie's Baths",
    "longitude": 151.2592609,
    "latitude": -33.92557014,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6zT1m3zauQL_-4CbLtQRHjIRZobFSBvkUg&s"
  },
  {
    "Name": "Cronulla Beach Rock Pool",
    "longitude": 151.1563843,
    "latitude": -34.0523917,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pVXdhZSoma5jinH1pZD_gcA7qN_ysI9CsQ&s"
  },
  {
    "Name": "Shelly Beach Pool",
    "longitude": 151.1559873,
    "latitude": -34.06402174,
    "imageurl": "https://media.timeout.com/images/105445572/image.jpg"
  },
  {
    "Name": "Oak Park Rock Pool",
    "longitude": 151.1573962,
    "latitude": -34.07041035,
    "imageurl": "https://australiaunseen.com/cdn/shop/files/DJI_0568_small_0b5bb830-4257-4eb7-96a1-548ab7e6840a.jpg?v=1774498741&width=300"
  },
  {
    "Name": "South Curl Curl Rock Pool",
    "longitude": 151.2936976,
    "latitude": -33.77440165,
    "imageurl": "https://oceanrockpools.com.au/wp-content/uploads/2023/12/South-Curl-Curl-Ocean-Pool.jpg"
  },
  {
    "Name": "Dee Why Rock Pool",
    "longitude": 151.2993557,
    "latitude": -33.75506845,
    "imageurl": "https://australiaunseen.com/cdn/shop/files/Dee_Why_Rock_Pool_02_small_e915c48b-49d4-47ea-b01c-79f172580065.jpg?v=1749269496&width=300"
  },
  {
    "Name": "Freshwater Rock Pool",
    "longitude": 151.2957525,
    "latitude": -33.78147867,
    "imageurl": "https://res.cloudinary.com/dsyg3kxa2/image/upload/v1/media/listings/2022-12-31_t1mpud"
  },
  {
    "Name": "Little Bay Pool",
    "longitude": 151.2528808,
    "latitude": -33.97976687,
    "imageurl": "https://oceanpoolsnsw.net.au/wp-content/uploads/2017/11/PoolBest-8-600x450.jpg"
  },
  {
    "Name": "Malabar Ocean Pool",
    "longitude": 151.2545417,
    "latitude": -33.9684944,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFrpc_Gnj82XgLC8ZWHNtIR-cvT-Z01keWw&s"
  },
  {
    "Name": "Fairy Bower Sea Pool",
    "longitude": 151.2950507,
    "latitude": -33.8005913,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp38MuDaR2cXcOtOI2axeNiKW5CdMXvPwWg&s"
  },
  {
    "Name": "Mahon Pool",
    "longitude": 151.2647232,
    "latitude": -33.94086723,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAbZwldj80hF2SBHbTQE4SYg3qtYGeRQb0Q&s"
  },
  {
    "Name": "South Maroubra Rock Pools",
    "longitude": 151.2588705,
    "latitude": -33.95318421,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsvm2AP2onXA8OVjwEx5xMcvC00jACOqVHw&s"
  },
  {
    "Name": "Mona Vale Rock Pool",
    "longitude": 151.3168337,
    "latitude": -33.67850678,
    "imageurl": "https://files.northernbeaches.nsw.gov.au/nbc-prod-files/images/recreational-areas/2017-05-08-14-09/mona-vale-rockpool.jpg"
  },
  {
    "Name": "Newport Rock Pool",
    "longitude": 151.3287879,
    "latitude": -33.64566738,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtRx1E7vkQTyDN5K7JIIcbYwF2mZ5yzjCtQ&s"
  },
  {
    "Name": "North Bondi Children's Pool",
    "longitude": 151.2825497,
    "latitude": -33.89101788,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVDJb5sPOtHSOtSVuDRNQopLhaIoskDhpdmQ&s"
  },
  {
    "Name": "North Curl Curl Rock Pool",
    "longitude": 151.3020208,
    "latitude": -33.76734314,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAQp2kYkIHZHeKYbCFBehllPCjMZrPAIBPQ&s"
  },
  {
    "Name": "North Narrabeen Rock Pool",
    "longitude": 151.30948046135805,
    "latitude": -33.702818809828614,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQ_M2EnVoXtKQT2u392DHxONF4LXC6vvZeQ&s"
  },
  {
    "Name": "Palm Beach Rock Pool",
    "longitude": 151.329356,
    "latitude": -33.5982499,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60aipMt0eIfQ7a863ls0Rx9boc7u_88hZdg&s"
  },
  {
    "Name": "Marrinawi Cove",
    "longitude": 151.2023173,
    "latitude": -33.85526321,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kIYOmwyDTn87qpUBhrU9_0MBoQDd6SqWuQ&s"
  },
  {
    "Name": "Ivo Rowe Pool",
    "longitude": 151.262132,
    "latitude": -33.93321794,
    "imageurl": "https://australiaunseen.com/cdn/shop/files/DJI_0584_small_81004935-c46c-4f1a-9e7d-1b439b023430.jpg?v=1749269495&width=300"
  },
  {
    "Name": "Whale Beach Rock Pool",
    "longitude": 151.3323881,
    "latitude": -33.61335838,
    "imageurl": "https://files.northernbeaches.nsw.gov.au/nbc-prod-files/images/recreational-areas/2017-05-08-14-10/whale-beach.jpg"
  }
]

//put markers on the map
oceanpooldata.forEach(ocean_pool => {
    const el = document.createElement('div');
    el.className = 'custom-marker';

    const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        closeOnClick: false
    }).setHTML(`<div>
           <strong>${ocean_pool.Name}</strong><br></br>
           <img src = "${ocean_pool.imageurl}"
                class = "popup-img">
       </div>`
    );

    const marker = new mapboxgl.Marker(el)
        .setLngLat([ocean_pool.longitude, ocean_pool.latitude])
        .addTo(map);

     // show popup on hover
    el.addEventListener('mouseenter', () => {
        popup.setLngLat([ocean_pool.longitude, ocean_pool.latitude]).addTo(map);
    });

    // hide popup when leaving
    el.addEventListener('mouseleave', () => {
        popup.remove();
    });    
})

//header
const header = document.createElement('div');
header.className = 'header';
header.innerHTML = `
    <h1>Sydney (Eora's) Ocean Pools</h1>
    <p>Ocean Pools are public saltwater pools along parts of Australia's coastline, where the waves from the ocean wash into the pool. These pools provide swimmers a sheltered place to bathe and even swim laps next to the rough beaches on Sydney's coastline  <br></br> Hover over the markers to look at each of Sydney's unique saltwater ocean pools.</p>
`;
document.body.appendChild(header);
