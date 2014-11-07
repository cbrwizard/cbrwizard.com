describe "Index page displays its main features to user", type: :feature, js: true do

  let!(:articles) {create_list(:article, 10)}
  let!(:projects) {create_list(:project, 10)}
  let!(:owner) {create(:owner)}

  before do
    visit root_path
  end


  describe "Main elements display" do
    it "shows website title" do
      expect(page).to have_content I18n.t("pages.index.header.site_title")
    end

    it "shows articles" do
      expect(page).to have_css(".article")
    end

    it "shows a project" do
      expect(page).to have_css(".project", count: 1)
    end
  end
end
