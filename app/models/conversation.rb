# reply.rb
# Author: dhalley <dhalley@mail.com>
# Created: 2022-12-05 11:43:29
# Updated: 2022-12-05 11:49:31 by dhalley

class Conversation < ApplicationRecord
  belongs_to :sender, :foreign_key => :sender_id, class_name: 'User'
  belongs_to :recipient, :foreign_key => :recipient_id, class_name: 'User'

  has_many :messages, dependent: :destroy
  validates_uniqueness_of :sender_id, :scope => :recipient_id

  scope :between, -> (sender_id, recipient_id) do
    where("(conversations.sender_id = ? AND conversations.recipient_id =?)
          OR (conversations.sender_id = ? AND conversations.recipient_id =?)", sender_id,recipient_id, recipient_id, sender_id)
  end
end
