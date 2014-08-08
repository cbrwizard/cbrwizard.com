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
end
