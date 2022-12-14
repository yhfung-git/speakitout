class MessagesController < ApplicationController
  before_action do
    @conversation = Conversation.find(params[:conversation_id])
  end

  def index
    @messages = @conversation.messages.sort
    @message = @conversation.messages.new
    respond_to do |format|
      format.html
      format.json { render json: @messages }
    end
  end

  def new
    @message = @conversation.messages.new
  end

  def create
    @message = @conversation.messages.new(message_params)
    @message.save
  end

  def message_params
    params.permit(:body, :user_id, :conversation_id)
  end
end
