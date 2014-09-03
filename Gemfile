source 'https://rubygems.org'

ruby '2.1.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.4'

gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
gem 'bootstrap-sass'
gem 'simple_form', '>= 3.1.0.rc1'
gem 'slim-rails'

# Automatically adds browser prefixes for css
gem 'autoprefixer-rails'

# For flash messages with bootstrap
gem "bootstrap_flash_messages", "~> 1.0.0"

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.1'

gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'yard'
end

group :development do
  # Better displays 500 errors
  gem "better_errors"
  # And shows console on their pages
  gem "binding_of_caller"

  # Automatically adds annotations to models
  gem "annotate"

  # Finds wrong db requests
  gem "bullet"

  # Automagically launches tests for changed files
  gem 'guard'
  gem 'guard-rspec', require: false
  # And updates gems when needed
  gem 'guard-bundler', require: false
end

group :test do
  # gem 'factory_girl_rails'

  # Rspec console formatting
  gem 'fuubar'

  # Features tests for Rspec
  gem 'capybara'

  # Webkit driver for js feature tests
  # $ brew install qt
  gem "capybara-webkit"
end

group :development, :test do
  # Test framework
  gem 'rspec-rails', '~> 3.0'
end

# Authorization
gem 'devise'

# Easy tags
gem 'acts-as-taggable-on'

# Easy local time rendering
gem 'local_time'

# Faster server
gem 'thin'

# Run this (it loads faster without gemfile):
# $ gem install zeus