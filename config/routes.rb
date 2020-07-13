Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :trips do
        resources :routes
      end
      post '/search', to: 'search#search'
      post '/fetch', to: 'search#fetch'
    end
  end

end
