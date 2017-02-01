describe("Planes", function() {

  beforeEach(function() {
    plane1 = new Plane(1);
    plane2 = new Plane(2);
    airport = 'airport'
  });

  it('can land at an airport', function() {
    plane1.land(airport);
    expect(plane1._flying).toEqual(false);
  });

  it('can take off from an airport', function() {
    plane1.takeOff(airport);
    expect(plane1._flying).toEqual(true);
  });

  it('throw an error when trying to land and already landed', function () {
    plane1.land(airport);
    expect(function(){ plane1.land(airport)} ).toThrow('The plane has already landed')
  });

  // it('raises an error if already flying', function() {
  //   plane2.takeOff(airport)
  //   expect(function(){ plane2.takeOff(airport)} ).toThrow('The plane is already flying')
  // });

});
