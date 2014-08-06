# == Schema Information
#
# Table name: articles
#
#  id   :integer          not null, primary key
#  text :text             default(""), not null
#

class Article < ActiveRecord::Base
  acts_as_taggable

end
