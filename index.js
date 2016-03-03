var xml = require('xml2js');
var request = require('request');

var Nexgen = function (url) {

    var nexgen = {};

    var getData = function (cb) {
        request(url, function (err, resp, body) {
            convertXml(body, function (data) {
                cb(data);
            });
        });
    };

    var convertXml = function (xmlStr, cb) {
        xml.parseString(xmlStr, function (err, data) {
            cb(data.nexgen_audio_export.audio);
        });
    };

    var transformTrack = function (data, cb) {
        var track = {};

        track.title = data.title;
        track.artist = data.artist;

        cb(track);
    };

    var currentTrack = function (cb) {
        getData(function (tracks) {
            transformTrack(tracks[0], function (track) {
                cb(track);
            })
        })
    };

    var nextTrack = function (cb) {
        getData(function (tracks) {
            transformTrack(tracks[1], function (track) {
                cb(track);
            })
        })
    };

    nexgen.current = currentTrack;
    nexgen.next = nextTrack;

    return nexgen;
};

module.exports = Nexgen;