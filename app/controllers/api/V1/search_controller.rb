require 'json'
require 'optparse'

class Api::V1::SearchController < ApplicationController

  def search
    rest_lat = params[:lat]
    rest_lon = params[:lon]
    url = "https://www.powderproject.com/data/get-trails?lat=#{rest_lat}&lon=#{rest_lon}&maxResults=20&maxDistance=20&key=#{Rails.application.credentials.powder_project[:key]}"
    response = RestClient::Request.execute(
      method: "GET",
      url: url
    )
    results = JSON.parse(response)
    render json: results
  end

  def fetch
    routeList = params[:routeList]
    url = "https://www.powderproject.com/data/get-trails-by-id?ids=#{routeList}&key=#{Rails.application.credentials.powder_project[:key]}"
    response = RestClient::Request.execute(
      method: "GET",
      url: url
    )
    results = JSON.parse(response)
    render json: results
  end

end
