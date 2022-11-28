class AddColumnToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :saved, :string, array: true, default: []
    add_column :users, :friend, :string, array: true, default: []
  end
end
