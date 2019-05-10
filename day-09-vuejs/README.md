# Vue.js

### What is it?

A JavaScript "progressive" front-end framework / ecosystem

- Can be used as a library or full-featured framework, so it can be incrementally adoptable
- Lets you split up your website into reusable components (each having its own HTML, CSS, and JavaScript)
- Core library is focused on the view layer only (like React)
- Lets you plug a Vue root element anywhere you want (so you can use is as part of an existing non-Vue website or web app)
- It uses directives & uses 2-way binding(like Angular) to tell elements how to behave
- Has other tooling & supporting libs that makes it capable of powering an SPA

[Comparison to other frameworks](https://vuejs.org/v2/guide/comparison.html)

[Vue Introduction](https://vuejs.org/v2/guide/)

### Details

Directives are prefixed with `v-`, and they apply special reactive behaviour to the rendered DOM element.

e.g.

```
<span v-bind:title='message'></span>
```

^ This `v-bind:{attribute}` directive is telling Vue to bind this DOM attribute's value to the data we provide it under the `message` key.

```
<span v-if="some>
```

^ This `v-if` directive says to only render this if the given property (in our case, `some`) evaluates to true.

```
<ol>
  <li v-for="item in arrayProvided">
    {{ item.text }}
  </li>
</ol>
```

^ This loops through each item in the object provided

