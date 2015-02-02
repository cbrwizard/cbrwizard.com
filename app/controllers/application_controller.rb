##
# Common controller
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # before_filter :turn_on_monitoring

  ##
  # Turns on monitoring on production
  #
  # @note must be implemented when admin is present
  # def turn_on_monitoring
  #   if current_user.is_admin?
  #     Rack::MiniProfiler.authorize_request
  #   end
  # end
end
