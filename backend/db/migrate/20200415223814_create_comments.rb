class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :t_text
      t.string :t_user_name
      t.string :t_user_screen_name
      t.string :t_user_profile_image_url
      t.string :t_user_profile_banner_url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
