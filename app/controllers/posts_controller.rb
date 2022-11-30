class PostsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :find_post, only: %i[show edit update destroy]

  def show
  end

  def new
    @post = Post.new
  end

  def index
    @posts = Post.all
    @posts = Post.paginate(page: params[:page], per_page: 5)
    if params[:query].present?
      @posts = @posts.search_by_title_and_content(params[:query])
    else
      @posts = Post.all
      @posts = Post.paginate(page: params[:page], per_page: 5)
    end
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user
    if @post.save
      redirect_to post_path(@post)
    else
      render 'new', status: :unproccessable_entity
    end
  end

  def edit
  end

  def update
    if @post.update(post_params)
      redirect_to post_path(@post)
    else
      render 'edit', status: :unproccessable_entity
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_path, status: :see_other
  end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
