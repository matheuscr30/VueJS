<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Server Details are currently not updated</p>
    <template v-else>
      <p>Server #{{ server.id }}</p>
      <p>Status: {{ server.status }}</p>
      <button type="button" class="btn btn-primary" @click="changeStatus">Change Status</button>
    </template>
  </div>
</template>

<script>
  import {serverBus} from "../../main";

  export default {
    data: function () {
      return {
        server: null
      }
    },
    methods: {
      changeStatus() {
        this.server.status = 'Normal';
      }
    },
    created() {
      serverBus.$on('serverSelected', (data) => {
        this.server = data;
      });
    }
  }
</script>

<style>

</style>
