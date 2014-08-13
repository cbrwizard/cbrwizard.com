# Helps display tags in a wicked way
module TagsHelper

  # Renders tags of a certain article
  # @param record [Article]
  # @param number [Integer] amount of tags to display
  def show_article_tags(record, number)
    record.tag_list.take(number).map do |tag|
      link_to("#" + tag, articles_path(tag: tag))
    end.join(", ").html_safe
  end

  # Renders tags of a certain project
  # @param record [Project]
  # @param number [Integer] amount of tags to display
  def show_project_tags(record, number)
    record.tag_list.take(number).map do |tag|
      link_to("#" + tag, projects_path(tag: tag))
    end.join(", ").html_safe
  end

  # Renders most popular categories
  # @param number [Integer] amount of tags to display
  def popular_categories(number)
    Article.popular_categories(number)
  end

  # Returns largest popularity of category
  # @return [Integer]
  def most_popular_category_amount
    Article.most_popular_category_amount
  end

end