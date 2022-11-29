Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  
  root to: "pages#home"

  devise_scope :user do
    get 'users', to: 'users/registrations#show', as: 'user'
  end

  resources :posts do
    resources :reply
  end

  resources :articles

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
