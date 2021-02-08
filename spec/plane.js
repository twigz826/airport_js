describe('Plane', function() {
  
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("Can land a plane at an airport", function(){
    expect(plane.land).not.toBeUndefined()
  });

});