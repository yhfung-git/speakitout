class ConversationsController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @conversation = Conversation.new
  end

  def create
    if Conversation.between(params[:sender_id], params[:recipient_id]).present?
      @conversation = Conversation.between(params[:sender_id], params[:recipient_id]).first
    else
      @conversation = Conversation.create!(conversation_params)
    end
    redirect_to conversation_messages_path(@conversation)
  end

  def mark_as_read
    @conversation.where(read_parmas).first.messages.update_all(read: true)
  end

  private

  def conversation_params
    params.permit(:sender_id, :recipient_id)
  end

  def read_params
    params.permit(:id)
  end
end
