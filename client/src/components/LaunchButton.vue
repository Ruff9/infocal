<template>
    <div class="launch-button" @click="$emit('launchFinder')">Où suis-je ?</div>
</template>

<script setup>
defineEmits(['launchFinder'])
</script>

<style scoped>
    .launch-button {
        order: 1;
        position: relative;
        background: var(--button-color);
        border: none;
        color: var(--button-text);
        padding: 15px 24px;
        font-size: 1.4rem;
        box-shadow: -6px 6px 0 var(--button-shadow);
        outline: none;
        user-select: none;
        font-weight: bold;
    }

    .launch-button:hover {
        background: var(--button-hover);
    }

    .launch-button:active {
        background: var(--button-active);
        top: 3px;
        left: -3px;
        box-shadow: -3px 3px 0 var(--button-shadow);
    }

    .launch-button::before {
        position: absolute;
        display: block;
        content: "";
        height: 0;
        width: 0;
        border: solid 6px transparent;
        border-right: solid 6px var(--button-shadow);
        border-left-width: 0px;
        background: none;
        top: 0px;
        left: -6px;
    }

    .launch-button::after {
        position: absolute;
        display: block;
        content: "";
        height: 0;
        width: 0;
        border: solid 6px transparent;
        border-top: solid 6px var(--button-shadow);
        border-bottom-width: 0px;
        background: none;
        right: 0;
        bottom: -6px;
    }

    .launch-button:active::before {
        border: solid 3px transparent;
        border-right: solid 3px var(--button-shadow);
        border-left-width: 0px;
        left: -3px;
    }

    .launch-button:active::after {
        border: solid 3px transparent;
        border-top: solid 3px var(--button-shadow);
        border-bottom-width: 0px;
        bottom: -3px;
    }
</style>