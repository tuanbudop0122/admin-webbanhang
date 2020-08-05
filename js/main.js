var proDuct = new ProductList();
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
    <button type="button" class="btn btn-primary">Sửa</button>
    <button type="button" class="btn btn-danger" onclick="deletePD(${list[i].id})">Xóa</button>
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
