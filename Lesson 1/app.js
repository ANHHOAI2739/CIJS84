// var/ let có thể khởi tạo không có biến
// const khởi tạo phải có biến




// Biến được khởi tạo bằng let, const chỉ có phạm vi sử dụng trong scope
// Biến được khởi tạo bằng var thì sẽ có phạm vi global scope

function mystery(...params) {
    return params
}
let a = mystery(1, 23, 4);
console.log(a);