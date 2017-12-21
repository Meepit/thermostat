var thermostat = new Thermostat();
$(document).ready(function(){
  updateTempText();
  updatePowerSavingText();
  updateUsageText();

  function updateTempText(){
    $("#tempText").text(thermostat.getCurrentTemperature());
  }

  function updatePowerSavingText(){
    var text = thermostat.isPowerSaving() ? "On" : "Off"
    $("#powerSavingMode").text(text)
  }

  function updateUsageText(){
    $("#usageText").text(thermostat.reportUsage());
  }

  $("#tempUp").click(function(){
    thermostat.up();
    updateTempText();
    updateUsageText();
  });

  $("#tempDown").click(function(){
    thermostat.down();
    updateTempText();
    updateUsageText();
  });

  $("#powerSaveOff").click(function(){
    thermostat.powerSavingOff();
    updatePowerSavingText();
  });

  $("#powerSaveOn").click(function(){
    thermostat.powerSavingOn();
    updatePowerSavingText();
    updateTempText();
  });

  $("#resetTemp").click(function(){
    thermostat.reset();
    updateTempText();
    updateUsageText();
  });
})
