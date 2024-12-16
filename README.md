![Add to Calendar Button](https://github.com/add2cal/add-to-calendar-button/blob/main/assets/img/readme-header.png?raw=true)

[![Code Quality](https://img.shields.io/codacy/grade/572c0a102d7b4f39b792439dcd2e8aad/main?style=for-the-badge)](https://app.codacy.com/gh/add2cal/add-to-calendar-button/dashboard)
[![npm Installations Total](https://img.shields.io/npm/dt/add-to-calendar-button?label=npm%20Installations&style=for-the-badge)](https://www.npmjs.com/package/add-to-calendar-button)
[![npm Installations per Month](https://img.shields.io/npm/dm/add-to-calendar-button?label=npm%20Installations%2FMonth&style=for-the-badge)](https://www.npmjs.com/package/add-to-calendar-button)
[![jsDelivr npm Hits](https://img.shields.io/jsdelivr/npm/hm/add-to-calendar-button?label=jsDelivr%20npm%20hits&style=for-the-badge)](https://www.jsdelivr.com/package/npm/add-to-calendar-button?tab=stats)

<br />

# Your next Add to Calendar Button

The convenient JavaScript Web Component, which lets you reliably create beautiful buttons, where people can add events to their calendars.

[![#1 Product of the Day on ProductHunt](https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=319458&theme=dark&period=daily)](https://www.producthunt.com/products/add-to-calendar-button-generator)

<br /><br />

For everybody, who wants to include a button at their website or app, which enables users to easily add a specific event to their calendars.
It's main goal is to keep this process as easy as possible at maximum compatibility. Simply define your button configuration and everything else is automatically generated by the script.
Supporting calendars at Apple, Google, Microsoft (365, Outlook, Teams), Yahoo, and generic iCal.

![Supported Calendars: Apple (via iCal), Google, Microsoft (365, Outlook, Teams), Yahoo, generic iCal](https://github.com/add2cal/add-to-calendar-button/blob/main/assets/img/badge-supported-calendars.svg)

The script, since it is a web component, integrates easily with any usual HTML webpage (**VanillaJS** way) as well as popular JavaScript frameworks and libraries like **Angular**, **React**, **Vue**, **Svelte**, and more.

![Supported Technology: Angular, React, Vue, Svelte, and every other project that can load JavaScript](https://github.com/add2cal/add-to-calendar-button/blob/main/assets/img/badge-technology.svg)

Works with **all modern browsers** (Chrome, Edge, Firefox, Safari) on **Windows, Mac, Android, and iOS** as well as rather restricted webview environments like the **Instagram** in-app browser.

<br /><br />

---

<br />

## ▶️ Demo

See [add-to-calendar-button.com](https://add-to-calendar-button.com/) for a live demo and playground.

<br />

---

<br />

## ✨ Features

Simple and convenient integration of 1 or many buttons, configurable directly within the HTML code.

### Supported Calendars

- **Google** Calendar.
- **Apple** Calendar.
- **Yahoo** Calender.
- **Microsoft 365, Outlook, and Teams**.
- Automatically generated **iCal/ics** files (for all other calendars and cases).

### Event Types

- Timed and all-day events.
- One-time, multi-date, recurring.
- Calendar subscription.
- Most robust time zone and daylight saving management (via our own [TimeZones iCal Library](https://github.com/add2cal/timezones-ical-library)).
- Dynamic dates (like "today + 3").

### Look

- Beautiful and adjustable UI.
- Light and dark mode.
- Multiple themes.

### Accessibility

- Optimized and adjustable UX (for desktop and mobile).
- Dynamic dropdown positioning.
- Taking care of all those edge cases, where some scenarios do not support specific setups (like WebView blocking downloads); utilizing beautiful user guidance workarounds.
- Auto-generated Schema.org rich (structured) data for better SEO.
- Full support for mouse, touch, or keyboard input (W3C WAI compliant).
- Supporting 20+ languages, incl. RTL text for Arabic & Persian; but also custom labels and text blocks (i18n).

### And much more

- Well documented code, to easily understand the processes and build on top of it.
- No external service or backend dependencies.
- Fully GDPR, CCPA, and LGPD compliant by design - without the need of signing some data processing agreement.
- FREE and easy.

<br />

---

<br />

## 🚀 Go PRO

- ics file generation and hosting for better compatibility.
- RSVP, incl. automatic updates sent to attendees, GDPR features, and more.
- More customization - all no-code.
- API, webhooks, and more technical toys.
- Share events among all kinds of channels - email, social media, ...

Check the details at [add-to-calendar-pro.com](https://add-to-calendar-pro.com)!

<br />

---

<br />

## 📦 Installation / Setup

### Option 1: simple (CDN)

You can use the jsDelivr CDN and load the respective script directly into your website.

Place the script tag inside the `<head>` section.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
```

<br />

### Option 2: npm

Install the package using the following npm command:

```sh
npm install add-to-calendar-button
```

Import the module into your project/component

```javascript
import 'add-to-calendar-button';
```

Based on your framework/library, you might need to make minor adjustments to the respective config.

Find detailed installation guides for the most common ones, like React, Angular, Vue, Svelte, or Astro at [add-to-calendar-button.com/#installation](https://add-to-calendar-button.com/#installation).

<br />

---

<br />

## 🎛️ Configuration

A button can be easily created by using the respective custom element.

```html
<add-to-calendar-button></add-to-calendar-button>
<!-- OR simply ... -->
<add-to-calendar-button />
```

You can then configure the button by simply adding the options as attributes to it. Boolean values (true/false) can be set as `optionName="true"` or simply by adding `optionName` to the tag. Not setting it at all would be automatically translate to "false".

<br />

### Structure (PRO)

```html
<add-to-calendar-button proKey="prokey-of-your-event" />
```

<br />

### Minimal structure (no PRO)

Mind that for auto-generating rich snippets, a location would be mandatory as well.

Calendar type options and time zone information are not required, but recommended.

```html
<add-to-calendar-button
  name="Add the title of your event"
  startDate="2022-02-21"
  options="['Google']"
  timeZone="America/Los_Angeles"
/>
```

<br />

### A more powerful example (no PRO)

```html
<add-to-calendar-button
  name="Add the title of your event"
  description="A nice description does not hurt"
  startDate="2022-02-21"
  endDate="2022-03-24"
  startTime="10:13"
  endTime="17:57"
  location="Somewhere over the rainbow"
  options="['Apple','Google','iCal','Microsoft365','Outlook.com','Yahoo']"
  timeZone="Europe/Berlin"
  trigger="click"
  inline
  listStyle="modal"
  iCalFileName="Reminder-Event"
/>
```

<br /><br />

[More Examples](https://add-to-calendar-button.com/examples) • [Full Configuration Documentation](https://add-to-calendar-button.com/configuration) • [PRO Version](https://add-to-calendar-pro.com)

<br />

---

<br />

## 🤗 Support it!

You like this project? It would be awesome if you would support it, so it lives on!

- ⭐ [Star the repository](#) in order to stay up-to-date and save it for later!
- 📣 Spread the word! On Twitter/X, Medium, Discord, Facebook, ...
- ✍️ Leave a review at [ProductHunt](https://www.producthunt.com/products/add-to-calendar-button-generator/reviews).
- 💌 Send us some positive feedback at the [discussion board](https://github.com/add2cal/add-to-calendar-button/discussions).

<br /><br />

## ⚡ Changelog

![npm Version](https://img.shields.io/npm/v/add-to-calendar-button?label=current%20version&style=for-the-badge)
[![Build Status](https://img.shields.io/github/actions/workflow/status/add2cal/add-to-calendar-button/npm-publish.yml?label=build&style=for-the-badge)](https://github.com/add2cal/add-to-calendar-button/actions/workflows/npm-publish.yml)

Find all changes in the dedicated file at [CHANGELOG.md](CHANGELOG.md).

<br /><br />

## 🙌 Contributing

Anyone is welcome to contribute, but mind the [guidelines](.github/CONTRIBUTING.md):

- [Bug reports](.github/CONTRIBUTING.md#bugs)
- [Feature requests](.github/CONTRIBUTING.md#features)
- [Pull requests](.github/CONTRIBUTING.md#pull-requests)

**IMPORTANT NOTE:** Run `npm install` and `npm run format` to auto-lint!

<br /><br />

## 📃 Copyright and License

Copyright (c) [Jens Kuerschner](https://jekuer.com).

Licensed under [Elastic License 2.0 (ELv2)](LICENSE.txt).

**About open-source**:
We consider ourselves open-source.
However, we are also aware of the controversy coming with licenses like the one selected.
Therefore, and contrary to many other companies and products, we no longer use the term in any marketing statements unless it is about other pieces which really are under an official OSI license.

Speaking **about the license**:
We love it, because it is so simple. Have a look!
You are basically free to do anything unless you are not offering the tool itself as a product or service; or want to remove copyright and license stuff.
In doubt, simply ask and we find a way. :)

<br />

---

<br />

## 💜 Kudos go to

...all amazing contributors:

<a href="https://github.com/jekuer"><img src="https://avatars.githubusercontent.com/u/8572883?v=4" title="Jens Kuerschner" width="60" height="60"></a>
<a href="https://github.com/add-to-calendar"><img src="https://avatars.githubusercontent.com/u/110406429?s=96&v=4" title="Add to Calendar Team" width="60" height="60"></a>
<a href="https://github.com/chadoh"><img src="https://avatars.githubusercontent.com/u/221614?v=4" title="chadoh" width="60" height="60"></a>
<a href="https://github.com/turcuciprian"><img src="https://avatars.githubusercontent.com/u/3309840?v=4" title="Ciprian Turcu" width="60" height="60"></a>
<a href="https://github.com/lizakorab"><img src="https://avatars.githubusercontent.com/u/72821189?v=4" title="Liza Korab" width="60" height="60"></a>
<a href="https://github.com/bryan-brancotte"><img src="https://avatars.githubusercontent.com/u/11556772?v=4" title="Bryan Brancotte" width="60" height="60"></a>
<a href="https://github.com/nticaric"><img src="https://avatars.githubusercontent.com/u/824840?v=4" title="nticaric" width="60" height="60"></a>
<a href="https://github.com/Ortovoxx"><img src="https://avatars.githubusercontent.com/u/56805259?v=4" title="Ortovoxx" width="60" height="60"></a>
<a href="https://github.com/purushu007"><img src="https://avatars.githubusercontent.com/u/70796763?v=4" title="Purushu" width="60" height="60"></a>
<a href="https://github.com/cabello"><img src="https://avatars.githubusercontent.com/u/60936?v=4" title="Danilo Cabello" width="60" height="60"></a>
<a href="https://github.com/Goudarz"><img src="https://avatars.githubusercontent.com/u/3191949?v=4" title="Goudarz" width="60" height="60"></a>
<a href="https://github.com/ragnarkurm"><img src="https://avatars.githubusercontent.com/u/5205088?v=4" title="Ragnar Kurm" width="60" height="60"></a>
<a href="https://github.com/emilebosch"><img src="https://avatars.githubusercontent.com/u/303135?v=4" title="Emile Bosch" width="60" height="60"></a>
<a href="https://github.com/killerrin"><img src="https://avatars.githubusercontent.com/u/3269687?v=4" title="killerrin" width="60" height="60"></a>
<a href="https://github.com/acm-will"><img src="https://avatars.githubusercontent.com/u/103984058?v=4" title="acm-will" width="60" height="60"></a>
<a href="https://github.com/sukharenko"><img src="https://avatars.githubusercontent.com/u/2049036?v=4" title="Yevgen Sukharenko" width="60" height="60"></a>
<a href="https://github.com/pbaumard"><img src="https://avatars.githubusercontent.com/u/6176006?v=4" title="Pierre Baumard" width="60" height="60"></a>
<a href="https://github.com/brenjt"><img src="https://avatars.githubusercontent.com/u/1713885?v=4" title="Brennan" width="60" height="60"></a>
<a href="https://github.com/chris-at-fabius-labs"><img src="https://avatars.githubusercontent.com/u/108754665?v=4" title="chris-at-fabius-labs" width="60" height="60"></a>
<a href="https://github.com/ssaaiidd"><img src="https://avatars.githubusercontent.com/u/29234802?v=4" title="ssaaiidd" width="60" height="60"></a>
<a href="https://github.com/c0rychu"><img src="https://avatars.githubusercontent.com/u/55235141?v=4" title="Cory Chu" width="60" height="60"></a>
<a href="https://github.com/jenniferbacon01"><img src="https://avatars.githubusercontent.com/u/28692326?v=4" title="Jenny Bacon" width="60" height="60"></a>
<a href="https://github.com/Denperidge"><img src="https://avatars.githubusercontent.com/u/27348469?v=4" title="Cat" width="60" height="60"></a>
<a href="https://github.com/julamb"><img src="https://avatars.githubusercontent.com/u/3592718?v=4" title="julamb" width="60" height="60"></a>
<a href="https://github.com/ameliabradley"><img src="https://avatars.githubusercontent.com/u/597352?v=4" title="Amelia Bradley" width="60" height="60"></a>
<a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4" title="dependabot[bot]" width="60" height="60"></a>

<br />
