require 'json'
require 'optparse'

class Api::V1::SearchController < ApplicationController

  def search
    debugger
    rest_lat = params[:lat]
    rest_lon = params[:lon]
    response = RestClient::Request.execute(
      method: "GET",
      url: `https://www.powderproject.com/data/get-trails?lat=#{rest_lat}&lon=#{rest_lng}&maxResults=20&maxDistance=20`,
      headers: {
        Authorization: "key=#{ENV["POWDER_PROJECT_KEY"]}"
      }
    )
    results = JSON.parse(response)
    render json: results
  end
end
