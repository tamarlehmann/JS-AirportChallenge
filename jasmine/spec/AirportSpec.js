describe("Airport", function(){

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('has a capacity of 20', function(){
    expect(airport.capacity()).toEqual(20);
  });

  describe("Under normal conditions", function(){
    it('can clear planes for landing', function(){
      airport.clearLanding(plane)
      expect(airport.planes()).toContain(plane);
    });

    it('confirms landing', function(){
      expect(airport.clearLanding(plane)).toEqual('The plane has landed')
    });

    it('can clear planes for take-off', function(){
      airport.clearLanding(plane)
      airport.clearTakeOff(plane)
      expect(airport.planes()).toEqual([]);
    });

    it('confirms take-off', function(){
      airport.clearLanding(plane)
      airport.clearTakeOff(plane)
      expect(airport.clearTakeOff()).toEqual('The plane has taken off')
    });
  });

  it('throw an error if trying to land in a full airport', function(){
    for(var i=0; i < airport.capacity(); i++){
      airport.clearLanding(plane)
    };
    expect( function(){plane.land(airport)}).toThrow('The airport is full')
  });

});
