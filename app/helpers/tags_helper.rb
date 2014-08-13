# Helps display tags in a wicked way
module TagsHelper

  # Renders tags of a certain article
  # @param record [Article]
  def show_article_tags(record, number)
    record.tag_list.take(number).map do |tag|
      link_to("#" + tag, articles_path(tag: tag))
    end.join(", ").html_safe
  end

  # Renders tags of a certain project
  # @param record [Project]
  def show_project_tags(record, number)
    record.tag_list.take(number).map do |tag|
      link_to("#" + tag, projects_path(tag: tag))
    end.join(", ").html_safe
  end

end