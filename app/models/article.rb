# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  text       :text             default(""), not null
#  title      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Article < ActiveRecord::Base
  acts_as_taggable
  acts_as_taggable_on :categories

  scope :popular_categories, -> (number) {category_counts.order(:taggings_count).reverse_order.limit(number)}

  scope :most_popular_category_amount, -> {category_counts.pluck(:taggings_count).max}

end