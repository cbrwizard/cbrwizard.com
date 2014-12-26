# Controller for requests not associated with models
class PagesController < ApplicationController
  def index
    @last_articles = Article.last(5)
  end

  def about

  end
end
