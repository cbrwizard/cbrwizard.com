describe Article do
  describe "#save" do
    context "correct attributes" do
      it "saves a valid article" do
        expect(FactoryGirl.build(:article)).to be_valid
      end
    end

    context "incorrect attributes" do
      it "doesn't save an article with no info" do
        expect(FactoryGirl.build(:wrong_article)).to_not be_valid
      end
    end

  end
end