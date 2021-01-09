
# Swell Tracker

## General Info

This project is a single page application created with ReactJS and Node.js. The application works with the Positionstack geocoding API to find the coordinates for a searched location by the client. Then using these coordinates with the StormGlass API the weather data for the selected location is sorted and modified and displayed in an easy to read display to the client. The data displayed is the cloud cover witha corresponding icon, the primary and secondary wave heights, the next high or low tide for the area, and a chart displaying all of the wave heights for the next 24 hours.

## Set up

npm install

Then the only requirements for using this application is to create a free account with positionstack and stormglass. Then create a config.js file in the root directory and create a module.exports in this format {postionstack: 'YOURAPIKEY, stormglass: 'YOURAPIKEY'}
