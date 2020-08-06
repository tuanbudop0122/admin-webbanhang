var Validation = function () {
  this.checkEmpty = function (input, messege, spanId) {
    if (input.trim() === "") {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = messege;
      getEle(spanId).style.fontStyle = "italic";
      getEle(spanId).style.fontSize = "15px";
      getEle(spanId).style.color = "red";
      return false;
    } else {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
  };
  this.checkLength = function (input, messege, spanId, min, max) {
    if (input.length > min && input.length < max) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = messege;
      getEle(spanId).style.display = "block";
      return false;
    }
  };
  this.checkNumber = function (input, mess, spanId) {
    var numbers = /^[0-9]+$/;
    if (input.match(numbers)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      return false;
    }
  };
  this.checkEmail = function (input, mess, spanId) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(mailformat)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      return false;
    }
  };
  this.checkPosition = function (id, mess, spanId) {
    if (getEle(id).selectedIndex !== 0) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      return false;
    }
  };
  this.checkCodeId = function (input, mess, spanId, arrEmp) {
    /**
     * 1.Duyệt mảng arrEmp
     * 2.Kiểm tra input(id) có trùng với id tồn tại trong arrEmp không
     * 3.Nếu trùng =>return false
     * 4.Nếu ko trùng =>return true
     */

    // for (var i = 0; i < arrEmp.lenght; i++) {
    //   if (arrEmp[i].id === input) {
    //     getEle(spanId).innerHTML = mess;
    //     getEle(spanId).style.display = "block";
    //     return false;
    //   }
    // }
    // getEle(spanId).innerHTML = "";
    // getEle(spanId).style.display = "none";
    // return true;

    //khi dùng forEach ko cho return true hay false trong vòng lặp
    var isBoolean = true;
    arrEmp.forEach(function (item, index) {
      if (item.id === input) {
        isBoolean = false;
      }
    });
    if (isBoolean) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      getEle(spanId).style.color = "red";
      return false;
    }
  };
};
// var getEle = function (id) {
//   return document.getElementById(id);
// };
