---
title: How to translate Renewed Tab into your language
author: rubenwardy
layout: post
redirect_from:
  - /translations/
description: >-
  Renewed Tab supports localisation, allowing users to use it in their own
  language. The community can help by providing translations for Renewed Tab
  using Weblate.
images:
  form_field:
    path: 2023_translate/form_field.png
    caption: Form field label and hint
  variables:
    path: 2023_translate/variables.png
    caption: >-
      <code>{age}</code> is a variable that will be replaced at run time.
      <code>&lt;b&gt;</code> is a tag that formats the text inside it.


translate_gallery:
  - path: 2023_translate/lang_click_translate.png
    caption: Click the Translate button
  - path: 2023_translate/translate.png
    caption: You can now enter translations
---

Renewed Tab supports localization, allowing users to use it in their own language.
This is super important for accessibility and allows Renewed Tab to reach a
wider audience.

Renewed Tab is an open source project by a solo developer who unfortunately can
only speak English. The community can help by providing translations for Renewed
Tab using Weblate.


<a href="https://weblate.rubenwardy.com/engage/renewed-tab/" class="button is-primary is-large mr-3">
  Start translating on Weblate
</a>
<a href="https://weblate.rubenwardy.com/engage/renewed-tab/">
  <img src="https://weblate.rubenwardy.com/widgets/renewed-tab/-/287x66-black.png" alt="Translation status">
</a>


## Steps

### 1. Create an account (Optional but recommended)

You first need to [create an account](https://weblate.rubenwardy.com/accounts/register/).

Note that the email you use will be public in order to attribute you.

Registering an account is preferred, but you can still anonymously suggest
translations without one. To do that, just move to the next step.

### 2. Select your language

Go to the [Renewed Tab project > Languages](https://weblate.rubenwardy.com/projects/renewed-tab/#languages)
and then select your language.

If your language is not present, you'll need to [create it](https://weblate.rubenwardy.com/new-lang/renewed-tab/renewed-tab/)
(this requires an account).

### 3. Translate

Now you've selected your language, you can start translating. There's two
things you can translate:

- Renewed Tab: the extension itself
- Website and Browser Stores: the website and Chrome/Firefox store pages

Click one of these, and then click the big black "Translate" button to start.

You'll see a page with the English string and then a text box to put the
translated string. A string is just a piece of text. Once you're done, click
save and continue to continue to the next string.

{% include figure_gallery.html items=page.translate_gallery col_class="is-half" %}

The black box is a comment describing where the text is found. For example, a
form field label is the big text above a field, and a form field hint is grey
text below a field.

{% include figure.html img=page.images.form_field %}

Some strings will contain variables or formatting tags that you'll need to keep
as-is. Variables are wrapped in curly brackets like `{age}`, you should not
translate the variable name (age) into your language. Formatting tags have
triangle brackets like `<b>`.

{% include figure.html img=page.images.variables %}


## Conclusion

Thanks for helping make Renewed Tab accessible to more people!
