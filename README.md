# I18N-static-website

I18N-static-website

## basic start-up in developer mode and in distribution mode

```node

$ npm run start
$ npm run build

```

## It will interact with all kind of translation tags like

- [x] data-lang (for default usage)
- [x] data-lang-title (for optional attribute settings usage)
- [x] data-lang-title-alt ( for advanced usage )

# Usage

## Basic Initialization

> Note: the attribute data-lang needs to be present in medium and advanced use-case to work properly

-import script in your page

```js
<script defer="defer" src="js/I18N.bundle.js"></script>
```

-Initial configuration

```js
<script>
        const initOptI18N = {
            lng: "it",
            fallbackLng: 'it',
            debug: false,
            whiteList: ['it', 'en'],
            backend: {
                // load from i18next-gitbook repo
                loadPath: "./locales/{{lng}}/{{ns}}.json",
                crossDomain: true,
            }
        };
    </script>
```

## How to Use Functions

-You can access function using I18N name

```js
<button onClick="I18N.changeLng('en')">english</button>
```

## How to get translation running

### Basic case

#### Input HTML

```html
<div data-lang="keyForTranslation"></div>
```

#### Output HTML

```html
<div data-lang="keyForTranslation">Hi in English</div>
```

### Medium case

#### Input HTML

```html
<div id="1" data-lang data-lang-title="keyForTranslation"></div>
<div
  id="2"
  data-lang="keyForTranslation"
  data-lang-title="keyForTranslation"
></div>
```

#### Output HTML

```html
<div
  id="1"
  data-lang
  data-lang-title="keyForTranslation"
  title="Hi in English"
></div>
<div
  id="2"
  data-lang="keyForTranslation"
  data-lang="keyForTranslation"
  title="Hi in English"
>
  Hi in English
</div>
```

### Advanced case

#### Input HTML

```html
<div id="1" data-lang data-lang-title="keyForTranslation"></div>
<div
  id="2"
  data-lang="keyForTranslation"
  data-lang-title="keyForTranslation"
></div>
<div id="3" data-lang data-lang-title-alt="keyForTranslation"></div>
<div
  id="4"
  data-lang
  data-lang-title="keyForTranslation"
  data-lang-alt="keyForTranslation"
></div>
```

#### Output HTML

```html
<div
  id="1"
  data-lang
  data-lang-title="keyForTranslation"
  title="Hi in English"
></div>
<div
  id="2"
  data-lang="keyForTranslation"
  data-lang="keyForTranslation"
  title="Hi in English"
>
  Hi in English
</div>
<div
  id="3"
  data-lang
  data-lang-title-alt="keyForTranslation"
  title="Hi in English"
  alt="Hi in English"
></div>
<div
  id="4"
  data-lang
  data-lang-title-alt="keyForTranslation"
  title="Hi in English"
  alt="Hi in English"
></div>
```
