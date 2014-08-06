# Helps display tags in a wicked way
module TagsHelper

  # Renders tags of a certain record
  # @param record [Article]
  def show_tags(record, number)
    record.tag_list.take(number).map do |tag|
      link_to("#" + tag, articles_path(tag: tag))
    end.join(", ").html_safe
  end

end