function findMe() {
    const status = document.querySelector("#location-status");
    const mapLink = document.querySelector("#map-link");
    const result = document.querySelector("#location-result");

    result.textContent = "";
    mapLink.href = "";
    mapLink.textContent = "";

    const options = {
        enableHighAccuracy: true,
    };

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const latContainer = document.createElement("div");
        const longContainer = document.createElement("div");

        status.textContent = "";
        latContainer.textContent = "Latitude : " + latitude
        longContainer.textContent= "Longitude : " + longitude

        result.append(latContainer);
        result.append(longContainer);

        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Voir une carte`
    }

    function error() {
        status.textContent = "Impossible de vous trouver :(";
    }

    if (!navigator.geolocation) {
        status.textContent = "La géolocalisation ne fonctionne pas dans votre navigateur :(";
    } else {
        status.textContent = "Recherche ...";
        navigator.geolocation.getCurrentPosition(success, error, options);
    }
}

document.querySelector("#button").addEventListener("click", findMe);