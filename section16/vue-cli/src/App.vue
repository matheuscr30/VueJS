<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>
        <router-view name="header-top"></router-view>
        <transition name="flip" mode="out-in">
          <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  .flip-enter {
    /*transform: rotateY(0deg);*/
  }

  .flip-enter-active {
    animation: flip-in  0.5s ease-out forwards;
  }

  .flip-leave {
    /*transform: rotateY(0deg);*/
  }

  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
</style>
