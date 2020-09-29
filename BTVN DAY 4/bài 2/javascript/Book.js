export default class Books {
    id;
    book_name;
    author;
    category;
    day_create;
    constructor(id, book_name, author, category, day_create) {
        this.id = id;
        this.book_name = book_name;
        this.author = author;
        this.category = category;
        this.day_create = day_create;
    }
}