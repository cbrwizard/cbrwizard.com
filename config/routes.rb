Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :articles
    end
  end

  resources :articles, only: [:show, :index]
end
