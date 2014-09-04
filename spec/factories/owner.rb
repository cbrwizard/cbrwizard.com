FactoryGirl.define do
  factory :owner do
    working_on "Crazy stuff"
    researching "Meaning of life"
    current_goal "World domination"
  end

  factory :wrong_owner, class: Owner do
    current_goal "lol"
  end
end