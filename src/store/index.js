import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { genereateGrid } from '../grid-generator.js'

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
      25: { startWeek: 40, lifetime: 3, codePlant: 'haricot' },
      26: { startWeek: 44, lifetime: 3, codePlant: 'haricot' },
      84: { startWeek: 39, lifetime: 3, codePlant: 'carrot' }
    },
    plants: {
      'carrotte': { diameter: 1, name: "carotte", imagePath: "../assets/carottes.jpg", color: "orange" },
      'harricot': { diameter: 3, name: "harricot vert", imagePath: "../assets/harricot.jpg", color: "green" },
      'courge': { diameter: 16, name: "courge", imagePath: "../assets/courge.jpg", color: "red" }
    },
    activeWeek: 40,
    weekOptions: [{ label: 'Sem 1 (1 Janvier -> 5 Janvier)', code: 1 },
    { label: 'Sem 2 (6 Janvier -> 12 Janvier)', code: 2 },
    { label: 'Sem 3 (13 Janvier -> 19 Janvier)', code: 3 },
    { label: 'Sem 4 (20 Janvier -> 26 Janvier)', code: 4 },
    { label: 'Sem 5 (27 Janvier -> 2 Fevrier)', code: 5 },
    { label: 'Sem 6 (3 Fevrier -> 9 Fevrier)', code: 6 },
    { label: 'Sem 7 (10 Fevrier -> 16 Fevrier)', code: 7 },
    { label: 'Sem 8 (17 Fevrier -> 23 Fevrier)', code: 8 },
    { label: 'Sem 9 (24 Fevrier -> 1 Mars)', code: 9 },
    { label: 'Sem 10 (2 Mars -> 8 Mars)', code: 10 },
    { label: 'Sem 11 (9 Mars -> 15 Mars)', code: 11 },
    { label: 'Sem 12 (16 Mars -> 22 Mars)', code: 12 },
    { label: 'Sem 13 (23 Mars -> 29 Mars)', code: 13 },
    { label: 'Sem 14 (30 Mars -> 5 Avril)', code: 14 },
    { label: 'Sem 15 (6 Avril -> 12 Avril)', code: 15 },
    { label: 'Sem 16 (13 Avril -> 19 Avril)', code: 16 },
    { label: 'Sem 17 (20 Avril -> 26 Avril)', code: 17 },
    { label: 'Sem 18 (27 Avril -> 3 Mai)', code: 18 },
    { label: 'Sem 19 (4 Mai -> 10 Mai)', code: 19 },
    { label: 'Sem 20 (11 Mai -> 17 Mai)', code: 20 },
    { label: 'Sem 21 (18 Mai -> 24 Mai)', code: 21 },
    { label: 'Sem 22 (25 Mai -> 31 Mai)', code: 22 },
    { label: 'Sem 23 (1 Juin -> 7 Juin)', code: 23 },
    { label: 'Sem 24 (8 Juin -> 14 Juin)', code: 24 },
    { label: 'Sem 25 (15 Juin -> 21 Juin)', code: 25 },
    { label: 'Sem 26 (22 Juin -> 28 Juin)', code: 26 },
    { label: 'Sem 27 (29 Juin -> 5 Juillet)', code: 27 },
    { label: 'Sem 28 (6 Juillet -> 12 Juillet)', code: 28 },
    { label: 'Sem 29 (13 Juillet -> 19 Juillet)', code: 29 },
    { label: 'Sem 30 (20 Juillet -> 26 Juillet)', code: 30 },
    { label: 'Sem 31 (27 Juillet -> 2 Août)', code: 31 },
    { label: 'Sem 32 (3 Août -> 9 Août)', code: 32 },
    { label: 'Sem 33 (10 Août -> 16 Août)', code: 33 },
    { label: 'Sem 34 (17 Août -> 23 Août)', code: 34 },
    { label: 'Sem 35 (24 Août -> 30 Août)', code: 35 },
    { label: 'Sem 36 (31 Août -> 6 Septembre)', code: 36 },
    { label: 'Sem 37 (7 Septembre -> 13 Septembre)', code: 37 },
    { label: 'Sem 38 (14 Septembre -> 20 Septembre)', code: 38 },
    { label: 'Sem 39 (21 Septembre -> 27 Septembre)', code: 39 },
    { label: 'Sem 40 (28 Septembre -> 4 Octobre)', code: 40 },
    { label: 'Sem 41 (5 Octobre -> 11 Octobre)', code: 41 },
    { label: 'Sem 42 (12 Octobre -> 18 Octobre)', code: 42 },
    { label: 'Sem 43 (19 Octobre -> 25 Octobre)', code: 43 },
    { label: 'Sem 44 (26 Octobre -> 1 Novembre)', code: 44 },
    { label: 'Sem 45 (2 Novembre -> 8 Novembre)', code: 45 },
    { label: 'Sem 46 (9 Novembre -> 15 Novembre)', code: 46 },
    { label: 'Sem 47 (16 Novembre -> 22 Novembre)', code: 47 },
    { label: 'Sem 48 (23 Novembre -> 29 Novembre)', code: 48 },
    { label: 'Sem 49 (30 Novembre -> 6 Decembre)', code: 49 },
    { label: 'Sem 50 (7 Decembre -> 13 Decembre)', code: 50 },
    { label: 'Sem 51 (14 Decembre -> 20 Decembre)', code: 51 },
    { label: 'Sem 52 (21 Decembre -> 27 Decembre)', code: 52 },
    { label: 'Sem 53 (28 Decembre -> 31 Decembre)', code: 53 }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
