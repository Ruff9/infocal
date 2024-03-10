<template>
    <div class="dashboard-container">
        <DashboardTitle
            v-if="data != {}"
            :city="data['city']"
            :postcode="data['postcode']"
        />
    </div>
</template>

<script setup>
    import DashboardTitle from './dashboard_parts/DashboardTitle.vue'

    const props = defineProps(['data'])
</script>

<style scoped>

</style>