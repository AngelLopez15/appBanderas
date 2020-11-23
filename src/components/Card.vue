<template>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="pais.flag" :alt="`bandera-${pais.name}`" >
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4 has-text-centered">{{pais.name}}</p>
            <p class="subtitle is-6 has-text-centered">{{pais.capital}}</p>
          </div>
        </div>

        <div class="content">
          <span class="tag is-primary is-normal tags">Nombre nativo: {{pais.nativeName}}</span>
          <span class="tag is-info is-normal tags">Población:{{numeroFormato(pais.population)}}</span>
          <span class="tag is-link is-normal tags">Región: {{pais.region}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['pais'],
    setup(){
      
      // Para darle formato a los numeros
      const numeroFormato = (num) =>{
        return new Intl.NumberFormat("de-DE").format(num)
      }

      return{numeroFormato}

    }
  }
</script>

<style scoped>
  .tags{
    width: 100%;
  }
</style>