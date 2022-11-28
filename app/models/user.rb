class User < ApplicationRecord
  has_many :articles
  has_many :messages
  has_many :replies
  has_many :posts

  validates :first_name, :last_name, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
