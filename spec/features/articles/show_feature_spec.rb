describe 'Article page displays its main features to user', type: :feature do
  let!(:article) {create(:article)}

  before do
    visit article_path(article)
  end

  it 'show an article text' do
    expect(page).to have_content(article.text)
  end
end
