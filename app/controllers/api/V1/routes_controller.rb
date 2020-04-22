class Api::V1::RoutesController < ApplicationController

  before_action :set_trip

  def index
    @routes = @trip.routes
    render json: @routes
  end

  def create
    if @trip.routes.find_by(route_id: params[:route_id])
      render json: {error: "Route already added to trip"}
    else
      @route = @trip.routes.build(route_params)
      if @route.save
        render json: @route
      else
        render json: {error: "Error creating Route"}
      end
    end
  end

  def show
    @route = @trip.routes.find_by(id: params[:id])
    render json: @route
  end

  def destroy
    @route = Route.find(params[:id])
    @route.destroy
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def route_params
    params.require(:trip_id).permit(:route_id)
  end

end
