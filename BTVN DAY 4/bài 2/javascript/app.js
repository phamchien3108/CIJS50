import ShelfManagement from './ShelfManagement.js';

let arr = [];
let shelf = new ShelfManagement(arr);
while (true) {
    let input = Number(prompt(`Chào mừng bạn đến với thư viện sách. Nhập
        1. Nếu bạn muốn muốn thêm tủ sách
        2. Nếu bạn muốn sửa tủ sách
        3. Nếu bạn muốn xóa tủ sách
        4. Nếu bạn muốn xem toàn bộ tủ sách
        5. Nếu bạn muốn thêm sách vào tủ
        6. Nếu bạn muốn in ra toàn bộ sách trong 1 tủ
        7. Thoát
    `));
    if (input == 1)
        shelf.addBookShelf();
    else if (input == 2)
        shelf.updateShelf();
    else if (input == 3)
        shelf.deleteShelf();
    else if (input == 4)
        shelf.listShelf();
    else if (input == 5)
        shelf.addBookToShelf();
    else if (input == 6)
        shelf.printBook();
    else if (input == 7)
        break;
    else
        alert("Bạn đã nhập sai cú pháp");
}