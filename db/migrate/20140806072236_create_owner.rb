class CreateOwner < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string :working_on, default: ""
      t.string :researching, default: ""
      t.string :current_goal, default: ""
    end
  end
end
