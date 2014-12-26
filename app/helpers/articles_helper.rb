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
end
