class Article < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :message, presence: true, length: { minimum: 10 }
end
