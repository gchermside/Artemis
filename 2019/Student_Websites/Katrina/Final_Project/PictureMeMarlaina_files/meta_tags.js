(function () {
    var _0x1d18e1;
    if (window['ia']['ma']) {
        _0x1d18e1 = window['ia']['ma']['q'];
    }
    window['ia']['ma'] = function () {
        var _0x3ec0e6 = arguments[0x0];
        var _0x58810b = 'TAG';
        var _0x133aa3 = '0.34.1';
        if (_0x3ec0e6 === 'load') {
            var _0xcbb496 = document['getElementsByTagName']('meta');
            var _0x5d75c8 = 0x0;
            var _0x57d761 = window.jQInv('div[id*=article],\x20div[class*=article],\x20article');
            window.jQInv['each'](_0x57d761, function (_0x4a2439, _0x14c363) {
                var _0x90a93d = _0x14c363['innerText']['split']('\x20')['length'];
                _0x5d75c8 += _0x90a93d;
            });
            var _0xeb0463 = [];
            var _0x46ca03 = [];
            var _0x2e24fd = 0x0;
            for (_0x2e24fd = 0x0; _0x2e24fd < _0xcbb496['length']; _0x2e24fd++) {
                try {
                    if (_0xcbb496[_0x2e24fd]['getAttribute']('name') || _0xcbb496[_0x2e24fd]['getAttribute']('property')) {
                        var _0x119263 = {
                            'name': _0xcbb496[_0x2e24fd]['getAttribute']('name') || _0xcbb496[_0x2e24fd]['getAttribute']('property'),
                            'content': _0xcbb496[_0x2e24fd]['getAttribute']('content')
                        };
                        _0xeb0463['push'](_0x119263);
                    }
                } catch (_0x3dcc6e) { }
            }
            if (_0x5d75c8 > 0x0) {
                var _0x5ea710 = {
                    'name': 'wordcount',
                    'content': _0x5d75c8
                };
                _0xeb0463['push'](_0x5ea710);
            }
            if (_0xeb0463['length'] > 0x0) {
                window['ia']['sendEvent']('META_TAGS', _0xeb0463, _0x58810b, _0x133aa3);
            }
        }
    }
        ;
    if (_0x1d18e1) {
        var _0x322dca = 0x0;
        for (_0x322dca = 0x0; _0x322dca < _0x1d18e1['length']; _0x322dca++) {
            window['ia']['ma']['apply'](null, _0x1d18e1[_0x322dca]);
        }
    }
    window['ia']('track', 'META_TAGS');
}());
