---
title: Privacy Policy
layout: article
---

# Privacy Policy <!-- omit from toc -->

<p class="is-size-4">
	All settings and widgets are saved in your browser, they're only transmitted
	to us when needed to load widget data (such as location for weather forecasts).
	Errors are reported to Sentry to aid with debugging, and user feedback is stored
	anonymously.
</p>

<small>Last updated: 2023-01-20.</small>

## What information is collected and how is it used?

### Weather

In order to look up latitude and longitude, the weather widget will send
location queries to the API server. The API server uses the Geocoding Provider
(currently AccuWeather) to look up the location information - only the location
information is sent, user IP addresses aren't shared.

The weather widget will then request weather by location, the API server will
use the Weather Provider (currently AccuWeather). Location queries and weather
look ups will be logged as described in "Communication with our server", as this
is done for all HTTP requests.

### Browser Storage

Settings, including widgets, are stored in your browser. They are not sent
online unless needed to provide functionality, such as fetching weather
information. Custom background images you "upload" never leave your computer,
they are stored locally.

### Background Image Ratings

Background image ratings are stored on our server and used to refine background
choices. Background ratings are stored against IP address, to avoid duplicate
ratings.

### User Feedback

The uninstall and general feedback forms send the text anonymously to the
developer, along with browser and version information. The IP address is not
logged.

### Communication with our server

Your client will contact the Renewed Tab **API server** in order to retrieve
information in order to perform its function. Any HTTP requests to this server
are logged, including the following information: time, IP address, page URL,
and response status.

Logged HTTP requests may be used for debugging, or for anonymous statistics
(such as view counters/graphs).

All communications with our server is done using strong encryption.


## Third-party Services

Your computer may directly contact third-party services as part of this service.

Background images will load directly from [Unsplash](https://unsplash.com) or
from the URL you specify. They will be able to see the background image you're
viewing and information about the request, such as IP address and user-agent.
See [Unsplash's Privacy Policy](https://unsplash.com/privacy)
for more information.

Widgets where you specify a URL, such as the Feed widget, may fetch information
directly from the given URL.

We do not share information with third-party services except where necessary to
perform the extension's function, such as looking up locations and getting
weather information.

Error tracking is done using Sentry.io. You will be given an anonymous unique
identifier to track your current session, and your IP address will be used
to track you as a user. When an error occurs, the app will automatically
report the error traceback along with recent actions leading up to the crash.
Any personal information is automatically stripped out.
See [Sentry's privacy policy](https://sentry.io/privacy/).


## Location

The production server is currently in Germany.
By using this service, you give permission for the data to be moved as needed.


## Period of Retention

The server uses log rotation, meaning that any logged HTTP requests will be
forgotten about within a few weeks.


## Future Changes to Privacy Policy

Changes to the privacy policy will be alerted on this website.

By continuing to use this service, you agree to the privacy policy.


## Removal Requests and Queries

Feel free to contact me if you have any questions.

<a href="https://rubenwardy.com/contact/" class="button is-primary">
	Contact Me
</a>
