class Route < ApplicationRecord
  belongs_to :trip
  validates :route_id, presence: true
end
