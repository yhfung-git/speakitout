class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :set_article, only: %i[show edit update destroy]

  def index
    @articles = Article.all
    @articles = @articles.paginate(page: params[:page], per_page: 5)
    if params[:query].present?
      @articles = @articles.search_by_title_and_message(params[:query])
    else
      @articles = @articles.paginate(page: params[:page], per_page: 5)
    end
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    @article.user = current_user
    if @article.save
      flash[:notice] = "Your article has been successfully created."
      redirect_to article_path(@article)
    else
      render "new", status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @article.update(article_params)
      flash[:notice] = "Your article has been successfully updated."
      redirect_to article_path(@article)
    else
      render "edit", status: :unprocessable_entity
    end
  end

  def show
  end

  def destroy
    @article.destroy
    flash[:notice] = "Your article has been successfully deleted."
    redirect_to articles_path, status: :see_other
  end

  # private

  def article_params
    params.require(:article).permit(:title, :message, :url, :photo)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
