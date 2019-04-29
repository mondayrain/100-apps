# CSS Grid

2-dimensional layout system, meaning it can handle both coumns and rows. Historically, we hacked around supporting this with tables, floats, and even the new Flexbox which is a 1-dimensional system.

Meant to be used _with_ flexboc.

### Browser Support

As of 2017 most browsers have shipped native, unprefixed support.

### Usage

Like flexbox, we define a container element as a grid with `display: grid`.

Like flexbox, source order of the grid items don't matter; CSS can place them in any order (which makes it easy to rearrange grid with media queries!)

Guide:
https://css-tricks.com/snippets/css/complete-guide-grid/