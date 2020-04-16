require 'pry'
class HandlesController < ApplicationController
  before_action :set_handle, only: [:show, :update, :destroy]
  

  # GET /handles
  def index
    @handles = Handle.all
    render json: @handles
  end

  # GET /handles/1
  def show
    
    redirect_to handle_tweets_path(@handle)
  end

  # POST /handles
  def create
    @handle = Handle.new(handle_params)

    if @handle.save
      render json: @handle, status: :created, location: @handle
    else
      render json: @handle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /handles/1
  def update
    if @handle.update(handle_params)
      render json: @handle
    else
      render json: @handle.errors, status: :unprocessable_entity
    end
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