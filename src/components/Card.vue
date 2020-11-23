<template>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <!-- <figure class="image"> -->
          <!-- <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"> -->
        <!-- </figure> -->
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <!-- <figure class="image is-48x48"> -->
              <!-- <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"> -->
            <!-- </figure> -->
          </div>
          <div class="media-content">
            <p class="title is-4">{{pais.name}}</p>
            <p class="subtitle is-6">{{pais.capital}}</p>
          </div>
        </div>

        <div class="content">
          <span class="tag is-primary is-normal">Nombre nativo: {{pais.nativeName}}</span>
          <span class="tag is-info is-normal">Población:{{pais.population}}</span>
          <span class="tag is-link is-normal">Región: {{pais.region}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['pais']
}
</script>