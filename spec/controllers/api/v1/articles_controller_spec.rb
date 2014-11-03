describe Api::V1::ArticlesController do
  let(:version) { "v1" }

  describe ".index" do
    render_views
    let(:list) { true }

    let!(:article) { create(:article) }
    let!(:article_two) { create(:article) }

    it "loads page successfully" do
      get :index

      expect(response).to have_http_status(200)
      expect(response).to match_response_schema("#{version}/articles", list)
    end
  end


  describe ".show" do
    render_views
    let(:list) { false }

    let(:article) { create(:article) }

    it "loads page successfully" do
      get :show, id: article

      expect(response).to have_http_status(200)
      expect(response).to match_response_schema("#{version}/article", list)
    end
  end
end
