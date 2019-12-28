import Vue from 'vue'
import Vuex from 'vuex'

import {genereateGrid} from '../grid-generator.js'

Vue.use(Vuex)
console.log(genereateGrid(130, 30))
export default new Vuex.Store({
  state: {
    grids: [
      {
        id: 1, x: 2185, y: 1460, rotation: 26,
        cells: genereateGrid(130, 30)
      },
      {
        id: 2, x: 2760, y: 1770, rotation: 26.5,
        cells: genereateGrid(138, 30)
      },
      {
        id: 3, x: 3280, y: 2100, rotation: 23,
        cells: genereateGrid(136, 45)
      },
      {
        id: 4, x: 4000, y: 2375, rotation: 21,
        cells: genereateGrid(136, 28)
      },
      {
        id: 5, x: 4500, y: 2500, rotation: 16,
        cells: genereateGrid(136, 25)
      },
      {
        id: 6, x: 4975, y: 2650, rotation: 11,
        cells: genereateGrid(125, 25)
      },
      {
        id: 7, x: 5465, y: 2775, rotation: 7,
        cells: genereateGrid(110, 30)
      },
    ],
    contents: {
      25: { startWeek: 40, lifetime: 3, codePlant: 'haricot'},
      26: { startWeek: 44, lifetime: 3, codePlant: 'haricot'},
      84: { startWeek: 39, lifetime: 3, codePlant: 'carrot'}
    },
    plants: {
      'carrot': {diameter: 1, name: "carottes", imagePath: "assets/carottes.jpg", color: "orange"},
      'haricot': { diameter: 3, name: "harricot vert", imagePath: "assets/harricot.jpg", color: "green"},
      'courgebut': { diameter: 16, name: "courge butternut", imagePath: "assets/courgebut.jpg", color: "red"}
    },
    activeWeek: 40
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
