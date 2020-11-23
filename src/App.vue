<template>
  <div class="container">
    <h1 class="is-size-1 has-text-weight-bold has-text-centered">Paises API</h1>
    <div class="columns is-flex-wrap-wrap ">
      <CardList />
    </div>
  </div>
</template>

<script>
import CardList from './components/CardList'

export default {
  name: 'App',
  components: {
    CardList
  }
}
</script>

