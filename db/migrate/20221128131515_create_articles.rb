class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :url
      t.text :message
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
