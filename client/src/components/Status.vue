<template>
    <p class="location-status">{{ content }}</p>
</template>

<script setup>
    defineProps(['content'])
</script>

<style scoped>
    .location-status {
        margin-bottom: 20px;
        text-align: center;
    }
</style>