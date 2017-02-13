class GameController < ApplicationController
  def tencards
    @pictures = Picture.all.sample(5)
    @duplicated_array = [@pictures,@pictures].flatten.shuffle
  end
  def twentycards
    @pictures = Picture.all.sample(10)
    @duplicated_array = [@pictures,@pictures].flatten.shuffle
  end
end
