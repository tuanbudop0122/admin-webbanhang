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
