class AddFeelingToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :feeling, :string
  end
end
