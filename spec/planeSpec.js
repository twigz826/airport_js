describe('Plane', function() {
  
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("can land a plane at an airport", function(){
    expect(plane.land).not.toBeUndefined()
  });

});