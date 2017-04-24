export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power?: string,
        public alterEgo?: string
    ) { }

    static fromObject(object: any) {
        return new this(object.id, object.name, object.power, object.alterEgo);
    }
}
