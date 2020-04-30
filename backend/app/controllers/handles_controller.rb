class HandlesController < ApplicationController
  before_action :set_handle, only: %i[show update destroy]

  # GET /handles
  def index
    @handles = Handle.all
    render json: @handles
  end

  # GET /handles/1
  def show
    @tweets = CLIENT.user_timeline(@handle.name, tweet_mode: 'extended')
    render json: @tweets
  end

  # POST /handles
  def create
    @handle = Handle.find_or_create_by(handle_params)
    render json: @handle
  end

  # DELETE /handles/1
  def destroy
    @handle.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_handle
    @handle = Handle.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def handle_params
    params.require(:handle).permit(:name, :user_id)
  end
end
