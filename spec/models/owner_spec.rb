describe Owner do
  describe "#save" do
    context "correct attributes" do
      it "saves a valid owner" do
        expect(FactoryGirl.build(:owner)).to be_valid
      end
    end

    context "incorrect attributes" do
      it "doesn't save an project with no info" do
        expect(FactoryGirl.build(:wrong_project)).to_not be_valid
      end
    end

  end
end