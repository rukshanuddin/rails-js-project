require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
require "rails/test_unit/railtie"
require 'twitter'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "B0A8fbABdowhtpx1qWQwMSRWE"
      config.consumer_secret     = "ODBbef3hOaHm0Fcu4LQRVL5J6n0wiPh5GPDy5KqpQlY4v1q4k2"
      config.access_token        = "1175424370812080130-o5t3zEDtFu4YQxYRJ6uUaVxlyBD2xJ"
      config.access_token_secret = "65tfSZdIwVQKfnABIyHOcE8C4SbRYPUL04s6X4ZCexYHe"
    end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
  end
end
