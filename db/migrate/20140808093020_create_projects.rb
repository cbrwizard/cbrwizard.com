class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :subtitle
      t.text :description
      t.datetime :release_date
      t.string :website

      t.timestamps
    end
  end
end
