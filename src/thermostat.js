'use strict';

function Thermostat (){
  this.temperature = 20;
  this.powerSaving = true;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_POWERSAVING = 25;
  this.MAX_TEMP = 32;
};

Thermostat.prototype.isPowerSaving = function(){
  return this.powerSaving;
};

Thermostat.prototype.powerSavingOn = function(){
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
}

Thermostat.prototype.up = function(){
  if(this.powerSaving && this.temperature >= this.MAX_TEMP_POWERSAVING){throw Error("Max temperature is 25 when power saving is on")};
  if(!this.powerSaving && this.temperature >= this.MAX_TEMP){throw Error("Max temperature is 32")}
  this.temperature ++;
};

Thermostat.prototype.down = function(){
  if (this.temperature === this.MIN_TEMP){ throw Error("The lowest temperature is 10") }
  this.temperature --;
};

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};

Thermostat.prototype.reportUsage = function(){
  if(this.temperature < 18){ return "low-usage"; };
  if(this.temperature < 25){ return "medium-usage"; };
  return "high-usage"
};
