function ProductList() {
  this.arr = [];
  this.addPD = function (pd) {
    this.arr.push(pd);
  };

  this.findIndexPD = function (id) {
    var index = -1;

    index = this.arr.findIndex(function (item) {
      return +item.id === +id;
    });
    return index;
  };

  this.deletePD = function (id) {
    var index = this.findIndexPD(id);
    if (+index !== -1) {
      this.arr.splice(+index, 1);
    }
  };

  this.getPDById = function (id) {
    var product;

    product = this.arr.find(function (item) {
      return +item.id === +id;
    });
    return product;
  };
}
ProductList.prototype.updatePD = function (empl) {
  var index = this.findIndexPD(empl.id);
  if (index !== -1) {
    this.arr[index] = empl;
  }
};
