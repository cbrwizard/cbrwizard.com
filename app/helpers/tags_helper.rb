#
# Helps display tags in a wicked way
module TagsHelper
  ##
  # Renders tags of a certain article
  # @param record [Article]
  # @param number [Integer] amount of tags to display
  def show_article_tags(record, number)
    record.tag_list.take(number).map do |tag|
      link_to('#' + tag, articles_path(tag: tag), class: 'tag-list__tag')
    end.join(', ').html_safe
  end
end
