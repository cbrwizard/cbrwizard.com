# == Schema Information
#
# Table name: owners
#
#  id           :integer          not null, primary key
#  working_on   :string(255)      default("")
#  researching  :string(255)      default("")
#  current_goal :string(255)      default("")
#  created_at   :datetime
#  updated_at   :datetime
#

class Owner < ActiveRecord::Base

  validates :working_on,
    presence: true,
    length: {
      minimum: 5
    }

  validates :researching,
    presence: true,
    length: {
      minimum: 5
    }

  validates :current_goal,
    presence: true,
    length: {
      minimum: 5
    }

end
