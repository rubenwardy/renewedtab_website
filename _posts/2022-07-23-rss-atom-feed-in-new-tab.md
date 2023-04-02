---
title: Add Atom/RSS feeds to your New Tab page using Renewed Tab
author: rubenwardy
layout: post
description: >-
  This article will tell you how you can add an Atom, RSS, or JSON feed to your
  Firefox / Chrome New Tab page using Renewed Tab.
image: /static/blog/howto-feeds/cover.png
images:
  unlock:
    path: howto-feeds/unlock.png
    caption: Edit mode button found on the bottom-right of the screen
  permissions:
    path: howto-feeds/permissions.png
    caption: Permission request link
  sources:
    path: howto-feeds/sources.png
    caption: Sources table in the Edit Feed dialog
  filter:
    path: howto-feeds/filter.png
    caption: Filter table in the Edit Feed dialog
  icons:
    path: howto-feeds/icons.png
    caption: >-
      The two places where feed icons can appear. Left is combined,
      right are tabs.
---


This article will tell you how you can add an Atom, RSS, or JSON feed to your
Firefox / Chrome New Tab page using Renewed Tab. This allows you to keep up to
date with the news and your favourite websites.

Renewed Tab's Feed widget supports showing one or more feeds, using tabs or
combined into a single list. It also supports showing article thumbnails and
feed icons.

If you haven't already, you'll need to install Renewed Tab
([Chrome]({{ site.chrome }}&utm_content=post),
[Firefox]({{ site.firefox }}&utm_content=post)).


## Add a Feed Widget

Unlock Renewed Tab by clicking the pencil icon, click "+ Add Widget", and then
click Feed. There will now be a new Feed widget on your page. Hover over the
widget to move and resize it.

{% include figure.html img=page.images.unlock %}


## Permissions

Renewed Tab is designed with privacy in mind, so requires as few permissions as
possible. You'll need to grant permission to access each feed source in order
for the widget to work. Whilst in Edit mode, hover over the widget and click
the pencil. This will open an Edit Feed dialog modal.


{% include figure.html img=page.images.permissions %}


## Edit Sources

The next step is to add and remove sources. Open the Feed's edit dialog and look
at the Sources table.

{% include figure.html img=page.images.sources %}

The sources table has a row per feed you are subscribing to.
If you don't want BBC News, delete it now by clicking the trash icon.

To add a new row, click one of the [+ Add]. The button above adds a row to the
top, the button below to the bottom.

The URL field needs to be URLs to an Atom/RSS/JSON feed, it can't be a URL to a
standard web page. Not all websites offer feeds, but you can try searching for
the website's name plus "RSS" or "Atom". We plan to add support for automatic
feed detection in the future.

Renewed Tab has a collection of popular feeds available, you can click an empty
URL field to see them in a dropdown.


## Filtering Articles

You can filter articles based on whether they have or don't have a search
phrase. This is especially useful when you want to hide a particular topic.

To hide articles that contain the word "football", add a new row with "Hide" and
text as "football". To only show articles that contain the word football, use
"Show" instead.

Search text is case-insensitive.

{% include figure.html img=page.images.filter %}


## Other Options

"Combine sources into single tab" will show all the feed sources in one list,
rather than giving each its own tab.

"Show images" will show images for each article. Note that this does not work
with all sources due to missing information.

"Use icons from websites (favicons)" will show icons in tabs if sources are
separate, or icons in a list if combined. Does nothing if the above two options
are both enabled.

"Open links in new tab" will open articles in a new tab when clicked. This is
the same as ctrl+clicking or middle-clicking a link.

{% include figure.html img=page.images.icons %}


## Conclusion

Renewed Tab has a simple but flexible feed widget, allowing you to keep up to
date with the news and your favourite websites. If you need any help or have
any requests, don't hesitate to [get involved](/get_involved/).
