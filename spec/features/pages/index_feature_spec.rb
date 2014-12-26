describe 'Index page displays its main features to user', type: :feature, js: true do

  let!(:articles) {create_list(:article, 10)}

  before do
    visit root_path
  end


  describe 'Main elements display' do
    xit 'shows website title' do
      expect(page).to have_content I18n.t("pages.index.header.site_title")
    end

    it 'shows articles' do
      expect(page).to have_css('.article')
    end
  end
end
