<template>
    <div
      class="column is-one-third"
      v-for="pais in paises" :key="pais.code"
    >
      <Card :pais="pais" />
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
// Para poder acceder a la Store debemos importar el useStore de vuex
import {useStore} from 'vuex'
import Card from './Card'

export default {
  components:{
    Card
  },
  setup(){

    // Para poder acceder a la tienda debemos declararla en una constante
    const store = useStore()

    // usando onMounted para hacer la peticion 
    onMounted(()=>{
      // Para ejecutar una accion debemos usar el dispatch
      store.dispatch('getPaises')
    })

    // Haciendo una propiedad computada para renderizar los elementos
    const paises = computed(()=>{
      // return store.state.paises
      return store.getters.topPaisesPoblacion
    })

    return {paises}
  }
}
</script>
