class Airport {

  planes = [];

  land(plane) {
    planes.push(plane);
  };

}

describe('Plane',function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });
  it('can land at an airport', function(){
    expect(plane.land).not.toBeUndefined()
  });
});