<template>
  <div>
    <h3>Some User Details</h3>
    <p>User Loaded has ID: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="{ name: 'userEdit', params: { id: $route.params.id }, query: {locale: 'en', q: 100} }"
      class="btn btn-primary">Edit User
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: $route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      };
    },
    beforeRouteEnter(to, from, next){
      next();
    }
  }
</script>
