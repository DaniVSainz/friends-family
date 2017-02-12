Rails.application.routes.draw do

  root 'welcome#view'

  resources :pictures

  get 'tencards',to: 'game#tencards'

  get 'twentycards',to: 'game#twentycards'

  get "about",to: 'welcome#about'

  get 'completed',to: 'welcome#completed'

  get 'update',to: 'pictures#update'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
