class MessagesController < ApplicationController
  before_action do
    @conversation = Conversation.find(params[:conversation_id])
  end

  def index
    @messages = @conversation.messages
    if @messages.length > 10
      @over_ten = true
      @messages = @messages[-10..-1]
    end
    if params[:m]
      @over_ten = false
      @messages = @conversation.messages
    end
    if @messages.last
      @messages.last.read = true if @messages.last.user_id != current_user.id
    end
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
    params.permit(:body, :user_id)
  end
end
