class CreateRoutes < ActiveRecord::Migration[6.0]
  def change
    create_table :routes do |t|
      t.integer :trip_id
      t.integer :route_id
      t.timestamps
    end
  end
end
