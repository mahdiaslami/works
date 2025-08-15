
export type SubjectAttribute = {
    id: number
    title: string
}

export default class Subject {
    _attributes: SubjectAttribute

    constructor(
        attributes: SubjectAttribute = { id: Date.now(), title: '' }
    ) {
        this._attributes = attributes
    }

    get id() {
        return this._attributes.id
    }

    set id(v) {
        this._attributes.id = v
    }

    get title() {
        return this._attributes.title
    }

    set title(v) {
        this._attributes.title = v
    }

    toJSON() {
        return this._attributes
    }
}

