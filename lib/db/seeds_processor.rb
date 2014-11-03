# Includes methods used by seeds file
module Db::SeedsProcessor
  # Populates model by a hash
  # @note is used on seeds.rb
  # @param model_hash [Hash] contains certain model seed data
  # @example
  # populate_model_by_hash({ articles: [
  #   { title: "Programming, people and worlds", text: "Lorem ipsum dolor sit amet.", tag_list: "kek, lol, mega, rails" },
  #     { title: "Random thoughts", text: "Lorem ipsum dolor sit amet, consectetur.", tag_list: "kek, mega long tag, mega, rails" },
  #   ] })
  def populate_model_by_hash(model_hash)
    # Converts articles key to Article
    hash_name = model_hash.keys[0].to_s
    class_name = eval hash_name.camelize.singularize
    seed_records = model_hash.values.flatten

    # If number of already existing records is lower than number in seed array
    create_records(seed_records, class_name) if class_name.count < seed_records.size
  end


  private


  # Creates all records
  # @note is called in populate_model_by_hash
  # @param records [Array of ActiveRecord]
  # @param class_name [Class]
  def create_records(records, class_name)
    records.each do |record|
      # If a record can't be created because of duplicated validation ignore it
      begin
        class_name.create!(record)
      rescue ActiveRecord::RecordNotUnique
        next
      end
    end
  end
end
