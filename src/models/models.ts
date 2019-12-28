import { Guid } from "guid-typescript";
  
  export class Plante {
    code: string;
    diametre: number; // nombre de case de 5cm x 5cm de large et de haut.
    nom: string; // nom de la plante
    duree: number; //Nombre de semaines de vie de la plante.
    imagePath: string; //chemin vers l'image

    constructor(code: string, diametre: number, nom: string, duree : number, imagePath : string)
    {
        this.code = code;
        this.diametre = diametre;
        this.nom = nom;
        this.duree = duree;
        this.imagePath = imagePath;
    }
  }

  export class Contenu {
    id: Guid;
    semaineDebut: number; // semaine où la plante a été plantée
    anneeDebut: number; // année où la plante a été plantée
    idPlante: string; // Id de la plante
    idGrille: Guid; // Id de la grille qui contient ce contenu

    constructor(semaineDebut: number, anneeDebut: number, idPlante: string, idGrille : Guid)
    {
        this.id = Guid.create();
        this.semaineDebut = semaineDebut;
        this.anneeDebut = anneeDebut;
        this.idPlante = idPlante;
        this.idGrille = idGrille;
    }
  }

  export class Cellule {
      contenus: Contenu[];

      constructor()
      {
          this.contenus = new Array<Contenu>();
      }
  }

export class Grille{
    id: Guid;
    x: number; // coordonnée du point en haut à gauche de la grille
    y: number; // coordonnée du point en haut à gauche de la grille
    hauteur: number; //Nombre de carré de 5cm x 5cm de hauteur de la grille
    largeur: number; //Nombre de carré de 5cm x 5cm de largeur de la grille
    rotation: number; //angle de rotation de la grille en degrés
    cellules: Cellule[][];

    constructor(x: number, y: number, hauteur: number, largeur: number, rotation: number) {
        this.id = Guid.create();
        this.x = x;
        this.y = y;
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.rotation = rotation;
        this.cellules = new Array<Array<Cellule>>();
        
        for(var i: number = 0; i < hauteur; i++) {
            this.cellules[i] = [];
            for(var j: number = 0; j< largeur; j++) {
                this.cellules[i][j] = new Cellule();
            }
        }
    }

    run(arg: any): void {
        console.log(`running: test, arg: ${arg}`);
    }
}
