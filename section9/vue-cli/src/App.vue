<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'app-quote'">Quote</button>
        <button @click="selectedComponent = 'app-author'">Author</button>
        <button @click="selectedComponent = 'app-new'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>
        <!--<app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A Wonderful Quote</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote';
  import Author from './components/Author';
  import New from './components/New';

  export default {
    data: function () {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'app-quote'
      }
    },
    components: {
      'app-quote': Quote,
      'app-new': New,
      'app-author': Author
    }
  }
</script>

<style>

</style>
