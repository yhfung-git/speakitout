class Message < ApplicationRecord
  belongs_to :user

  validates :content, length: { minumum: 1 }, presence: true
end
