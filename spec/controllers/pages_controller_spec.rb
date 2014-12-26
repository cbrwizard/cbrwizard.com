describe PagesController do
  describe '.index' do
    it 'loads page successfully' do
      get :index

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end
end
