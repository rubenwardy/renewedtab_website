---
title: Credits
description: Thanks to those who helped make Renewed Tab better
layout: article
languages:
  Türkçe:
    flag: "🇹🇷"
    people:
      - name: Doğucan Gelbal

  Bahasa Melayu:
    flag: "🇲🇾"
    people:
      - name: Yaya MNH48
        link: https://mnh48.carrd.co/

  Português:
    flag: "🇧🇷"
    people:
      - name: Darck angel sama

  Italiano:
    flag: "🇮🇹"
    people:
      - name: Zughy
        link: https://liberapay.com/Zughy/

  Français:
    flag: "🇫🇷"
    people:
      - name: EricPorlier
      - name: AirSThib

  Español:
    flag: "🇪🇸"
    people:
      - name: j45
---

# Credits

<p class="has-text-grey-light">
	A big thank you to all the contributors, API providers, open source maintainers,
	and users
</p>

## Developers

Developed by [rubenwardy](https://rubenwardy.com)

## Contributors

### Code

* Thanks to [Auri](https://github.com/Aurailus) for ongoing help with CSS,
  design, and a bug fix.

### Translators

<ul>
{% for pair in page.languages | sort %}
	<li>
		{{ pair[1].flag }}
		{{ pair[0] }}:
		{% for person in pair[1].people -%}
			{%- unless forloop.first %}, {% endunless -%}
			{%- if person.link -%}
				<a href="{{ person.link }}" rel="nofollow">{{ person.name }}</a>
			{%- else -%}
				{{ person.name -}}
			{%- endif -%}
		{% endfor %}
	</li>
{% endfor %}
</ul>

<p>
	<a class="button is-secondary" href="https://renewedtab.com/translations/">
		<i class="fas fa-language mr-2"></i>
		Help Translate
	</a>
</p>

## Libraries and APIs

### Libraries

Thanks to Font-Awesome for icons, React for UI, and WebPack for builds.

### APIs

Thanks to Unsplash, OpenStreetMap, OpenWeatherMap, Quotes.Rest,
and RocketLaunch.Live for their APIs.

Thanks to Sentry for keeping Renewed Tab bug free&trade;.
