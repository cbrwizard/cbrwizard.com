# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#
##
# Article AKA post
class Article < ActiveRecord::Base
  acts_as_taggable

  translates :title, :text, :feeling

  validates :text,
            presence: true,
            length: {
              minimum: 5
            }

  validates :title,
            presence: true,
            length: {
              minimum: 5
            }
end
