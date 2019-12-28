import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    grids: [
      {
        id: 1, x: 428, y: 249, rotation:-37, 
        cells: [
          [{contents: [25]},{contents: [25,26]},{contents: [25,26]},{contents: [26]},{},{},{}],
          [{contents: [25]},{contents: [25,26]},{contents: [25,26]},{contents: [26]},{},{},{}],
          [{contents: [25]},{contents: [25,26]},{contents: [25,26]},{contents: [26]},{},{},{}],
          [{},{},{},{},{},{},{}],
          [{contents: [84]},{},{},{},{},{},{}]
        ]
      }
    ],
    contents: {
      25: { startWeek: 40, lifetime: 3, codePlant: 'haricot'},
      26: { startWeek: 44, lifetime: 3, codePlant: 'haricot'},
      84: { startWeek: 39, lifetime: 3, codePlant: 'carrot'}
    },
    plants: {
      'carrot': {diameter: 1, name: "carottes", imagePath: "assets/carottes.jpg"},
      'harricot': {diameter: 3, name: "harricot vert", imagePath: "assets/harricot.jpg"},
      'courgebut': {diameter: 16, name: "courge butternut", imagePath: "assets/courgebut.jpg"}
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
