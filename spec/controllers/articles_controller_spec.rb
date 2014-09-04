describe ArticlesController do
  describe ".index" do

    it "loads page successfully" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end

  describe ".show" do
    let(:article) {create(:article)}

    it "loads page successfully" do
      get :show, id: article
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end
end