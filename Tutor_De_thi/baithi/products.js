const addProduct = () => {
    event.preventDefault(); //Ngăn trình duyệt chuyển hướng
    // Lấy dữ liệu từ form
    const tensanpham = document.querySelector('input[name="tensanpham"]').value; //Lấy giá trị từ ô input tên sp
    const anhsanpham = document.querySelector('input[name="anhsanpham"]').value; //Lấy giá trị từ ô input anh sp
    const danhmuc = document.querySelector('select[name="danhmuc"]').value; //Lấy giá trị từ ô select danh mục
    const giatien = document.querySelector('input[name="giatien"]').value; //Lấy giá trị từ ô input giá tiền
    // Sử dụng fetch phương thức POST để lưu dữ liệu; fetch('Link API')
    // Với fetch xử lý post thì chúng ta cần thông số bao gồm
    //  - Link API
    //  - Phương thức POST
    //  - body data
    if((tensanpham.trim()=="") || (isNaN(giatien))){
        const mess = document.getElementById("mess");
        mess.innerHTML = 'Tên sản phẩm không được bỏ trống giá tiền phải là số';
    }
    else{
        const data = {
            "name": tensanpham,
            "image": anhsanpham,
            "cat_id": danhmuc,
            "price": giatien
        };
        fetch('http://localhost:3000/products', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        alert('Thêm sản phẩm thành công');
    }
}

const rederPrduct = async () => {
    // Xác định vị trí muốn hiển thị sản phẩm => trong trường hợp này là tbody
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; //Loại bỏ các thẻ html bên trong tbody
    /*
    Cấu trúc của thẻ bên trong tbody
    <tbody>
        <tr>
            <td></td>
            .....
            <td></td>
        </tr>
    </tbody>
    */
//    Sử dụng fetch phương thức GET để lấy dữ liệu từ trong data
    const response = await fetch('http://localhost:3000/products');
    const product = await response.json();
    // Duyệt mảng để đổ dữ liệu theo câu trúc table vào tbody;
    // Dùng for, dùng map hoặc forEach để duyệt mảng
    product.map((value, key) => {
        // Khởi tạo thẻ tr
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${key+1}</td>
            <td>${value.name}</td>
            <td><img width="60" src = "${value.image}"/></td>
            <td>${value.cat_id}</td>
            <td>${value.price}</td>
            <td><a href="products-edit.html?id=${value.id}">Sửa</a> <button onclick="delProduct('${value.id}')">Xóa</button></td>
        `;
        // Đổ tr vào tbody
        tbody.appendChild(tr);
    })
}
rederPrduct()

const delProduct = (pid) => {
    const conf = confirm('Bạn có thực sự muốn xóa san phẩm không?');
    if(conf) {
        // Sử dụng fetch phương thức DELETE để xóa sản phẩm và API của json-server phải có thêm id của sẩn phẩm
        fetch(`http://localhost:3000/products/${pid}`, {
            method: 'DELETE'
        });
        alert('Xóa sản phẩm thành công');
    }
}