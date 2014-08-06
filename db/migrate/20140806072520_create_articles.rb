class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.text :text, null: false, default: ""
    end
  end
end
