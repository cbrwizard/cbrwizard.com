FactoryGirl.define do
  factory :project do
    description "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
    name "Brainlook.org"
    subtitle "Opinions website"
    release_date {1.year.ago}
    website "http://brainlook.org/"
  end

  factory :wrong_project, class: Project do
    description "lol"
    release_date {1.year.from_now}
    website "brainlook.org"
  end
end