Rails.application.routes.draw do
  
  resources :users do 
    resources :tweets
  end
end
