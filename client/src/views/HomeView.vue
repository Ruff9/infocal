<template>
    <main class="main-container">
        <div class="content-container">
            <Status 
                v-if="statusContent != ''"
                :content="statusContent"
            />
            <LaunchButton
                v-if="displayButton"
                @launchFinder="findMe"    
            />
            <Dashboard 
                v-if="cityData != {}"
                :data=cityData
            />
        </div>
    </main>
</template>

<script setup>
    import LaunchButton from '../components/LaunchButton.vue'
    import Status from '../components/Status.vue'
    import Dashboard from '../components/Dashboard.vue'

    import { ref } from 'vue'

    const displayButton = ref(true)
    const statusContent = ref("")
    const cityData = ref({})

    function findMe() {
        const options = {
            enableHighAccuracy: true,
        };

        async function success(position) {
            statusContent.value = "";

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            await findMyCity(latitude, longitude);
        }

        function error() {
            statusContent.value = "Impossible de vous trouver :(";
        }

        if (!navigator.geolocation) {
            statusContent.value = "La géolocalisation ne fonctionne pas dans votre navigateur :(";
        } else {
            statusContent.value = "Recherche ...";
            displayButton.value = false;
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
        cityData.value = { city: data["city"], postcode: data["postcode"] }
    }
</script>