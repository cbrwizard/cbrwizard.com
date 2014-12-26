# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  text       :text             default(""), not null
#  title      :string(255)
#  created_at :datetime
#  updated_at :datetime
#  feeling    :string(255)
#

class Article < ActiveRecord::Base
  acts_as_taggable
  acts_as_taggable_on :categories

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

  # Sorts categories by their popularity
  # @note is used on main sidebar
  # @param number [Integer] amount of categories to show
  # @todo move it to a Tag model or something like that
  scope :popular_categories, -> (number) {category_counts.order(:taggings_count).reverse_order.limit(number)}

  # Gets most used category uses number
  # @note is used on sidebar
  scope :most_popular_category_amount, -> {category_counts.pluck(:taggings_count).max}
end
