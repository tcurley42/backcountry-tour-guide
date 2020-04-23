class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :routes
end
