describe ProjectsController do
  describe ".index" do

    it "loads page successfully" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end

  describe ".show" do
    let(:project) {create(:project)}

    it "loads page successfully" do
      get :show, id: project
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end
end