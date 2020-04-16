Rails.application.routes.draw do
  resources :users do 
    resources :comments
  end
  resources :handles do 
    resources :tweets
  end
end
