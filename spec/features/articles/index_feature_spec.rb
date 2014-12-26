describe 'Articles page displays its main features to user', type: :feature do

  let!(:articles) {create_list(:article, 10)}

  before do
    visit articles_path
  end

  it 'shows articles' do
    expect(page).to have_content(articles.first.text[0..10])
  end
end