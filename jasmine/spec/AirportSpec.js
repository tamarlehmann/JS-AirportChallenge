describe("Airport", function(){

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane'
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

    it('can clear planes for take-off', function(){
      airport.clearLanding(plane)
      airport.clearTakeOff(plane)
      expect(airport.planes()).toEqual([]);
    });
  });

  // it('confirms take-off', function(){
  //   airport.clearLanding(plane)
  //   airport.clearTakeOff(plane)
  //   expect(airport.confirmTakeOff()).toEqual('The plane has taken off')
  // });

});
