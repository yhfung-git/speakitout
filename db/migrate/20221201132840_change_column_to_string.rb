class ChangeColumnToString < ActiveRecord::Migration[7.0]
  def change
    change_column :posts, :private, :string
  end
end
