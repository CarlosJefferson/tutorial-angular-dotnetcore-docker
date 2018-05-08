export class TodoItem {
    id: number;
    name = '';
    isComplete = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
