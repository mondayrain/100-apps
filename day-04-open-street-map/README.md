# OpenStreetMap (OSM) & Map Stacks

Collaborative project to create a _free_, _editable_ map of the world. The main project output is the data, rather than the maps (which are secondary).

Runs on "volunteered geographic information", inspired by Wikipedia.

Crowdsourced data is made available under the [Open Database License](https://en.wikipedia.org/wiki/Open_Database_License).

### Data Production

Map data is collected by volunteers performing systematic ground surveys with handheld GPS units, notebooks, cameras, voice recorders, etc. Then this is enetered in to the OpenStreetMap database.

There are [Mapathon](https://en.wikipedia.org/wiki/Mapathon) events too!

### Data Format

There are 4 core primitives
- Nodes (points, stored as coordinates)
- Ways (ordered lists of nodes, which are for linear features like streets and rivers)
- Rlations (ordered lists of nodes, represents the relationship)
- Tags (key-value pairs of arbitrary string for storing metadata about map objects)


### Map Stacks

If you want to display maps in an application, the entire "Map Stack" is made up of 4 parts:

1) The Browser UI

An example of this is OpenLayers. It is a browser mapping UI library that will take care of requesting tiles from the tile server for you while displaying a "slippy" map. When users zoom in or out, or scroll, new "tiles" of the map need to dynamically be requested and re-rendered, which are fetched from the...

2) Tile Cache

A server that sits between the browser and the map server. Its job is to be able to quickly return the needed tile to the client from the cache. Technically not needed in the map stack, but without it we'd hit the map server directly which is expensive.

Most popular open source tile cache application is called... TileCache!

3) Map Server

App that takes raw geospatial data as input and renders graphical output. As part of the map stack, this would mean that it spits out the "map tiles" that the Tile Cache returns to the borwser. These tiles are uniformly sized graphic files.

This is also where you can define the style of the map. A lot of map servers take stylesheets that are a lot like CSS.

Mapnik is most likely the most popular open source map server.

4) Raw Geospatial Data

This is where OSM data comes in. This is the raw data in .osm or .xml format, which is fed into the map server to create map tiles.

### Developing

https://alistapart.com/article/takecontrolofyourmaps/

https://wiki.openstreetmap.org/wiki/Develop

https://switch2osm.org/why-switch/
