import { Grid, Plant} from '../models/models'

export default class State {
    grilles: Grid[] = [
        new Grid(428,249,128,48,-37),
        new Grid(700,385,164,46,-38),
        new Grid(912,542,182,39,-31)
    ]

    plantes: Plant[] = [
        new Plant("carotte",1,"carotte",12,"test.jpg"),
        new Plant("haricot",3,"harricot vert",24,"harricot.jpg"),
        new Plant("courgebut",6,"Courge butternut",36,"courge.jpg")
    ]

}