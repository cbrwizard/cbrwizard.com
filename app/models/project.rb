# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  subtitle     :string(255)
#  description  :text
#  release_date :datetime
#  website      :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#

class Project < ActiveRecord::Base
  acts_as_taggable
  acts_as_taggable_on :categories

  validates :name,
    presence: true,
    length: {
      minimum: 5
    }

  validates :subtitle,
    presence: true,
    length: {
      minimum: 5
    }

  validates :description,
    presence: true,
    length: {
      minimum: 5
    }

  validates :website,
    presence: true,
    :format => URI::regexp(%w(http https)),
    length: {
      minimum: 5
    }

  # Gets a random project
  # @note is used on index
  scope :random_one, -> {offset(rand(self.count)).first}
end
