FactoryGirl.define do
  factory :article do
    text "It is highly recommended that you have one factory for each class that provides the simplest set of attributes necessary to create an instance of that class. If you're creating ActiveRecord objects, that means that you should only provide attributes that are required through validations and that do not have defaults. Other factories can be created through inheritance to cover common scenarios for each class."
    title  "Some boring Factory Girl info"
  end

  factory :wrong_article, class: Article do
    text "FK"
  end
end