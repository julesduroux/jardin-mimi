import { Guid } from "guid-typescript";

  export class Plant {
    code: string;
    diameter: number; // nombre de case de 5cm x 5cm de large et de haut.
    name: string; // nom de la plante
    indicativeLifetime: number; //Nombre de semaines de vie de la plante.
    imagePath: string; //chemin vers l'image

    constructor(code: string, diameter: number, name: string, indicativeLifetime : number, imagePath : string)
    {
        this.code = code;
        this.diameter = diameter;
        this.name = name;
        this.indicativeLifetime = indicativeLifetime;
        this.imagePath = imagePath;
    }
  }

  export class Content {
    id: Guid;
    startWeek: number; // semaine où la plante a été plantée
    codePlant: string; // Id de la plante
    lifetime : number;

    constructor(startWeek: number, codePlant: string, lifetime: number)
    {
        this.id = Guid.create();
        this.startWeek = startWeek;
        this.codePlant = codePlant;
        this.lifetime = lifetime;
    }
  }

  export class Cell {
      contents: Content[];

      constructor()
      {
          this.contents = new Array<Content>();
      }
  }

export class Grid{
    id: Guid;
    x: number; // coordonnée du point en haut à gauche de la grille
    y: number; // coordonnée du point en haut à gauche de la grille
    lines: number; //Nombre de carré de 5cm x 5cm de hauteur de la grille
    columns: number; //Nombre de carré de 5cm x 5cm de largeur de la grille
    rotation: number; //angle de rotation de la grille en degrés
    cells: Cell[][];

    constructor(x: number, y: number, hauteur: number, largeur: number, rotation: number) {
        this.id = Guid.create();
        this.x = x;
        this.y = y;
        this.lines = hauteur;
        this.columns = largeur;
        this.rotation = rotation;
        this.cells = new Array<Array<Cell>>();

        for(var i: number = 0; i < hauteur; i++) {
            this.cells[i] = [];
            for(var j: number = 0; j< largeur; j++) {
                this.cells[i][j] = new Cell();
            }
        }
    }

    run(arg: any): void {
        console.log(`running: test, arg: ${arg}`);
    }
}