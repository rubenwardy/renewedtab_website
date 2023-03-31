---
title: Import feeds from Feedly using OPML
author: rubenwardy
layout: post
description: >-
  This article will explain how to import your feeds from Feedly or another
  newsfeed aggregator into Renewed Tab.
images:
  cover:
    path: howto-feeds/cover.png
  import:
    path: opml-feedly/import.png
    caption: Click the Import button and then choose the OPML file

feedly_gallery:
  - path: opml-feedly/export_feedly.png
    caption: First, click the cog icon
  - path: opml-feedly/export_feedly_2.png
    caption: Next, click the share arrow
  - path: opml-feedly/export_feedly_3.png
    caption: Finally, click the download button
---

OPML is a common format for exchanging feed subscriptions between feed readers.
Renewed Tab has a powerful Feed widget supporting RSS, Atom, RDF, and JSON
feeds. You can import a list of feeds from another feed reader using OPML, this
article will explain how to do that from Feedly.


## Steps

### Export OPML from Feedly

You'll need to export the OPML file from Feedly. To do that, log in and then
click the cog icon at the top of the feed list. Click the share icon at the
top-right, and then the download button.

{% include figure_gallery.html items=page.feedly_gallery %}

### Import OPML into Renewed Tab

Next, create a Feed widget and open the widget settings
(<i class="fas fa-pen mx-1"></i>). Click the Import button and then choose the
OPML file.

Note that Renewed Tab doesn't support categories currently, the feeds will be
imported as a flat list. Renewed Tab also has some limitations that make having
a lot of feeds painful, we plan on improving this in the future.

{% include figure.html img=page.images.import %}

## Conclusion

And that's all there is to it! Supporting OPML makes it easy to share feed
subscriptions between Renewed Tab and other feed readers. You can also click
Export to download an OPML file from Renewed Tab to use in other applications.

This is a new feature, so do let us know if you find any problems.
