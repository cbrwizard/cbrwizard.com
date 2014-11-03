Rails.application.routes.draw do
  root 'pages#index'
  devise_for :users

  namespace :api, path: "", constraints: { subdomain: "api" }, defaults: { format: :json } do
    namespace :v1 do
      resources :articles
    end
  end

  namespace :admin do
    resources :users
    resources :articles
    resources :projects
    resource :owner, only: [:show, :update, :edit]

    root "pages#index"
  end

  resources :users
  resources :articles, only: [:show, :index]
  resources :projects, only: [:show, :index]
  resource :owner, only: [:show]

  get "who" => "owners#show"
end
