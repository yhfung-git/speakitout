class Article < ApplicationRecord
  include PgSearch::Model
  belongs_to :user
  has_one_attached :photo

  validates :title, presence: true
  validates :message, presence: true, length: { minimum: 120 }

  pg_search_scope :search_by_title_and_message,
  against: [ :title, :message ],
  using: {
    tsearch: { prefix: true }
  }
end
