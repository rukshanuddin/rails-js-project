class TweetsController < ApplicationController
  def index
    @handle = Handle.find(params[:handle_id])
    @tweets = CLIENT.user_timeline(@handle.name, tweet_mode: 'extended')
    render json: @tweets
  end
end
