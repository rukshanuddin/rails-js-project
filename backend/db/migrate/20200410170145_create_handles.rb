class CreateHandles < ActiveRecord::Migration[6.0]
  def change
    create_table :handles do |t|
      t.string :name
      t.timestamps
    end
  end
end
