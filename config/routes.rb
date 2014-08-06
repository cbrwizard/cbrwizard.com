Rails.application.routes.draw do
  root 'pages#index'
  devise_for :users

  namespace :admin do
    resources :users
    resources :articles
    resources :projects
    resource :owner, only: [:show, :update, :edit]

    root "pages#index"
  end

  resources :users
  resources :articles
  resources :projects
  resource :owner, only: [:show]

  get "who" => "owners#show"
end
