class Api::V1::TripsController < ApplicationController

  def index
    @trips = Trip.all
    render json: @trips
  end

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render json: @trip
    else
      render json: {error: "Error creating Trip"}
    end
  end

  def show
    @trip = Trip.find(params[:id])
    render json: @trip
  end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :description)
  end
end
