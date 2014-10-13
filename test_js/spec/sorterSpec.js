describe("sorter", function() {
  beforeEach(function() {
    sorter = new Sorter();   
  });

  describe("should be able to sort integers", function() {
    it("in an array ASC" , function() {
      arrayToSort = [3,2,1,0];

      sortedArray = sorter.sort(arrayToSort);
      expect(sortedArray).toEqual([0,1,2,3]);
    });

    it("in an array DESC" , function() {
      arrayToSort = [0,1,2,3];

      sortedArray = sorter.sort(arrayToSort, "DESC");
      expect(sortedArray).toEqual([3,2,1,0]);
    });
  });
  
  describe("should be able to sort strings", function() {
    it("in an array ASC", function() {
      arrayToSort = ["c", "b", "a"];
      sortedArray = sorter.sort(arrayToSort);
      expect(sortedArray).toEqual(["a", "b", "c"]);
    });

    it("in an array DESC", function() {
    });
  });

});

