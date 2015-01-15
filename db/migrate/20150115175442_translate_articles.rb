class TranslateArticles < ActiveRecord::Migration
  def up
    Article.create_translation_table!(
      text: { type: :text, null: false, default: '' },
      title: { type: :string, null: false, default: '' },
      feeling: { type: :string, default: '' }
    )
  end

  def down
    Article.drop_translation_table!
  end
end
