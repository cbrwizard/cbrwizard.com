describe "Fetching articles" do
  context "with valid auth token" do
    it "returns the current user" do
      article = create(:article)

      get api_v1_articles_path, {}, auth_header

      expect(response.status).to eq 200
      expect(response).to match_response_schema("articles")
    end
  end
end