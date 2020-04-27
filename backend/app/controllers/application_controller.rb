class ApplicationController < ActionController::API
  CLIENT = Twitter::REST::Client.new do |config|
    config.consumer_key        = ENV['KEY']
    config.consumer_secret     = ENV['SECRET']
    config.access_token        = ENV['ACCESS_TOKEN']
    config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']
  end
end
