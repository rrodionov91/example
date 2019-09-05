<template>
    <div id="app">
        <header>
            <nav class="flex border-b-2">
                <router-link :to="routingPathes.SOME_PAGE" class="nav-link">Page</router-link>
                <router-link :to="routingPathes.ANOTHER_PAGE" class="nav-link">Another page</router-link>
            </nav>
        </header>
        <section class="p-3">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: "MainComponent"
    }
</script>

<style>

</style>