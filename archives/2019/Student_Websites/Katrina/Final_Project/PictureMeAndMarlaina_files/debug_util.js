var _0x1c3b = [
  "debugGetMessage",
  "responseType",
  "text",
  "onload",
  "parse",
  "responseText",
  "withCredentials",
  "send",
  "stringify",
  "payload\x20sent\x20",
  "pubSiteDetailsResponse",
  "deal_id_arr",
  "log",
  "toString",
  "load",
  "split",
  "length",
  "join",
  "site_id",
  "location",
  "href",
  "hostname",
  "screen",
  "adtype",
  "size",
  "innerHeight",
  "xpath",
  "containermetadata",
  "placement",
  "init\x20of\x20debug",
  "then",
  "response\x20of\x20getDebugMessage",
  "playVideo",
  "debugInfo",
  "status",
  "adTemplate",
  "render",
  "catch",
  "unable\x20to\x20resolve\x20getDebugMessage",
  "open",
  "https://cd-core.pymx5.com/v2/"
];
(function(_0x3fe2ed, _0x463058) {
  var _0x5a2fcc = function(_0x43a749) {
    while (--_0x43a749) {
      _0x3fe2ed["push"](_0x3fe2ed["shift"]());
    }
  };
  _0x5a2fcc(++_0x463058);
})(_0x1c3b, 0x129);
var _0x2316 = function(_0x2f3e31, _0x3a89c9) {
  _0x2f3e31 = _0x2f3e31 - 0x0;
  var _0x2c6db2 = _0x1c3b[_0x2f3e31];
  return _0x2c6db2;
};
var debugMode = (function() {
  let _0x37f285 = ims[_0x2316("0x0")];
  let _0x5b606e = ims[_0x2316("0x1")];
  let _0x21c007 = ims["markersList"];
  console[_0x2316("0x2")](_0x37f285);
  init = function(_0x2336c5, _0x18e7f4) {
    let _0x27abbc = new Date()[_0x2316("0x3")]();
    var _0x52b12b = adRequest[_0x2316("0x4")]();
    _0x27abbc = _0x27abbc[_0x2316("0x5")]("\x20");
    _0x27abbc[_0x2316("0x6")] = 0x6;
    _0x27abbc = _0x27abbc[_0x2316("0x7")]("\x20");
    _0x27abbc = encodeURIComponent(_0x27abbc);
    let _0x2e418b = {
      site: {
        siteid: _0x37f285 ? _0x37f285[_0x2316("0x8")] : null,
        pageurl: window[_0x2316("0x9")][_0x2316("0xa")],
        domain: window[_0x2316("0x9")][_0x2316("0xb")]
      },
      screenresolution:
        window[_0x2316("0xc")]["availWidth"] +
        "x" +
        window["screen"]["availHeight"],
      tabsize: _0x52b12b[0x0] + "x" + _0x52b12b[0x1],
      timezone: _0x27abbc,
      filter: { deals: { dealIds: _0x5b606e, forced: ![] } },
      placement: {
        adtype: _0x37f285 ? _0x37f285[_0x2316("0xd")] : null,
        size: _0x37f285 ? _0x37f285[_0x2316("0xe")] : null
      },
      markers: _0x21c007[_0x2316("0x6")] > 0x0 ? _0x21c007 : null,
      viewportsize: { h: window[_0x2316("0xf")], w: window["innerWidth"] },
      containermetadata: {
        id: _0x37f285 ? _0x37f285["element_id"] : null,
        xpath: _0x37f285 ? _0x37f285[_0x2316("0x10")] : null,
        h:
          _0x37f285 && _0x37f285[_0x2316("0x11")]
            ? _0x37f285[_0x2316("0x11")]["h"]
            : null,
        w:
          _0x37f285 && _0x37f285["containermetadata"]
            ? _0x37f285["containermetadata"]["w"]
            : null
      }
    };
    if (
      _0x2e418b[_0x2316("0x12")] &&
      _0x2e418b[_0x2316("0x12")][_0x2316("0xd")] !== "in-stream"
    ) {
      delete _0x2e418b[_0x2316("0x12")];
    }
    if (_0x2336c5 && _0x18e7f4) {
      _0x2e418b[_0x2336c5] = _0x18e7f4;
    }
    console["log"](_0x2316("0x13"), _0x2e418b);
    invokeGetDebugMessage(_0x2e418b)
      [_0x2316("0x14")](_0x18e7f4 => {
        console[_0x2316("0x2")](_0x2316("0x15"), _0x18e7f4);
        if (_0x18e7f4["status"] === 0x0 && _0x37f285) {
          ImsSDK[_0x2316("0x16")]();
        }
        if (_0x18e7f4[_0x2316("0x17")]) {
          console[_0x2316("0x2")]("debug", _0x18e7f4[_0x2316("0x17")]);
        }
        if (_0x18e7f4[_0x2316("0x18")]) {
          _0x18e7f4 = _0x18e7f4[_0x2316("0x19")];
          adRequest[_0x2316("0x1a")](_0x18e7f4);
        }
      })
      [_0x2316("0x1b")](_0x114a81 => {
        console[_0x2316("0x2")](_0x2316("0x1c"), _0x114a81);
      });
  };
  invokeGetDebugMessage = function(_0xc0cf1b) {
    return new Promise((_0x178731, _0xb8faa) => {
      let _0x531c34 = new XMLHttpRequest();
      _0x531c34[_0x2316("0x1d")](
        "POST",
        _0x2316("0x1e") + _0x2316("0x1f"),
        !![]
      );
      _0x531c34[_0x2316("0x20")] = _0x2316("0x21");
      _0x531c34[_0x2316("0x22")] = function() {
        if (this[_0x2316("0x18")] === 0xc8) {
          let _0x40196d = JSON[_0x2316("0x23")](_0x531c34[_0x2316("0x24")]);
          _0x178731(_0x40196d);
        }
      };
      _0x531c34[_0x2316("0x25")] = !![];
      _0x531c34[_0x2316("0x26")](JSON[_0x2316("0x27")](_0xc0cf1b));
      console["log"](_0x2316("0x28"), _0xc0cf1b);
    });
  };
  return { init: init };
})();
