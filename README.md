# README

## Welcome to the Backcountry Tour Guide project
This project integrates with REI's The Powder Project API to allow users to
create ski trips and add backcountry ski routes to plan out trips. Users are
able to search based on location and, using Google's Geocode API, search the
PowderProject API for the top 20 routes within that area.

## Getting Started
Start the project by running `rake start`

This should open the home page in your default browser. If it doesn't navigate
to `localhost:3000`

## TODO
- Clean up CSS and Header Navbar
- Add buttons, actions, controller methods, and update reducer to delete routes 
trips
- When a new trip is created, route back to that trip's show page
- When a route is added, route back to that trip's show page
- User profile support
