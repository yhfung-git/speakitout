class PostsController < ApplicationController
  before_action :find_post, only: %i[show edit update destroy]

  def show
  end

  def new
    @post = Post.new
  end

  def index
    @posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user
    if @post.save
      redirect_to post_path(@post)
      flash[:notice] = "Your post has been saved. Keep being positive"
    end
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @post.update(post_params)
      redirect_to post_path(@post)
      flash[:notice] = "Your post has been updated. Keep enjoying your day"
    else
      render 'edit'
    end
  end

  def destroy
    @post.destroy
    flash[:notice] = "Your post has been deleted. If needed, post a new one. Have a nice day"
    redirect_to posts_path
  end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
