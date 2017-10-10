class Task {

    constructor(id, taskTitle, description) {
        this._id = id;
        this._taskTitle = taskTitle;
        this._description = description;
        Object.freeze(this);
    }

    get id() {

        return this._id;
    }

    get taskTitle() {

        return this._taskTitle;
    }

    get description() {

        return this._description;
    }
}
