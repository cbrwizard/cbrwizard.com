# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Note: The cmd option is now required due to the increasing number of ways
#       rspec may be run, below are examples of the most common uses.
#  * bundler: 'bundle exec rspec'
#  * bundler binstubs: 'bin/rspec'
#  * spring: 'bin/rsspec' (This will use spring if running and you have
#                          installed the spring binstubs per the docs)
#  * zeus: 'zeus rspec' (requires the server to be started separetly)
#  * 'just' rspec: 'rspec'
guard :rspec, cmd: 'zeus rspec' do
  watch(%r{^spec/.+_spec\.rb$})
  watch(%r{^lib/(.+)\.rb$})     { |m| "spec/lib/#{m[1]}_spec.rb" }

  # run the model specs related to the changed model
  watch(%r{^app/(.+)\.rb$})                           { |m| "spec/#{m[1]}_spec.rb" }

  # Controller changes
  watch(%r{^app/controllers/(.+)_(controller)\.rb$})  { |m| ["spec/#{m[2]}s/#{m[1]}_#{m[2]}_spec.rb", "spec/acceptance/#{m[1]}_spec.rb"] }

  watch('config/routes.rb')                           { "spec/controllers" }
  watch('app/controllers/application_controller.rb')  { "spec/controllers" }

  watch(%r{^spec/support/(.+)\.rb$})                  { "spec" }
  watch('spec/rails_helper.rb')                       { "spec" }
  watch('spec/spec_helper.rb')                        { "spec" }

  # Capybara features specs
  watch(%r{^app/views/(.+)/(.*)\.(.*)\.(erb|haml|slim)$})     { |m| "spec/features/#{m[1]}/#{m[2]}_feature_spec.rb" }
  watch(%r{^app/views/(.+)/_.*\.(erb|haml|slim)$})     { |m| "spec/features/#{m[1].partition('/').first}/#{m[1].partition('/').last}_feature_spec.rb" }
end

guard :bundler do
  # On gemfile update run bundle
  watch('Gemfile')
end
