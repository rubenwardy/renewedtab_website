---
title: Frequently Asked Questions
layout: article
redirect_from:
  - /ms/help/
---

# Frequently Asked Questions <!-- omit in toc -->

- [How do I enable the blur on Firefox?](#how-do-i-enable-the-blur-on-firefox)
- [How do I show the bookmarks bar only on the New Tab page?](#how-do-i-show-the-bookmarks-bar-only-on-the-new-tab-page)
- [How can I place widgets outside of the grid / at the bottom of the screen?](#how-can-i-place-widgets-outside-of-the-grid--at-the-bottom-of-the-screen)
- [Why does the extension request to read all the data for a website?](#why-does-the-extension-request-to-read-all-the-data-for-a-website)
- [Why does a background that I've blocked still appear?](#why-does-a-background-that-ive-blocked-still-appear)
- [Why isn't the background image appearing?](#why-isnt-the-background-image-appearing)
- [Why don't you support browser sync?](#why-dont-you-support-browser-sync)
- [Why don't you support X browser?](#why-dont-you-support-x-browser)
- [Why do I get an error when entering a custom URL in the web version?](#why-do-i-get-an-error-when-entering-a-custom-url-in-the-web-version)
- [How do I add custom widgets?](#how-do-i-add-custom-widgets)
- [How can I get in contact?](#how-can-i-get-in-contact)

## How do I enable the blur on Firefox?

**The blur should work by default in Firefox 103. Make sure your browser is
up-to-date.**

It may be possible to enable the blur in older versions of Firefox by manually
enabling it:

1. Open a new tab and type `about:config` as the address.
2. Accept the warning.
3. Enable `layout.css.backdrop-filter.enabled`.
4. Close and reopen Firefox.

## How do I show the bookmarks bar only on the New Tab page?

On Chrome, there's no way to show the **builtin** bookmarks bar only
on the New Tab page. However, Renewed Tab provides its own bookmarks bar which
you can enable by going to Settings > General > Bookmarks Bar.

On Firefox, you can right-click next to the address bar > Bookmarks Toolbar >
Only Show on New Tab.

![Only show on new tab](/static/images/help/firefox_bookmarks.png)

## How can I place widgets outside of the grid / at the bottom of the screen?

Renewed Tab requires all widgets to be placed on the grid. This is great for
the User Experience, as it's simple, but makes it harder to do certain things.

To make a widget appear to be at the bottom of the screen, you can use the
Invisible widget to add vertical spacing between widgets.

## Why does the extension request to read all the data for a website?

Some widgets, such as Feed, require loading information from a URL.
Web browsers tend to have strict permission systems, such that a browser
extension needs to request permission to do certain things.
Contacting a website is one of those things.

For example, in order to load a news feed from bbc.co.uk, the extension needs
to be granted permission to access bbc.co.uk.

Renewed Tab doesn't read any of your personal information or history for the
websites you grant access to. It just makes a web request to the website to load
the content.

Example messages:

> "Renewed Tab" has requested additional permissions.\\
> It could:
> - Read and change your data on feeds.bbci.co.uk

> Renewed Tab requests additional permissions.\\
> It wants to:
> - Access your data for feeds.bbci.co.uk

## Why does a background that I've blocked still appear?

The Renewed Tab API server only has 4 images available to choose from at a time.
If you've blocked a lot of images, then it's possible that you may end up with
all of these available images being blocked - if this is the case, then the
first image will be used.

The reason this is done is to avoid hitting the Unsplash API too much.

## Why isn't the background image appearing?

Extensions like DarkReader can conflict with the background image, you can
disable it per-site.

Alternatively, it may be a connection issue with the Renewed Tab API or unsplash,
or a configuration issue.

## Why don't you support browser sync?

Chrome and Firefox sync is limited to 8KB per key. It is common for components like notes
to exceed this limit, which makes it impractical to support sync.

You can use Settings (<i class="fas fa-cog"></i>) > Import / Export to share
your setup between browsers.

## Why don't you support X browser?

We only support the latest 2 versions of Firefox and Chrome; it is hard to test
and provide support for every browser.

Renewed Tab is built using cross-platform technologies, meaning that it is likely
that it will work on your browser despite not being supported.

You can download .zips of the browser extension:

1. Go to [GitLab pipelines](https://gitlab.com/renewedtab/renewedtab/-/pipelines).
2. Find the commit you're interested in. Typically, you want a release commit
   like "Release 1.2.3".
3. Click the download button (<i class="tag fas fa-ellipsis-v"></i>) to the right of the row.
4. Select "Download webext:archive artifact".

If you have a problem with an unsupported browser, then we are unlikely to be
able to help. However, we may accept patches/PRs to fix issues on unsupported
platforms as long as it doesn't introduce architectural problems, and the
problem is not due to the browser incorrectly implementing web standards.

## Why do I get an error when entering a custom URL in the web version?

If you try to enter a custom URL that is not allowed in the web version, you
will get the following error:

> Accessing host example.com is not allowed on the web version. For
> security reasons, the web version may only access pre-approved domains.
> Consider using the Chrome/Firefox extension instead.

The web version uses a proxy to access URLs, rather than contacting them
directly. This is to get around
[Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
(CORS) restrictions: web pages can't make requests to other websites without the
other website giving permission.

The web version's proxy restricts the domains you can use for
[security reasons](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery).
If any domain were allowed, malicious users could mess with DNS records to allow
accessing internal services on the server.

You may be able to ask for a website to be allowed by the proxy. However, you
should use the Chrome/Firefox extension instead, as it doesn't have this
restriction

Note: If you get the error whilst using the browser extension, there's something
_wrong_. Please report it below.

## How do I add custom widgets?

See [Creating Your Own Custom Widgets for Renewed Tab](/blog/2022/07/24/custom-widgets/).

## How can I get in contact?

Making an issue on the Issue Tracker is the preferred way of discussing
Renewed Tab bugs and feature requests.

If you need help, you can use any of these options. Discord or Matrix is likely
to be the quickest.

<div class="buttons">
	<a href="https://gitlab.com/renewedtab/renewedtab/-/issues" class="button is-primary">
		<i class="fab fa-gitlab mr-2"></i>
		Issue Tracker
	</a>
	<a href="https://rubenwardy.com/contact/" class="button">
		<i class="fas fa-envelope mr-2"></i>
		Contact Me
	</a>
	<a href="https://discord.gg/zYjR54b" class="button">
		<i class="fab fa-discord mr-2"></i>
		Discord
	</a>
	<a href="https://matrix.to/#/#renewedtab:matrix.org" class="button" >
		<i class="fas fa-hashtag mr-2"></i>
		Matrix
	</a>
	<a href="https://github.com/rubenwardy/renewedtab" class="button">
		<i class="fab fa-github mr-2"></i>
		GitHub (mirror)
	</a>
</div>
