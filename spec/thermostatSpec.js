describe("A thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  it("Should start at 20 degree", function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it("Should be in powersaving mode by default", function(){
    expect(thermostat.isPowerSaving()).toBe(true);
  })

  it("Sets powersaving to false", function(){
    thermostat.powerSavingOff();
    expect(thermostat.isPowerSaving()).toBe(false);
  })

  it("Sets powersaving to true", function(){
    thermostat.powerSavingOff();
    thermostat.powerSavingOn();
    expect(thermostat.isPowerSaving()).toBe(true);
  })

  it("Can increase the temperature", function(){
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  });

  it("Can decrease the temperature", function(){
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  });

  it("Cannot decrease the temperature futher than 10", function(){
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
