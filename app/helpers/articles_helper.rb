# Helps display article feelings
module ArticlesHelper

  # Displays article feelings
  # @note is called on article page
  # @note doesn't help with real ones
  # @param article [Single Active Record]
  # @return [String]
  def h_articles_feeling(article)
    article.feeling ? article.feeling : I18n.t("model.article.no_feelings")
  end


  # Displays sticky articles
  # @note is used on main sidebar
  # @note is used on h_articles_has_any_stickies?
  # @param number [Integer] number of articles to show
  # @return [Active Record Collection]
  def h_articles_stickies(number)
    Article.stickies(number)
  end


  # Determines whether there are any sticky articles
  # @note is used on main sidebar
  # @return [Boolean]
  def h_articles_any_stickies?
    h_articles_stickies(5).present?
  end
end
