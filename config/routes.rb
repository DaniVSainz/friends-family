Rails.application.routes.draw do

  root 'welcome#view'

  resources :pictures

  get 'tencards',to: 'game#tencards'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
