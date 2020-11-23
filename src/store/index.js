import { createStore } from 'vuex'

export default createStore({
  state: {
    paises:[],
    paisesFiltrados:[]
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload
    }
  },
  actions: {

    // Consumir la API
    async getPaises({commit}){
      try {
        // Cuando se manda a produccion la App se debe de ocupar la URL
        // const res = await fetch('https://restcountries.eu/rest/v2/all')
        const res = await fetch('api.json')
        const data = await res.json()
        // guardando los resultados traidos de la API en el arreglo
        commit('setPaises', data)

      } catch (error) {
        console.log(error)
      }
    }

  },
  // Para ordenar los paises de mayor a menos segun su poblacion
  getters:{
    topPaisesPoblacion(state){
      return state.paises.sort((a,b)=>{
        return a.population < b.population ? 1 : -1
      })
    }
  },
  modules: {
  }
})
