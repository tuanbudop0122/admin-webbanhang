var proDuct = new ProductList();
var Validation = new Validation();
function ProductList() {
  this.arr = [];
  this.addPD = function (pd) {
    this.arr.push(pd);
  };
}

const renderPD = function (list = proDuct.arr) {
  var htmlContent = "";
  for (var i = 0; i < list.length; i++) {
    htmlContent += `<tr>
		<td>${list[i].id}</td>
		<td>${list[i].name}</td>
    <td>
    <div>
    <img
    src="${list[i].image}"
    alt=""
  />
</div>
  </td>
    <td>${list[i].description}</td>
    <td>${list[i].price}</td>
    <td>${list[i].inventory}</td>
    <td>${list[i].rating}</td>
    <td>${list[i].type}</td>
    <td>
    <div class="btn-group"> <button type="button" class="btn btn-primary">Sửa</button>
    <button type="button" class="btn btn-danger" onclick="deletePD(${list[i].id})">Xóa</button></div>
   
  </td>
	</tr>`;
  }
  document.getElementById("tbodyPD").innerHTML = htmlContent;
};
renderPD();
function deletePD(id) {
  axios({
    method: "DELETE",
    url: "https://5f1d4b9f39d95a0016953dc8.mockapi.io/api/PRODUCTS/" + id,
  })
    .then(function (res) {
      console.log(res);
      fetchPD();
    })
    .catch(function (err) {
      console.log(err);
    });
}
const fetchPD = function () {
  axios({
    url: "https://5f1d4b9f39d95a0016953dc8.mockapi.io/api/PRODUCTS",
    method: "GET",
  })
    .then(function (res) {
      console.log(res);
      proDuct.arr = res.data;
      console.log(proDuct);
      renderPD();
    })
    .catch(function (err) {
      console.log(err);
    });
};
fetchPD();

////continous
var getEle = function (id) {
  return document.getElementById(id);
};
const addProduct = function () {
  //get value form DOM
  const idProduct = getEle("idProduct").value;
  const nameProduct = getEle("nameProduct").value;
  const idImage = getEle("idImage").value;
  const idPrice = getEle("idPrice").value;
  const idType = getEle("idType").value;
  const idRating = getEle("idRating").value;
  const idTonkho = getEle("idTonkho").value;
  const idMota = getEle("idMota").value;
  var isValid = true;
  isValid &=
    Validation.checkEmpty(idProduct, "Mã không được trống", "idthongbao") &&
    Validation.checkCodeId(idProduct, "Trùng mã ", "idthongbao", proDuct.arr);
  if (!isValid) return;
  //Tạo đối tượng mới
  var newProduct = new Product(
    idProduct,
    nameProduct,
    idImage,
    idMota,
    idPrice,
    idTonkho,
    idRating,
    idType
  );
  //Connnect axios and method post
  axios({
    url: "https://5f1d4b9f39d95a0016953dc8.mockapi.io/api/PRODUCTS",
    method: "POST",
    data: newProduct,
  })
    .then(function (ress) {
      fetchPD();
    })
    .catch(function (err) {
      console.log(...err);
    });
};
