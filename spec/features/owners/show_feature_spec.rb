describe "Who? page displays its main features to user", :type => :feature do

  let!(:owner) {create(:owner)}

  before do
    visit who_path
  end

  it "shows owner information" do
    expect(page).to have_content(owner.working_on)
  end
end