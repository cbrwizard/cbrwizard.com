#
# Helps display articles
module ArticlesHelper
  ##
  # Displays article feelings
  # @note is called on article page
  # @note doesn't help with real ones
  # @param article [Article]
  # @return [String]
  def h_articles_feeling(article)
    article.feeling ? article.feeling : I18n.t('model.article.no_feelings')
  end
end
