function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.667656691372514, lng: 135.42991868291816 },
    zoom: 15,
    mapId: "ee385370431a0477",
    mapTypeControl: false,
    fullScreenControl: false,
    streetViewControl: false,
  });

  const markers = [
    {
      name: "Warp pipe",
      lat: 34.66639483620067,
      lng: 135.42985430990382,
      img: "../img/pipe.svg",
      w: 38,
      h: 31,
    },
    {
      name: "My castle",
      lat: 34.66613010889071,
      lng: 135.43416730177597,
      //34.66613010889071, 135.43416730177597
      img: "../img/castle.svg",
      w: 38,
      h: 31,
    },
    {
      name: "Hill",
      lat: 34.676861649948066,
      lng: 135.42303813602692,
      //34.676861649948066, 135.42303813602692
      img: "../img/hill_with_eyes.svg",
      w: 38,
      h: 31,
    },

    {
      name: "Ghost house",
      lat: 34.656257363097964,
      lng: 135.4282693247268,
      //34.656257363097964, 135.4282693247268
      img: "../img/ghosthouse.svg",
      w: 38,
      h: 31,
    },
    {
      name: "Star",
      lat: 34.66928349785988,
      lng: 135.43183908364102,
      //34.66928349785988, 135.43183908364102
      img: "../img/star.svg",
      w: 38,
      h: 31,
    },
    {
      name: "You are here!",
      lat: 34.66824509350835,
      lng: 135.4305318725191,
      //34.66824509350835, 135.4305318725191
      img: "../img/pointer.svg",
      w: 38,
      h: 31,
    },
    {
      name: "Yoshi's house",
      lat: 34.66961129938123,
      lng: 135.42255917885947,
      //34.66961129938123, 135.42255917885947
      img: "../img/pipe.svg",
      lat: 38,
      lng: 31,
    },
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
      position: { lat: currMarker.lat, lng: currMarker.lng },
      map,
      title: currMarker.name,
      icon: {
        url: currMarker.img,
        scaledSize: new google.maps.Size(currMarker.w, currMarker.h),
      },

      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker.name,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}

//34.66639483620067, 135.42985430990382
// 34.667656691372514, 135.42991868291816
