# == Schema Information
#
# Table name: articles
#
#  id    :integer          not null, primary key
#  text  :text             default(""), not null
#  title :string(255)
#

class Article < ActiveRecord::Base
  acts_as_taggable

end
