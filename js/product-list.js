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
EmployeeList.prototype.updatePD = function (empl) {
  var index = this.findIndexPD(empl.id);
  if (index !== -1) {
    this.arr[index] = empl;
  }
};
