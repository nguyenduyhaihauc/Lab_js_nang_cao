// Lấy id sản phẩm từ URL
const getInforProduct = async () => {
    const param = new URLSearchParams(location.search);
    const productid = param.get('id');
    // Sử dụ fetch phương thức GET để lấy dữ liệu sản phẩm từ id sản phẩm
    const response = await fetch(`http://localhost:3000/products/${productid}`);
    const product = await response.json();
    console.log(product);
    // Đổ dữ liệu sản phẩm vào ô input 
    document.querySelector('input[name="id"]').value = product.id; //Đổ id vào input id
    document.querySelector('input[name="tensanpham"]').value = product.name; //Đổ tên sản phẩm vào input tên sản phẩm
    document.querySelector('input[name="anhsanpham"]').value = product.image; //Đổ ảnh sản phẩm vào input ảnh sản phẩm
    document.querySelector('select[name="danhmuc"]').value = product.cat_id; //Đổ danh mục vào select danh mục
    document.querySelector('input[name="giatien"]').value = product.price; //Đổ giá tiền vào input giá tiền
}
getInforProduct();
const updateProduct = () => {
    event.preventDefault(); //Ngăn trình duyệt chuyển hướng
    // Lấy dữ liệu từ form
    const productid = document.querySelector('input[name="id"]').value; //Lấy id sản phẩm từ ô input id sản phẩm
    const tensanpham = document.querySelector('input[name="tensanpham"]').value; //Lấy tên sản phẩm từ ô input tên sản phẩm
    const anhsanpham = document.querySelector('input[name="anhsanpham"]').value; //Lấy ảnh sản phẩm từ ô input ảnh sản phẩm
    const danhmuc = document.querySelector('select[name="danhmuc"]').value; //Lấy danh mục sản phẩm từ select danh mục sản phẩm
    const giatien = document.querySelector('input[name="giatien"]').value; //Lấy giá tiền từ ô input giá tiền
    // Sử dụng fetch phuwong thức PUT để caapj nhaatj duwx lieeuj
    const data = {
        "name": tensanpham,
        "image": anhsanpham,
        "cat_id": danhmuc,
        "price": giatien
    };
    fetch('http://localhost:3000/products/'+productid, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
    alert('Cập nhật sản phẩm thành công');
}