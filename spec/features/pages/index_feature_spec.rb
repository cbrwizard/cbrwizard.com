describe "User can see main page", :type => :feature do

  it "shows website title on index (plus feature tests work correctly)", js: true do
    visit root_path
    expect(page).to have_content I18n.t("pages.index.header.site_title")
  end
end