Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :routes
      resources :trips
    end
  end
end
