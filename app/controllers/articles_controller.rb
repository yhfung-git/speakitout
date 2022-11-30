class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :set_article, only: %i[show edit update destroy]

  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    @article.user = current_user
    if @article.save
      redirect_to article_path(@article)
    else
      render "new", status: :unproccessable_entity
    end
  end

  def edit
  end

  def update
    if @article.update(article_params)
      redirect_to article_path(@article)
    else
      render "edit", status: :unproccessable_entity
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def destroy
    @article.destroy
    redirect_to articles_path, status: :see_other
  end

  # private

  def article_params
    params.require(:article).permit(:title, :message, :url)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
