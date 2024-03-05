const button = document.querySelector("#button");

function findMe() {
    const status = document.querySelector("#location-status");

    const options = {
        enableHighAccuracy: true,
    };

    async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        await findMyCity(latitude, longitude);

        status.textContent = "";
    }

    function error() {
        status.textContent = "Impossible de vous trouver :(";
    }

    if (!navigator.geolocation) {
        status.textContent = "La géolocalisation ne fonctionne pas dans votre navigateur :(";
    } else {
        status.textContent = "Recherche ...";
        button.remove();
        navigator.geolocation.getCurrentPosition(success, error, options);
    }
}

async function findMyCity(latitude, longitude) {
    const base = "https://nominatim.openstreetmap.org/reverse?";
    const params = "&format=geocodejson&accept-language=fr"
    const url = base + "lat=" + latitude + "&lon=" + longitude + params;

    const response = await fetch(url)
    const result = await response.json()

    const data = result["features"][0]["properties"]["geocoding"]

    displayCity(data);
}

function displayCity(data) {
    const container = document.querySelector("#result-container");

    const cityContainer = document.createElement("div");
    const postCodeContainer = document.createElement("div");

    cityContainer.classList.add("city-container");
    cityContainer.textContent = data["city"]

    postCodeContainer.classList.add("postcode-container");
    postCodeContainer.textContent = data["postcode"]

    container.append(cityContainer);
    container.append(postCodeContainer);
}

window.addEventListener("load", function() {
    button.addEventListener("click", findMe);
})