---
title: Privacy Policy
layout: article
---

# Privacy Policy

Last updated: 2021-04-04.


## What information is collected and how is it used?

Your client will contact this server in order to retrieve information in
order to perform its function. Any HTTP requests to this server are logged,
with the following information:

* Time
* IP address
* Page URL and query arguments
* Response status code and size

Logged HTTP requests may be used for debugging, or for very anonymous statistics
(such as view counters).

Background image ratings are stored anonymously on the server, and used to refine
background choices. Whether or not you've rated a particular background is
stored against IP address, to avoid duplicate ratings.

In order to look up latitude and longitude, the weather widget will send
location queries to the API server. The API server will then use
[OpenStreetMap](https://www.openstreetmap.org) to look up this information,
but does so in a way only the location query is sent - user IP addresses aren't
shared. The weather widget will then request weather by latitude and longitude;
the API server will use [OpenWeatherMap](https://openweathermap.org/).
Location queries and weather look ups will be logged as above, as this is done
for all HTTP requests.

Settings, including widgets, are stored in your browser. They are not sent
online unless needed to provide functionality, such as fetching weather
information. Custom background images you "upload" never leave your computer,
they are stored locally.

All communications with our server is done using strong encryption.


## Third-party Services

Your computer may directly contact third-party services as part of this service.

Background images will load directly from [Unsplash](https://unsplash.com) or
from the URL you specify.
See [Unsplash's Privacy Policy](https://unsplash.com/privacy).

Widgets such as the Feed widget may fetch information directly from the
specified URL.

We do not share information with third-party services except where necessary to
perform the extension's function, such as looking up locations and getting
weather information.


## Location

The production server is currently in Germany.
By using this service, you give permission for the data to be moved as needed.


## Period of Retention

The server uses log rotation, meaning that any logged HTTP requests will be
forgotten about within a week.


## Future Changes to Privacy Policy

Changes to the privacy policy will be alerted on this website.

By continuing to use this service, you agree to the privacy policy.


## Removal Requests and Queries

[Contact me](https://rubenwardy.com/contact/)
