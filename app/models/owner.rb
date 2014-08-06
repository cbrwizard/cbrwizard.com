# == Schema Information
#
# Table name: owners
#
#  id           :integer          not null, primary key
#  working_on   :string(255)      default("")
#  researching  :string(255)      default("")
#  current_goal :string(255)      default("")
#

class Owner < ActiveRecord::Base
  include Singleton


end
