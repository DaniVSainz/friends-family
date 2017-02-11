Rails.application.routes.draw do
  resources :pictures

  root 'welcome#view'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
