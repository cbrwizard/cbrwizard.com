# Controller for requests not associated with models
class PagesController < ApplicationController

  def index
    @last_articles = Article.last(4)
    @random_project = Project.random_one
    @onwer = Owner.first
  end

end
