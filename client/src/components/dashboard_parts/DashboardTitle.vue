<template>
    <div class="dashboard-container">
        <div class="city-container">{{ city }}</div>
        <div class="postcode-container">{{ postcode }}</div>
    </div>
</template>

<script setup>
    defineProps({
        city: String,
        postcode: String
    })
</script>

<style scoped>
    .city-container {
        text-align: center;
        font-size: 2em;
    }

    .postcode-container {
        text-align: center;
        font-size: 1em;
    }
</style>