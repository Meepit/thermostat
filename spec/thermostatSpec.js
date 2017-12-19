describe("A thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat()
  });


  it("should start at 20 degree", function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it("can increase the temperature with up", function(){
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  });

  it("can decrease the temperature with down", function(){
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  });

  it("cannot decrease the temperature futher than 10", function(){
    for(var i = 0; i < 10; i++){ thermostat.down() };
    expect(function(){thermostat.down()}).toThrowError("The lowest temperature is 10")
  });

  it("Should have a max temp of 25 if power saving mode is on", function(){
    for(var i = 0; i < 5; i++){ thermostat.up(); };
    expect(function(){
      thermostat.up()
    }).toThrowError("Max temperature is 25 when power saving is on");
  });
});
