# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'
require 'twitter'

run Rails.application

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "B0A8fbABdowhtpx1qWQwMSRWE"
  config.consumer_secret     = "ODBbef3hOaHm0Fcu4LQRVL5J6n0wiPh5GPDy5KqpQlY4v1q4k2"
  config.access_token        = "1175424370812080130-o5t3zEDtFu4YQxYRJ6uUaVxlyBD2xJ"
  config.access_token_secret = "65tfSZdIwVQKfnABIyHOcE8C4SbRYPUL04s6X4ZCexYHe"
end