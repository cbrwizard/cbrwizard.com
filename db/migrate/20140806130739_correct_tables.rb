class CorrectTables < ActiveRecord::Migration
  def change
    remove_column :users, :dirthday
    add_column :users, :birthday, :datetime

    remove_column :users, :datetime
  end
end
