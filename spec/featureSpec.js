'use strict';

describe ('Feature test:', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe ("land", function() {

    it ("lands a plane", function() {
      plane.land(airport)
      expect(airport.planes()).toEqual([])
    });

  });

});
