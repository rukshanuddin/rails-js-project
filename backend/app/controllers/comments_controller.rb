class CommentsController < ApplicationController
  before_action :set_comment, only: %i[show update destroy]

  def index
    @comments = Comment.where(user_id: params[:user_id])
    render json: @comments, include: :user
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.create(comment_params)
    if @comment.valid?
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def comment_params
    params.permit(:comment,
                  :user_id,
                  :content,
                  :t_user_profile_image_url,
                  :t_user_screen_name,
                  :t_text,
                  :t_user_profile_banner_url,
                  :t_user_name)
  end
end
