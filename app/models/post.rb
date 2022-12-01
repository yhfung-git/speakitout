class Post < ApplicationRecord
  include PgSearch::Model

  belongs_to :user
  has_many :replies, dependent: :destroy

  validates :title, presence: true
  validates :content, presence: true

  pg_search_scope :search_by_title_and_content,
                  against: %i[title content],
                  using: {
                    tsearch: { prefix: true }
                  }
end
