<template>
    <div>
        <NuxtRouteAnnouncer />
        <header>
            <h1 style="margin: 0">Polarstern Energie</h1>
        </header>
        <main>
            <TariffWizard />
        </main>
    </div>
</template>

<script setup lang="ts">
import TariffWizard from "./TariffWizard.vue";
</script>

<style>
html {
    font-family: Arial, Helvetica, sans-serif;
}

body {
    margin: 0;
}

header {
    background: #142828;
    color: white;
    padding: 2rem;
}

main {
    padding: 0 2rem;
}
</style>
