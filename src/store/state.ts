import { Grille, Plante} from '../models/models'

export default class State {
    grilles: Grille[] = [
        new Grille(25,50,8,10,45),
        new Grille(100,200,12,4,0)
    ]

    plantes: Plante[] = [
        new Plante("carotte",1,"carotte",12,"test.jpg"),
        new Plante("haricot",3,"harricot vert",24,"harricot.jpg"),
        new Plante("courgebut",6,"Courge butternut",36,"courge.jpg")
    ]

}