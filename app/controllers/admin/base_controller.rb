# Contains methods common for all admin controllers
# @note any admin controller must inherit from it
class Admin::BaseController < ApplicationController

  layout "admin"
end