describe "Projects page displays its main features to user", :type => :feature do

  let!(:projects) {create_list(:project, 10)}

  before do
    visit projects_path
  end
end