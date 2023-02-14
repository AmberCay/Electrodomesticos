enum colorE {
    blanco,
    negro,
    rojo,
    azul,
    gris

}

enum powerRating {
    A,
    B,
    C,
    D,
    E,
    F
}

class Electrodomestico {

    // set up propiedades

    basePrice:number;
    color:colorE;
    powerRating:powerRating;
    weight:number

    // constructor
    constructor(basePrice:number) {
        this.basePrice = basePrice = 100;
        this.color = colorE.blanco
        this.comprobarConsumoElectrico
        this.weight = 5
    }

    // methods

    public setBasePrice(newBasePrice:number) {
        this.basePrice = newBasePrice;
    }

    public getBasePrice():number {
        return this.basePrice
    }

    public setColor(newColor:colorE) {
        this.color = newColor;
    }

    public getColor():colorE {
        return this.color;
    }

    public setPowerRating(newPowerRating:powerRating){
        this.powerRating = newPowerRating;
    }

    public getPowerRating():powerRating {
        return this.powerRating;
    }

    public setWeight(newWeight:number) {
        this.weight = newWeight;
    }

    public getWeight():number {
        return this.weight;
    }

    private comprobarConsumoElectrico(charLetra:'string') {
        if (!Object.keys(colorE).includes(charLetra)){
            this.powerRating = 5
        }
    }
}