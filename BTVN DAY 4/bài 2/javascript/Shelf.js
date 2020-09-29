import Book from './Book.js';

export default class Shelf {
    id;
    shelf_name;
    max;
    day_create;
    arrBook = [];
    constructor(id, shelf_name, max, day_create, arrBook) {
        this.id = id;
        this.shelf_name = shelf_name;
        this.max = max;
        this.day_create = day_create;
        this.arrBook = [];
    }
}