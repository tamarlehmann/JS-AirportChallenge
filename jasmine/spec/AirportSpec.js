describe("Airport", function(){

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['stormy']);
    airport = new Airport(weather);
    weather.stormy.and.returnValue(false);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
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

  describe("Under stormy conditions", function() {
    beforeEach(function() {
      // debugger;
          // spyOn(Math, 'random').and.returnValue(0.7);
      // weather.stormy.and.returnValue(true);
    });

    it('throws an error when trying to land plane', function(){
      weather.stormy.and.returnValue(true)
      expect( function(){airport.clearLanding(plane)}).toThrow('Cannot land in stormy weather')
    });

    it('throws an error when trying to take off plane', function(){
      weather.stormy.and.returnValue(false)
      airport.clearLanding(plane)
      weather.stormy.and.returnValue(true)
      expect( function(){airport.clearTakeOff(plane)}).toThrow('Cannot take off in stormy weather')
    });

  });

  describe("Capacity", function() {
    it('has a capacity of 20', function(){
      expect(airport.capacity()).toEqual(20);
    });

    it('can set capacity of the airport', function(){
      airport.setCapacity(5)
      expect(airport.capacity()).toEqual(5);
    });

    it('throw an error if trying to land in a full airport', function(){
      for(var i=0; i < airport.capacity(); i++){
        airport.clearLanding(plane)
      };
      expect( function(){airport.clearLanding(plane)}).toThrow('The airport is full')
    });
  });
});
