describe "Projects page displays its main features to user", :type => :feature do

  let!(:projects) {create_list(:project, 10)}

  before do
    visit projects_path
  end

  it "shows projects" do
    expect(page).to have_content(projects.first.subtitle)
  end
end