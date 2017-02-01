describe("Weather", function() {

  beforeEach(function() {
    weather = new Weather();
  });

  it('can be stormy', function(){
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.stormy()).toBeTruthy()
  });

  it('can not be stormy', function(){
    spyOn(Math, 'random').and.returnValue(0.7);
    expect(weather.stormy()).toBeFalsy()
  });
});
