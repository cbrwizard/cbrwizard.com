describe OwnersController do
  describe ".show" do
    let(:owner) {create(:owner)}

    it "loads page successfully" do
      get :show, id: owner
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end
end