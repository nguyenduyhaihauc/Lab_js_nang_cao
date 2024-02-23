// Them du lieu tu form
const addProduct = () => {
    event.preventDefault(); // Ngăn trình duyệt chuyển hướng
    // Lấy dữ liệu từ form
    const tensanpham = document.querySelector('input[name="tensanpham"]').value; //Lấy giá  trị từ ô input
    const anhsanpham = document.querySelector('input[name="anhsanpham"]').value;
    const danhmuc = document.querySelector('select[name="danhmuc"]').value;
    const giatien = document.querySelector('input[name="giatien"]').value;
    // console.log(tensanpham, anhsanpham, danhmuc, giatien);
    if ((tensanpham.trim()=="") || (isNaN(giatien))){
        const mess = document.getElementById("mess");
        mess.innerHTML = 'Tên sản phẩm không được trống và giá tiền phải là số';
    }
    else {
    const data = {
        "name":tensanpham,
        "image": anhsanpham,
        "cat_id":danhmuc,
        "price":giatien
    };
    fetch('http://localhost:3000/products',{
       method: 'POST', 
       body: JSON.stringify(data)
    });
    alert('Thêm sản phẩm thành công');
    }
    
}

// Hien thi san pham
const rederProduct = async () => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    const response = await fetch('http://localhost:3000/products');
    const product = await response.json();
    product.map((value, key) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${key+1}</td>
        <td>${value.name}</td>
        <td><img width="60" src = "${value.image}"/></td>
        <td>${value.cat_id}</td>
        <td>${value.price}</td>
        <td><a href="productsEdit.html?id=${value.id}">Sửa</a><button onclick="delProduct('${value.id}')">Xóa</button></td>
        `;
        tbody.appendChild(tr);
    })
    
}
rederProduct();
const delProduct = (pid) => {
    const conf = confirm('Bạn có thực sự muốn xóa sản phẩm này?');
    if(conf){
        fetch(`http://localhost:3000/products/${pid}`, {
            method: 'DELETE'
        });
        alert('Xóa sản phẩm thành công');
    }
}