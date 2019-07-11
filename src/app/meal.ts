export class Meal {
    public showDescription: boolean;
    constructor(public id: number, public meal: string, public calorie: number, public description: string) {
    this.showDescription = false;
    }
}
