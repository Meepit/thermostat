require 'sinatra/base'

class ThermostatAPI < Sinatra::Base
  get '/' do
    'Hello'
  end
end
