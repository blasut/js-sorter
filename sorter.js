Sorter = function () {
//function Sorter() {

  this.sort = function(array, flag) {
    console.log(typeof array[0]);
    if(typeof array[0] == "number") {
      return this.sortIntegers(array, flag);
    }
    if(typeof array[0] == "string") {
      return this.sortStrings(array);
    }
  },

  this.sortIntegers = function(array, flag) {
    console.log("Flag", flag);
    if(flag === "DESC") {
      return this.sortIntegersDesc(array);
      console.log("descending");
    } else {
      console.log("ascending");
      return this.sortIntegersAsc(array);
    }
  },
  this.sortIntegersAsc = function(array) {
    sortedArray = array.sort(function(a,b) {
      return a-b;
    });
    return sortedArray;
  },

  this.sortIntegersDesc = function(array) {
    sortedArray = array.sort(function(a,b) {
      return b-a;
    });
    return sortedArray;
  },

  this.sortStrings = function(array) {
    sortedArray = array.sort(function(a,b) {
      var a = a.toLowerCase(),
          b = b.toLowerCase();
      if(a < b) { // ascending
        return -1;
      } else if(a > b) {  
        return 1;
      } else {
        return 0; // Default, no sorting
      }
    });
    return sortedArray;
  }
}
