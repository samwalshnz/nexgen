# nexgen
Get the current song on a radio station using NexGen

## Installation

Simplest way to install `nexgen` is to use [npm](https://npmjs.com).

Just run `npm install nexgen` which will download `nexgen` and all it's dependencies.

## Usage

Simply require `nexgen` in your code

```
var Nexgen = require('nexgen');
```

Then create an instance of `Nexgen`, passing the URL of the nexgen 'API'.

```
var nexgen = new Nexgen('http://www.theedge.co.nz/Portals/0/Inbound/NowPlaying/NowPlaying.aspx?rand=5478005029726774');
```

> Note: If you don't know how to find this URL, open up your browser's inspector tool when listening to the radio live on their website, then look for an XHR request with the url ending with something like `NowPlaying.apsx`. That is the URL for the XML 'API' that we'll use.'

##### Current Song/Track

```
nexgen.current(function(track) {
    console.log(`Currently playing {track.title} by {track.artist}`);
});
```

##### Next Song/Track

```
nexgen.next(function(track) {
    console.log(`Next song will be {track.title} by {track.artist}`);
});
```
