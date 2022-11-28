class Article < ApplicationRecord
  belongs_to :user

  validates :title, :url, presence: true
  validates :message, presence: true, length: { minimum: 10 }
end
