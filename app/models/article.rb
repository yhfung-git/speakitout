class Article < ApplicationRecord
  belongs_to :user
  has_one_attached :photo

  validates :title, presence: true
  validates :message, presence: true, length: { minimum: 120 }
end
