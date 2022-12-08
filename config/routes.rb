Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  root to: "posts#index"

  devise_scope :user do
    get 'users', to: 'users/registrations#show', as: 'user'
  end

  resources :posts do
    resources :replies
  end

  resources :articles
  resources :conversations do
    resources :messages
  end

  put 'conversations/:id/mark_as_read', to: 'conversations#mark_as_read', as: 'mark_as_read'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
