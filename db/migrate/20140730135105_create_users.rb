class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :nick
      t.string :name
      t.string :surname
      t.string :dirthday
      t.string :datetime

      t.timestamps
    end
  end
end
