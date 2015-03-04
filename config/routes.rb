# == Route Map
#
#              Prefix Verb   URI Pattern                         Controller#Action
#                root GET    /                                   pages#index
#     api_v1_articles GET    /api/v1/articles(.:format)          api/v1/articles#index {:format=>:json}
#                     POST   /api/v1/articles(.:format)          api/v1/articles#create {:format=>:json}
#  new_api_v1_article GET    /api/v1/articles/new(.:format)      api/v1/articles#new {:format=>:json}
# edit_api_v1_article GET    /api/v1/articles/:id/edit(.:format) api/v1/articles#edit {:format=>:json}
#      api_v1_article GET    /api/v1/articles/:id(.:format)      api/v1/articles#show {:format=>:json}
#                     PATCH  /api/v1/articles/:id(.:format)      api/v1/articles#update {:format=>:json}
#                     PUT    /api/v1/articles/:id(.:format)      api/v1/articles#update {:format=>:json}
#                     DELETE /api/v1/articles/:id(.:format)      api/v1/articles#destroy {:format=>:json}
#            articles GET    /articles(.:format)                 articles#index
#             article GET    /articles/:id(.:format)             articles#show
#               about GET    /about(.:format)                    pages#about
#

Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :articles
    end
  end

  resources :articles, only: [:show, :index]

  get 'about', to: 'pages#about'
end
