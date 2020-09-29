import Book from './Book.js'
import Shelf from './Shelf.js';
export default class ShelfManagement {
    arr = [];
    constructor(arr) {
        this.arr = arr;
    }
    addBookShelf() {
        let id = prompt("Nhap vao chi so tu sach");
        let name = prompt("Nhap ten tu sach");
        let max = Number(prompt("Nhap vao so luong sach lon nhat"));
        let day = Date();
        let newShelf = new Shelf(id, name, max, day);
        this.arr.push(newShelf);
    }
    listShelf() {
        console.log(`        Bạn có ${this.arr.length} tủ sách là:`)
        for (let i = 0; i < this.arr.length; i++)
            console.log(this.arr[i]);
    }
    deleteShelf() {
        let id = prompt("Nhap vao chi so tu sach ban muon xoá");
        this.arr.splice(id - 1, 1);
    }
    updateShelf() {
        let id = prompt("Nhap vao chi so tu sach ban muon sửa");
        let property = prompt("Nhập thuộc tính muốn sửa(shelf_name,max)");
        let content = prompt("giá trị muốn sửa");
        this.arr[id - 1][property] = content;
    }
    addBookToShelf() {
        let id_shelf = prompt("Nhập id tủ sách mà bạn thêm sách");
        let id = prompt("Nhập id sách cần thêm");
        let name = prompt("Nhập tên sách cần thêm");
        let author = prompt("Nhập tác giả sách");
        let category = prompt("Nhập thể loại sách cần thêm");
        let day = Date();
        let newBook = new Book(id, name, author, category, day);
        this.arr[id_shelf - 1].arrBook.push(newBook);
    }
    printBook() {
        let id_shelf = prompt("Nhập id tủ sách mà bạn cần in toàn bộ sách ra");
        console.log(`Trong tủ sách có id là ${id_shelf} có ${this.arr[id_shelf - 1].arrBook.length} quyển sách`)
        for (let i = 0; i < this.arr[id_shelf - 1].arrBook.length; i++)
            console.log(this.arr[id_shelf - 1].arrBook[i]);
    }

}