describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

      var flatten = function(toFlatten) {
        var isArray = Object.prototype.toString.call(toFlatten) === '[object Array]';
    
        if (isArray && toFlatten.length > 0) {
          var a = toFlatten[0];
          var b = toFlatten.slice(1);
    
          return (flatten(a).concat(flatten(b))).sort();
        } else {
          return ([].concat(toFlatten)).sort();
        }
      };
    
    arr = flatten(arr);

    expect(arr).toEqual(expected);
  });
});