class PostsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :find_post, only: %i[show edit update destroy]

  def show
    @replies = Reply.all.where(post_id: @post.id)
    @reply = Reply.new
  end

  def index
    @post = Post.new
    posts = Post.where(private: false).sort
    raise
    @posts = posts.paginate(page: params[:page], per_page: 5)
    if params[:query].present?
      @posts = @posts.search_by_title_and_content(params[:query])
    else
      @posts = posts.paginate(page: params[:page], per_page: 5)
    end
  end

  def create
    @post = Post.new(post_params)
    # @post.title = post_params[:title]
    # @post.content = post_params[:content]
    # @post.private = true if post_params[:private] == "1"
    @post.user = current_user
    if @post.save
      flash[:notice] = "Your post has been created. Keep being positive"
      redirect_to post_path(@post)
    else
      render 'new', status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    flash[:notice] = "Your post has been successfully updated."
    @post.update(post_params)
    redirect_to post_path(@post)
  end

  def destroy
    @post.destroy
    flash[:notice] = "Your post has been successfully deleted."
    redirect_to posts_path
  end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content, :private, :category)
  end
end
