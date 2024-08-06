var selected = document.querySelector("#select");
selected.addEventListener("change", (e) => {
  getPosition(e.target.value);
});

async function getPosition(x) {
  console.log(x);
  var result = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${x}`
  );
  var data = await result.json();
  var lng = Number(data[0].lon);
  var lat = Number(data[0].lat);
  console.log(typeof lat);
  initMap(lat, lng);
}

function initMap(myLat = 26.2540493, myLang = 29.2675469) {
  const myLatLng = { lat: myLat, lng: myLang };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
