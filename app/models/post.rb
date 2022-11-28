class Post < ApplicationRecord
  skip_before_action :authenticate_user!, only: :index

  belongs_to :user
  has_many :replies, dependent: :destroy

  validates :title, presence: true
  validates :content, presence: true, length: { minimum: 10 }
end
