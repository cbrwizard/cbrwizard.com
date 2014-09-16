describe "Project page displays its main features to user", :type => :feature do

  let!(:project) {create(:project)}

  before do
    visit project_path(project)
  end

  it "show an project text" do
    expect(page).to have_content(project.name)
  end
end