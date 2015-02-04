source 'https://rubygems.org'

ruby '2.2.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2'

# For Mac this might be needed:
# gem install pg -v '0.17.1' ----with-pg-config=/Applications/ Postgres.app/Contents/Versions/9.3/bin/pg_config
gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails'
gem 'bootstrap-sass'

# Font icons
gem 'font-awesome-rails'

# gem 'simple_form', '~> 3.1.0rc2'
gem 'slim-rails'

# Adds angularjs to assets
gem 'angularjs-rails'
# Adds an ability to easily add any template to angular
gem 'angular-rails-templates'

# Automatically adds browser prefixes for css
gem 'autoprefixer-rails'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails'

# Needed for mac assets and stuff
gem 'therubyracer',  platforms: :ruby
# Use jquery as the JavaScript library
gem 'jquery-rails'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder'


group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'yard'
end

group :development do
  # Better displays 500 errors
  gem 'web-console'

  # Automatically adds annotations to models
  gem 'annotate'

  # Finds wrong db requests
  gem 'bullet'

  # Automagically launches tests for changed files
  gem 'guard'
  gem 'guard-rspec', require: false
  # And updates gems when needed
  gem 'guard-bundler', require: false

  # Checks ruby code grammar
  gem 'rubocop', require: false
  # With rspec
  gem 'rubocop-rspec'
  # With guard
  gem 'guard-rubocop'
  # With brakeman (security scans)
  gem 'guard-brakeman'

  # For guard and other notifications in native mac
  gem 'terminal-notifier-guard'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :test do
  # Rspec console formatting
  gem 'fuubar'

  # Features tests for Rspec
  gem 'capybara'

  # Webkit driver for js feature tests
  # $ brew install qt
  gem 'capybara-webkit'

  # To open test pages when save_and_open_page method is called
  gem 'launchy'

  # Enables screenshots creation during tests
  gem 'capybara-screenshot'

  # To test API
  gem 'json-schema'

  # Auto cleans test db after each test run
  gem 'database_cleaner'

  # Shows code test coverage
  gem 'simplecov', require: false
end

group :development, :test do
  # Test framework
  gem 'rspec-rails'

  # For active record imitation in tests
  gem 'factory_girl_rails'
end

# Easy tags
gem 'acts-as-taggable-on'

# Faster server
gem 'thin'

# Adds rails routes to assets
gem 'js-routes'

# Locales for db fields
gem 'globalize', git: 'https://github.com/globalize/globalize.git', branch: 'rails-4-2-upgrade'

# JS locales from Rails
gem 'i18n-js', '>= 3.0.0.rc8 '

# Handles multiple processes
gem 'foreman'

# Displays performance
gem 'rack-mini-profiler'

# ES 6 support
gem 'sprockets-traceur'
