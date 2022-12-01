class RepliesController < ApplicationController
  before_action :set_reply, only: %i[show edit update destroy]

  def new
    @post = Post.find(params[:post_id])
    @reply = Reply.new
  end

  def create
    @reply = Reply.new(reply_params)
    @reply.user_id = current_user.id
    @reply.post_id = params[:post_id]
    if @reply.save
      redirect_to post_path(@reply.post)
    else
      render :new
    end
  end

  private

  def set_reply
    @reply = Reply.find(params[:id])
  end

  def reply_params
    params.require(:reply).permit(:content)
  end
end
