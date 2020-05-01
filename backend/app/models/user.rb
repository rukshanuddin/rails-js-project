class User < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :user_handle, presence: true, uniqueness: { case_sensitive: false }

  has_many :comments
end
