<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-server></app-server>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ServerDetails from './components/ServerDetails.vue';
    import Server from './components/Server.vue';

    export default {
        components: {
            'app-server': Server,
            'app-server-details': ServerDetails
        }
    }
</script>

<style>

</style>
