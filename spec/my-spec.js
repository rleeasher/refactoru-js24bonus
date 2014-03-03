describe('map', function() {

  //testing identity
  it('should return copy of original list', function () {
    expect(map(["hat","coat","mittens"],function(a){
        return a;
      })
    ).toEqual(["hat","coat","mittens"]);
  });
  //test number multiply funcs
  it('should original times 2', function () {
  expect(map([1,2,3],function(a){
      return a*2;
    })
  ).toEqual([2,4,6]);
  });

  //should this fail?
  // it('should original times 2', function () {
  // expect(map([1,"hat",3],function(a){
  //     return a*2;
  //   })
  // ).toEqual([2,NaN,6]);
  // });
});

describe('filter', function() {
  it('should return copy of original list', function () {
    expect(filter(["hat","coat","mittens"],function(a){
        return a;
      })
    ).toEqual(["hat","coat","mittens"]);
  });

  it('should return hat in array', function () {
    expect(filter(["hat","coat","mittens"],function(a){
        return a==="hat";
      })
    ).toEqual(["hat"]);
  });

  it('should #s greater than 1', function () {
    expect(filter([1,2,3],function(a){
        return a>1;
      })
    ).toEqual([2,3]);
  });

});