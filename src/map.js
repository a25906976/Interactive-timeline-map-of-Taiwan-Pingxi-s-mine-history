const eventPin = L.icon({
  iconSize: [60, 60],
  //iconAnchor: [22,45],
  //popupAnchor: [1, -24],
  iconUrl: "./src/idea.png",
});
const trainPin = L.icon({
  iconSize: [45, 45],
  //iconAnchor: [22,45],
  //popupAnchor: [1, -24],
  iconUrl: "./src/train.png",
});
const minePin = L.icon({
  iconSize: [35, 35],
  //iconAnchor: [22,45],
  //popupAnchor: [1, -24],
  iconUrl: "./src/mining.png",
});
const normalPin = L.icon({
  iconSize: [35, 35],
  //iconAnchor: [22,45],
  //popupAnchor: [1, -24],
  iconUrl: "./src/close.png",
});

const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1918", "1918"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p style='color:blue;'>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1919", "1938"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1939", "1939"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>  <p style='color:blue;'> 1939\u5e74\uff1a\u5728\u77f3\u5e95\u5927\u659c\u5751\u958b\u901a\u7522\u7164\u63a1\u96c6\u4e2d\u904b\u9001\u51fa\u5751\u5f8c,\u66fe\u4e00\u5ea6\u505c\u63a1\u505a\u70ba\u5927\u659c\u5751\u6392\u6c34\u5751,\u53e6\u4e5f\u4f5c\u6392\u6c23\u5751\u53ca\u901a\u884c\u7528\u5751\u9053\u3002 <p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1940", "1945"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>  <p> 1939\u5e74\uff1a\u5728\u77f3\u5e95\u5927\u659c\u5751\u958b\u901a\u7522\u7164\u63a1\u96c6\u4e2d\u904b\u9001\u51fa\u5751\u5f8c,\u66fe\u4e00\u5ea6\u505c\u63a1\u505a\u70ba\u5927\u659c\u5751\u6392\u6c34\u5751,\u53e6\u4e5f\u4f5c\u6392\u6c23\u5751\u53ca\u901a\u884c\u7528\u5751\u9053\u3002 <p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1946", "1946"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>  <p> 1939\u5e74\uff1a\u5728\u77f3\u5e95\u5927\u659c\u5751\u958b\u901a\u7522\u7164\u63a1\u96c6\u4e2d\u904b\u9001\u51fa\u5751\u5f8c,\u66fe\u4e00\u5ea6\u505c\u63a1\u505a\u70ba\u5927\u659c\u5751\u6392\u6c34\u5751,\u53e6\u4e5f\u4f5c\u6392\u6c23\u5751\u53ca\u901a\u884c\u7528\u5751\u9053\u3002 <p>  <p style='color:blue;'>  1946\u5e74\uff1a\u91cd\u65b0\u958b\u63a1\u3002 <p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1947", "1971"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>  <p> 1939\u5e74\uff1a\u5728\u77f3\u5e95\u5927\u659c\u5751\u958b\u901a\u7522\u7164\u63a1\u96c6\u4e2d\u904b\u9001\u51fa\u5751\u5f8c,\u66fe\u4e00\u5ea6\u505c\u63a1\u505a\u70ba\u5927\u659c\u5751\u6392\u6c34\u5751,\u53e6\u4e5f\u4f5c\u6392\u6c23\u5751\u53ca\u901a\u884c\u7528\u5751\u9053\u3002 <p>  <p>  1946\u5e74\uff1a\u91cd\u65b0\u958b\u63a1\u3002 <p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1972", "1972"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>  <p> 1939\u5e74\uff1a\u5728\u77f3\u5e95\u5927\u659c\u5751\u958b\u901a\u7522\u7164\u63a1\u96c6\u4e2d\u904b\u9001\u51fa\u5751\u5f8c,\u66fe\u4e00\u5ea6\u505c\u63a1\u505a\u70ba\u5927\u659c\u5751\u6392\u6c34\u5751,\u53e6\u4e5f\u4f5c\u6392\u6c23\u5751\u53ca\u901a\u884c\u7528\u5751\u9053\u3002 <p>  <p>  1946\u5e74\uff1a\u91cd\u65b0\u958b\u63a1\u3002 <p>  <p style='color:blue;'>   1972\u5e74\uff1a\u7d50\u675f\u71df\u904b\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1973", "1985"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>  <p> 1939\u5e74\uff1a\u5728\u77f3\u5e95\u5927\u659c\u5751\u958b\u901a\u7522\u7164\u63a1\u96c6\u4e2d\u904b\u9001\u51fa\u5751\u5f8c,\u66fe\u4e00\u5ea6\u505c\u63a1\u505a\u70ba\u5927\u659c\u5751\u6392\u6c34\u5751,\u53e6\u4e5f\u4f5c\u6392\u6c23\u5751\u53ca\u901a\u884c\u7528\u5751\u9053\u3002 <p>  <p>  1946\u5e74\uff1a\u91cd\u65b0\u958b\u63a1\u3002 <p>  <p>   1972\u5e74\uff1a\u7d50\u675f\u71df\u904b\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1987", "1987"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>  <p> 1939\u5e74\uff1a\u5728\u77f3\u5e95\u5927\u659c\u5751\u958b\u901a\u7522\u7164\u63a1\u96c6\u4e2d\u904b\u9001\u51fa\u5751\u5f8c,\u66fe\u4e00\u5ea6\u505c\u63a1\u505a\u70ba\u5927\u659c\u5751\u6392\u6c34\u5751,\u53e6\u4e5f\u4f5c\u6392\u6c23\u5751\u53ca\u901a\u884c\u7528\u5751\u9053\u3002 <p>  <p>  1946\u5e74\uff1a\u91cd\u65b0\u958b\u63a1\u3002 <p>  <p>   1972\u5e74\uff1a\u7d50\u675f\u71df\u904b\u3002<p> <p style='color:blue;'>   1987\u5e74\uff1a\u5c01\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72755, 25.03858],
      },
      properties: {
        title: ["1988", "2019"],
        content:
          "<h2> \u5e73\u6eaa\u7164\u7926 \uff08\u77f3\u5e95\u4e09\u5751\uff09 <h2>  <p>1918\u5e74\uff1a\u65e5\u672c\u4eba\u6d66\u7530\u5f65\u6b21\u90ce\u958b\u6d66\u7530\u5751,\u5c6c\u81fa\u967d\u5728\u5e73\u6eaa\u6700\u65e9\u7684\u7926\u5834\u3002<p>  <p> 1939\u5e74\uff1a\u5728\u77f3\u5e95\u5927\u659c\u5751\u958b\u901a\u7522\u7164\u63a1\u96c6\u4e2d\u904b\u9001\u51fa\u5751\u5f8c,\u66fe\u4e00\u5ea6\u505c\u63a1\u505a\u70ba\u5927\u659c\u5751\u6392\u6c34\u5751,\u53e6\u4e5f\u4f5c\u6392\u6c23\u5751\u53ca\u901a\u884c\u7528\u5751\u9053\u3002 <p>  <p>  1946\u5e74\uff1a\u91cd\u65b0\u958b\u63a1\u3002 <p>  <p>   1972\u5e74\uff1a\u7d50\u675f\u71df\u904b\u3002<p> <p>   1987\u5e74\uff1a\u5c01\u5751\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1955", "1955"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p style='color:blue;'>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1956", "1956"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1957", "1957"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p> <p style='color:blue;'> 1957\u5e74\uff1a\u6539\u7a31\u9752\u6850\u7164\u7926\uff0c\u958b\u59cb\u751f\u7522\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1958", "1971"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p> <p > 1957\u5e74\uff1a\u6539\u7a31\u9752\u6850\u7164\u7926\uff0c\u958b\u59cb\u751f\u7522\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1972", "1972"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p> <p > 1957\u5e74\uff1a\u6539\u7a31\u9752\u6850\u7164\u7926\uff0c\u958b\u59cb\u751f\u7522\u3002<p> <p style='color:blue;'>1972\u5e74\uff1a\u751f\u7522\u4f75\u5165\u77f3\u5e95\u7164\u7926\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1973", "1979"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p> <p > 1957\u5e74\uff1a\u6539\u7a31\u9752\u6850\u7164\u7926\uff0c\u958b\u59cb\u751f\u7522\u3002<p> <p >1972\u5e74\uff1a\u751f\u7522\u4f75\u5165\u77f3\u5e95\u7164\u7926\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1980", "1980"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p> <p > 1957\u5e74\uff1a\u6539\u7a31\u9752\u6850\u7164\u7926\uff0c\u958b\u59cb\u751f\u7522\u3002<p> <p >1972\u5e74\uff1a\u751f\u7522\u4f75\u5165\u77f3\u5e95\u7164\u7926\u3002<p>  <p style='color:blue;'>1980\u5e74\uff1a2\u67089\u65e5\u9752\u6850\u7164\u7926\u7926\u5751\u5167\u767c\u751f\u74e6\u65af\u7206\u70b8\uff0c\u9020\u621011\u4eba\u6b7b\u4ea1\uff0c\u7926\u696d\u7d93\u71df\u6108\u986f\u56f0\u96e3\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1981", "1987"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p> <p > 1957\u5e74\uff1a\u6539\u7a31\u9752\u6850\u7164\u7926\uff0c\u958b\u59cb\u751f\u7522\u3002<p> <p >1972\u5e74\uff1a\u751f\u7522\u4f75\u5165\u77f3\u5e95\u7164\u7926\u3002<p>  <p>1980\u5e74\uff1a2\u67089\u65e5\u9752\u6850\u7164\u7926\u7926\u5751\u5167\u767c\u751f\u74e6\u65af\u7206\u70b8\uff0c\u9020\u621011\u4eba\u6b7b\u4ea1\uff0c\u7926\u696d\u7d93\u71df\u6108\u986f\u56f0\u96e3\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1988", "1988"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p> <p > 1957\u5e74\uff1a\u6539\u7a31\u9752\u6850\u7164\u7926\uff0c\u958b\u59cb\u751f\u7522\u3002<p> <p >1972\u5e74\uff1a\u751f\u7522\u4f75\u5165\u77f3\u5e95\u7164\u7926\u3002<p>  <p>1980\u5e74\uff1a2\u67089\u65e5\u9752\u6850\u7164\u7926\u7926\u5751\u5167\u767c\u751f\u74e6\u65af\u7206\u70b8\uff0c\u9020\u621011\u4eba\u6b7b\u4ea1\uff0c\u7926\u696d\u7d93\u71df\u6108\u986f\u56f0\u96e3\u3002<p> <p style='color:blue;'>1988\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72108, 25.02038],
      },
      properties: {
        title: ["1989", "2019"],
        content:
          "<h2>\u9752\u6850\u7164\u7926\uff08\u77f3\u5e95\u65b0\u5751\uff09 <h2> <p>1955\u5e74\uff1a\u63a5\u53d7\u7f8e\u63f4\u8cb8\u6b3e\u5354\u52a9\u958b\u5751,\u539f\u7a31\u767d\u77f3\u8173\u7164\u7926\u3001\u77f3\u5e95\u65b0\u5751\u3002<p> <p > 1957\u5e74\uff1a\u6539\u7a31\u9752\u6850\u7164\u7926\uff0c\u958b\u59cb\u751f\u7522\u3002<p> <p >1972\u5e74\uff1a\u751f\u7522\u4f75\u5165\u77f3\u5e95\u7164\u7926\u3002<p>  <p>1980\u5e74\uff1a2\u67089\u65e5\u9752\u6850\u7164\u7926\u7926\u5751\u5167\u767c\u751f\u74e6\u65af\u7206\u70b8\uff0c\u9020\u621011\u4eba\u6b7b\u4ea1\uff0c\u7926\u696d\u7d93\u71df\u6108\u986f\u56f0\u96e3\u3002<p> <p>1988\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80896, 25.04729],
      },
      properties: {
        title: ["1947", "1947"],
        content:
          "<h2> \u78a9\u4ec1\u7164\u7926 <h2> <p style='color:blue;'> 1947\u5e74\uff1a\u7531\u5ed6\u5317\u6a1e\u958b\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80896, 25.04729],
      },
      properties: {
        title: ["1948", "1952"],
        content:
          "<h2> \u78a9\u4ec1\u7164\u7926 <h2> <p> 1947\u5e74\uff1a\u7531\u5ed6\u5317\u6a1e\u958b\u63a1\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80896, 25.04729],
      },
      properties: {
        title: ["1953", "1953"],
        content:
          "<h2> \u78a9\u4ec1\u7164\u7926 <h2> <p> 1947\u5e74\uff1a\u7531\u5ed6\u5317\u6a1e\u958b\u63a1\u3002<p> <p style='color:blue;'>  1953\u5e74\uff1a\u81fa\u967d\u6536\u56de\u76f4\u71df\u4e26\u8207\u5ed6\u5317\u6a1e\u5408\u8fa6\u3002 <p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80896, 25.04729],
      },
      properties: {
        title: ["1954", "1968"],
        content:
          "<h2> \u78a9\u4ec1\u7164\u7926 <h2> <p> 1947\u5e74\uff1a\u7531\u5ed6\u5317\u6a1e\u958b\u63a1\u3002<p>1953\u5e74\uff1a\u81fa\u967d\u6536\u56de\u76f4\u71df\u4e26\u8207\u5ed6\u5317\u6a1e\u5408\u8fa6\u3002 <p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80896, 25.04729],
      },
      properties: {
        title: ["1969", "1969"],
        content:
          "<h2> \u78a9\u4ec1\u7164\u7926 <h2> <p> 1947\u5e74\uff1a\u7531\u5ed6\u5317\u6a1e\u958b\u63a1\u3002<p>1953\u5e74\uff1a\u81fa\u967d\u6536\u56de\u76f4\u71df\u4e26\u8207\u5ed6\u5317\u6a1e\u5408\u8fa6\u3002 <p>  <p style='color:blue;'>   1969\u5e74\uff1a\u6536\u5751,\u7e3d\u7522\u91cf\u70ba358,843\u516c\u5678\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80896, 25.04729],
      },
      properties: {
        title: ["1970", "2019"],
        content:
          "<h2> \u78a9\u4ec1\u7164\u7926 <h2> <p> 1947\u5e74\uff1a\u7531\u5ed6\u5317\u6a1e\u958b\u63a1\u3002<p>1953\u5e74\uff1a\u81fa\u967d\u6536\u56de\u76f4\u71df\u4e26\u8207\u5ed6\u5317\u6a1e\u5408\u8fa6\u3002 <p>  <p>   1969\u5e74\uff1a\u6536\u5751,\u7e3d\u7522\u91cf\u70ba358,843\u516c\u5678\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.69719, 25.01978],
      },
      properties: {
        title: ["1919", "1919"],
        content:
          "<h2> \u77f3\u5e95\u4e94\u5751\uff08\u81fa\u8aa0\u7164\u7926\uff09 <h2>  <p style='color:blue;'>  1919\u5e74\uff1a\u7531\u57fa\u9686\u70ad\u7926\u682a\u5f0f\u6703\u793e\u8a2d\u7acb\u7926\u6b0a,\u7926\u5340\u77f3\u7887\u9109\u54e1\u6f6d\u5b50\u5751\u3001\u96d9\u6eaa\u3001\u6392\u5bee\u3001\u7389\u6842\u5dba\u3001\u5927\u6eaa\u5898\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.69719, 25.01978],
      },
      properties: {
        title: ["1920", "1938"],
        content:
          "<h2> \u77f3\u5e95\u4e94\u5751\uff08\u81fa\u8aa0\u7164\u7926\uff09 <h2>  <p'>  1919\u5e74\uff1a\u7531\u57fa\u9686\u70ad\u7926\u682a\u5f0f\u6703\u793e\u8a2d\u7acb\u7926\u6b0a,\u7926\u5340\u77f3\u7887\u9109\u54e1\u6f6d\u5b50\u5751\u3001\u96d9\u6eaa\u3001\u6392\u5bee\u3001\u7389\u6842\u5dba\u3001\u5927\u6eaa\u5898\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.69719, 25.01978],
      },
      properties: {
        title: ["1939", "1939"],
        content:
          "<h2> \u77f3\u5e95\u4e94\u5751\uff08\u81fa\u8aa0\u7164\u7926\uff09 <h2>  <p'>  1919\u5e74\uff1a\u7531\u57fa\u9686\u70ad\u7926\u682a\u5f0f\u6703\u793e\u8a2d\u7acb\u7926\u6b0a,\u7926\u5340\u77f3\u7887\u9109\u54e1\u6f6d\u5b50\u5751\u3001\u96d9\u6eaa\u3001\u6392\u5bee\u3001\u7389\u6842\u5dba\u3001\u5927\u6eaa\u5898\u3002<p> <p style='color:blue;'>  1939\u5e74\uff1a\u8f49\u70ba\u81fa\u967d\u945b\u696d\u682a\u5f0f\u6703\u793e,\u5c6c\u65bc\u81fa\u967d\u516c\u53f8\u77f3\u5e95\u7164\u7530\u958b\u767c\u4e4b\u65e9\u5e74\uff081927\u5e74\uff09\u958b\u63a1\u4e4b\u7926\u5340\u3002\u8f49\u4f5c\u70ba\u77f3\u5e95\u5927\u659c\u5751\u6392\u6c23\u5751\u4f7f\u7528\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.69719, 25.01978],
      },
      properties: {
        title: ["1940", "1998"],
        content:
          "<h2> \u77f3\u5e95\u4e94\u5751\uff08\u81fa\u8aa0\u7164\u7926\uff09 <h2>  <p'>  1919\u5e74\uff1a\u7531\u57fa\u9686\u70ad\u7926\u682a\u5f0f\u6703\u793e\u8a2d\u7acb\u7926\u6b0a,\u7926\u5340\u77f3\u7887\u9109\u54e1\u6f6d\u5b50\u5751\u3001\u96d9\u6eaa\u3001\u6392\u5bee\u3001\u7389\u6842\u5dba\u3001\u5927\u6eaa\u5898\u3002<p> <p>  1939\u5e74\uff1a\u8f49\u70ba\u81fa\u967d\u945b\u696d\u682a\u5f0f\u6703\u793e,\u5c6c\u65bc\u81fa\u967d\u516c\u53f8\u77f3\u5e95\u7164\u7530\u958b\u767c\u4e4b\u65e9\u5e74\uff081927\u5e74\uff09\u958b\u63a1\u4e4b\u7926\u5340\u3002\u8f49\u4f5c\u70ba\u77f3\u5e95\u5927\u659c\u5751\u6392\u6c23\u5751\u4f7f\u7528\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.69719, 25.01978],
      },
      properties: {
        title: ["2000", "2000"],
        content:
          "<h2> \u77f3\u5e95\u4e94\u5751\uff08\u81fa\u8aa0\u7164\u7926\uff09 <h2>  <p'>  1919\u5e74\uff1a\u7531\u57fa\u9686\u70ad\u7926\u682a\u5f0f\u6703\u793e\u8a2d\u7acb\u7926\u6b0a,\u7926\u5340\u77f3\u7887\u9109\u54e1\u6f6d\u5b50\u5751\u3001\u96d9\u6eaa\u3001\u6392\u5bee\u3001\u7389\u6842\u5dba\u3001\u5927\u6eaa\u5898\u3002<p> <p>  1939\u5e74\uff1a\u8f49\u70ba\u81fa\u967d\u945b\u696d\u682a\u5f0f\u6703\u793e,\u5c6c\u65bc\u81fa\u967d\u516c\u53f8\u77f3\u5e95\u7164\u7530\u958b\u767c\u4e4b\u65e9\u5e74\uff081927\u5e74\uff09\u958b\u63a1\u4e4b\u7926\u5340\u3002\u8f49\u4f5c\u70ba\u77f3\u5e95\u5927\u659c\u5751\u6392\u6c23\u5751\u4f7f\u7528\u3002<p>  <p style='color:blue;'>  2000\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.69719, 25.01978],
      },
      properties: {
        title: ["2001", "2019"],
        content:
          "<h2> \u77f3\u5e95\u4e94\u5751\uff08\u81fa\u8aa0\u7164\u7926\uff09 <h2>  <p'>  1919\u5e74\uff1a\u7531\u57fa\u9686\u70ad\u7926\u682a\u5f0f\u6703\u793e\u8a2d\u7acb\u7926\u6b0a,\u7926\u5340\u77f3\u7887\u9109\u54e1\u6f6d\u5b50\u5751\u3001\u96d9\u6eaa\u3001\u6392\u5bee\u3001\u7389\u6842\u5dba\u3001\u5927\u6eaa\u5898\u3002<p> <p>  1939\u5e74\uff1a\u8f49\u70ba\u81fa\u967d\u945b\u696d\u682a\u5f0f\u6703\u793e,\u5c6c\u65bc\u81fa\u967d\u516c\u53f8\u77f3\u5e95\u7164\u7530\u958b\u767c\u4e4b\u65e9\u5e74\uff081927\u5e74\uff09\u958b\u63a1\u4e4b\u7926\u5340\u3002\u8f49\u4f5c\u70ba\u77f3\u5e95\u5927\u659c\u5751\u6392\u6c23\u5751\u4f7f\u7528\u3002<p>  <p >  2000\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.71249, 25.02219],
      },
      properties: {
        title: ["1923", "1923"],
        content:
          "<h2> \u77f3\u5e95\u4e00\u5751 <h2> <p style='color:blue;'> 1923\u5e74\uff1a\u958b\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.71249, 25.02219],
      },
      properties: {
        title: ["1926", "1937"],
        content:
          "<h2> \u77f3\u5e95\u4e00\u5751 <h2> <p > 1923\u5e74\uff1a\u958b\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.71249, 25.02219],
      },
      properties: {
        title: ["1938", "1938"],
        content:
          "<h2> \u77f3\u5e95\u4e00\u5751 <h2> <p > 1923\u5e74\uff1a\u958b\u5751\u3002<p> <p style='color:blue;'> 1938\u5e74\uff1a\u5ee2\u6b62\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.71249, 25.02219],
      },
      properties: {
        title: ["1939", "1939"],
        content:
          "<h2> \u77f3\u5e95\u4e00\u5751 <h2> <p > 1923\u5e74\uff1a\u958b\u5751\u3002<p><p > 1938\u5e74\uff1a\u5ee2\u6b62\u3002<p>  <p style='color:blue;'> 1939\u5e74\uff1a\u52a0\u5165\u77f3\u5e95\u5927\u659c\u5751\u4e4b\u751f\u7522\u5f8c,\u539f\u5751\u5247\u6539\u70ba\u5927\u659c\u5751\u4e4b\u5165\u6c23\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.71249, 25.02219],
      },
      properties: {
        title: ["1940", "2019"],
        content:
          "<h2> \u77f3\u5e95\u4e00\u5751 <h2> <p > 1923\u5e74\uff1a\u958b\u5751\u3002<p><p > 1938\u5e74\uff1a\u5ee2\u6b62\u3002<p>  <p> 1939\u5e74\uff1a\u52a0\u5165\u77f3\u5e95\u5927\u659c\u5751\u4e4b\u751f\u7522\u5f8c,\u539f\u5751\u5247\u6539\u70ba\u5927\u659c\u5751\u4e4b\u5165\u6c23\u5751\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72117, 25.02351],
      },
      properties: {
        title: ["1928", "1928"],
        content:
          "<h2> \u77f3\u5e95\u4e8c\u5751 <h2> <p style='color:blue;'> 1928\u5e74\uff1a\u958b\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72117, 25.02351],
      },
      properties: {
        title: ["1929", "1938"],
        content:
          "<h2> \u77f3\u5e95\u4e8c\u5751 <h2> <p > 1928\u5e74\uff1a\u958b\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72117, 25.02351],
      },
      properties: {
        title: ["1939", "1939"],
        content:
          "<h2> \u77f3\u5e95\u4e8c\u5751 <h2> <p > 1928\u5e74\uff1a\u958b\u5751\u3002<p> <p style='color:blue;'> 1939\u5e74\uff1a\u5927\u659c\u5751\u958b\u5751\u5f8c,\u4e8c\u5751\u6539\u70ba\u4e2d\u592e\u6392\u6c23\u5751,\u76f4\u81f31975\u5e74\u5927\u659c\u5751\u5ee2\u5751,\u4e8c\u5751\u91cd\u65b0\u958b\u63a1\u9632\u6c34\u70ad\u58c1\u90e8\u5206\u4e4b\u7164\u7926,\u6062\u5fa9\u5ee2\u68c4\u81fa\u8eca\u9053,\u958b\u63a1\u81f31987\u5e74\u70ba\u6b62\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72117, 25.02351],
      },
      properties: {
        title: ["1940", "1959"],
        content:
          "<h2> \u77f3\u5e95\u4e8c\u5751 <h2> <p > 1928\u5e74\uff1a\u958b\u5751\u3002<p> <p> 1939\u5e74\uff1a\u5927\u659c\u5751\u958b\u5751\u5f8c,\u4e8c\u5751\u6539\u70ba\u4e2d\u592e\u6392\u6c23\u5751,\u76f4\u81f31975\u5e74\u5927\u659c\u5751\u5ee2\u5751,\u4e8c\u5751\u91cd\u65b0\u958b\u63a1\u9632\u6c34\u70ad\u58c1\u90e8\u5206\u4e4b\u7164\u7926,\u6062\u5fa9\u5ee2\u68c4\u81fa\u8eca\u9053,\u958b\u63a1\u81f31987\u5e74\u70ba\u6b62\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72117, 25.02351],
      },
      properties: {
        title: ["1962", "1962"],
        content:
          "<h2> \u77f3\u5e95\u4e8c\u5751 <h2> <p > 1928\u5e74\uff1a\u958b\u5751\u3002<p> <p> 1939\u5e74\uff1a\u5927\u659c\u5751\u958b\u5751\u5f8c,\u4e8c\u5751\u6539\u70ba\u4e2d\u592e\u6392\u6c23\u5751,\u76f4\u81f31975\u5e74\u5927\u659c\u5751\u5ee2\u5751,\u4e8c\u5751\u91cd\u65b0\u958b\u63a1\u9632\u6c34\u70ad\u58c1\u90e8\u5206\u4e4b\u7164\u7926,\u6062\u5fa9\u5ee2\u68c4\u81fa\u8eca\u9053,\u958b\u63a1\u81f31987\u5e74\u70ba\u6b62\u3002<p> <p style='color:blue;'> 1962\u5e74\uff1a\u88ab\u653f\u5e9c\u6307\u5b9a\u70ba\u300c\u57fa\u5c64\u6c11\u751f\u5efa\u8a2d\u5be6\u9a57\u5340\u300d,\u76f4\u81f31970\u5e74\u4ea6\u9678\u7e8c\u8208\u5efa\u548c\u6539\u5584\u5c45\u4f4f\u7a7a\u9593\u53ca\u76f8\u95dc\u8a2d\u5099,\u7576\u6642\u70ba\u81fa\u7063\u552f\u4e00\u7926\u5340\u6c11\u751f\u5efa\u8a2d\u7684\u5178\u7bc4\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72117, 25.02351],
      },
      properties: {
        title: ["1963", "1985"],
        content:
          "<h2> \u77f3\u5e95\u4e8c\u5751 <h2> <p > 1928\u5e74\uff1a\u958b\u5751\u3002<p> <p> 1939\u5e74\uff1a\u5927\u659c\u5751\u958b\u5751\u5f8c,\u4e8c\u5751\u6539\u70ba\u4e2d\u592e\u6392\u6c23\u5751,\u76f4\u81f31975\u5e74\u5927\u659c\u5751\u5ee2\u5751,\u4e8c\u5751\u91cd\u65b0\u958b\u63a1\u9632\u6c34\u70ad\u58c1\u90e8\u5206\u4e4b\u7164\u7926,\u6062\u5fa9\u5ee2\u68c4\u81fa\u8eca\u9053,\u958b\u63a1\u81f31987\u5e74\u70ba\u6b62\u3002<p> <p> 1962\u5e74\uff1a\u88ab\u653f\u5e9c\u6307\u5b9a\u70ba\u300c\u57fa\u5c64\u6c11\u751f\u5efa\u8a2d\u5be6\u9a57\u5340\u300d,\u76f4\u81f31970\u5e74\u4ea6\u9678\u7e8c\u8208\u5efa\u548c\u6539\u5584\u5c45\u4f4f\u7a7a\u9593\u53ca\u76f8\u95dc\u8a2d\u5099,\u7576\u6642\u70ba\u81fa\u7063\u552f\u4e00\u7926\u5340\u6c11\u751f\u5efa\u8a2d\u7684\u5178\u7bc4\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72117, 25.02351],
      },
      properties: {
        title: ["1987", "1987"],
        content:
          "<h2> \u77f3\u5e95\u4e8c\u5751 <h2> <p > 1928\u5e74\uff1a\u958b\u5751\u3002<p> <p> 1939\u5e74\uff1a\u5927\u659c\u5751\u958b\u5751\u5f8c,\u4e8c\u5751\u6539\u70ba\u4e2d\u592e\u6392\u6c23\u5751,\u76f4\u81f31975\u5e74\u5927\u659c\u5751\u5ee2\u5751,\u4e8c\u5751\u91cd\u65b0\u958b\u63a1\u9632\u6c34\u70ad\u58c1\u90e8\u5206\u4e4b\u7164\u7926,\u6062\u5fa9\u5ee2\u68c4\u81fa\u8eca\u9053,\u958b\u63a1\u81f31987\u5e74\u70ba\u6b62\u3002<p> <p> 1962\u5e74\uff1a\u88ab\u653f\u5e9c\u6307\u5b9a\u70ba\u300c\u57fa\u5c64\u6c11\u751f\u5efa\u8a2d\u5be6\u9a57\u5340\u300d,\u76f4\u81f31970\u5e74\u4ea6\u9678\u7e8c\u8208\u5efa\u548c\u6539\u5584\u5c45\u4f4f\u7a7a\u9593\u53ca\u76f8\u95dc\u8a2d\u5099,\u7576\u6642\u70ba\u81fa\u7063\u552f\u4e00\u7926\u5340\u6c11\u751f\u5efa\u8a2d\u7684\u5178\u7bc4\u3002<p>  <p style='color:blue;'> 1987\u5e74\uff1a\u7d50\u675f\u958b\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72117, 25.02351],
      },
      properties: {
        title: ["1988", "2019"],
        content:
          "<h2> \u77f3\u5e95\u4e8c\u5751 <h2> <p > 1928\u5e74\uff1a\u958b\u5751\u3002<p> <p> 1939\u5e74\uff1a\u5927\u659c\u5751\u958b\u5751\u5f8c,\u4e8c\u5751\u6539\u70ba\u4e2d\u592e\u6392\u6c23\u5751,\u76f4\u81f31975\u5e74\u5927\u659c\u5751\u5ee2\u5751,\u4e8c\u5751\u91cd\u65b0\u958b\u63a1\u9632\u6c34\u70ad\u58c1\u90e8\u5206\u4e4b\u7164\u7926,\u6062\u5fa9\u5ee2\u68c4\u81fa\u8eca\u9053,\u958b\u63a1\u81f31987\u5e74\u70ba\u6b62\u3002<p> <p> 1962\u5e74\uff1a\u88ab\u653f\u5e9c\u6307\u5b9a\u70ba\u300c\u57fa\u5c64\u6c11\u751f\u5efa\u8a2d\u5be6\u9a57\u5340\u300d,\u76f4\u81f31970\u5e74\u4ea6\u9678\u7e8c\u8208\u5efa\u548c\u6539\u5584\u5c45\u4f4f\u7a7a\u9593\u53ca\u76f8\u95dc\u8a2d\u5099,\u7576\u6642\u70ba\u81fa\u7063\u552f\u4e00\u7926\u5340\u6c11\u751f\u5efa\u8a2d\u7684\u5178\u7bc4\u3002<p>  <p> 1987\u5e74\uff1a\u7d50\u675f\u958b\u63a1\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1921", "1921"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p style='color:blue;'> 1921\u5e74\uff1a\u958b\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1922", "1928"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1929", "1929"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p style='color:blue;'> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1935", "1946"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1947", "1947"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p style='color:blue;'> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1948", "1954"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1955", "1955"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p style='color:blue;'> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1956", "1961"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1962", "1962"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>  <p style='color:blue;'> 1962\u5e74\uff1a\u6539\u7a31\u5229\u540d\u7164\u7926,\u7531\u984f\u671d\u6f22\u7d93\u71df,\u5f8c\u56e0\u50b5\u52d9\u7cfe\u7d1b\u800c\u6cd5\u62cd,\u7531\u80e1\u6d77\u540c\u5f97\u6a19\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1963", "1965"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u5229\u540d\u7164\u7926,\u7531\u984f\u671d\u6f22\u7d93\u71df,\u5f8c\u56e0\u50b5\u52d9\u7cfe\u7d1b\u800c\u6cd5\u62cd,\u7531\u80e1\u6d77\u540c\u5f97\u6a19\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1966", "1966"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u5229\u540d\u7164\u7926,\u7531\u984f\u671d\u6f22\u7d93\u71df,\u5f8c\u56e0\u50b5\u52d9\u7cfe\u7d1b\u800c\u6cd5\u62cd,\u7531\u80e1\u6d77\u540c\u5f97\u6a19\u3002<p>  <p style='color:blue;'> 1966\u5e74\uff1a\u6539\u540d\u6176\u548c\u7164\u7926,\u7531\u6176\u548c\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u8607\u803f\u708e\u63a5\u624b\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1967", "1967"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u5229\u540d\u7164\u7926,\u7531\u984f\u671d\u6f22\u7d93\u71df,\u5f8c\u56e0\u50b5\u52d9\u7cfe\u7d1b\u800c\u6cd5\u62cd,\u7531\u80e1\u6d77\u540c\u5f97\u6a19\u3002<p>  <p> 1966\u5e74\uff1a\u6539\u540d\u6176\u548c\u7164\u7926,\u7531\u6176\u548c\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u8607\u803f\u708e\u63a5\u624b\u3002<p> <p style='color:blue;'> 1967\u5e74\uff1a\u6176\u548c\u540a\u6a4b\u5efa\u6210,\u4f5c\u7528\u5373\u662f\u5229\u7528\u540a\u6a4b\u5c07\u5c0d\u5cb8\u7684\u7164\u8eca\u904b\u9001\u904e\u6cb3,\u6cbf\u8457\u4e00\u65c1\u7684\u659c\u5761\u518d\u9001\u5f80\u671b\u53e4\u8eca\u7ad9\u6708\u81fa\u5c0d\u5074\u4e4b\u5378\u7164\u6ac3\u7b49\u5f85\u904b\u51fa\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1968", "1990"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u5229\u540d\u7164\u7926,\u7531\u984f\u671d\u6f22\u7d93\u71df,\u5f8c\u56e0\u50b5\u52d9\u7cfe\u7d1b\u800c\u6cd5\u62cd,\u7531\u80e1\u6d77\u540c\u5f97\u6a19\u3002<p>  <p> 1966\u5e74\uff1a\u6539\u540d\u6176\u548c\u7164\u7926,\u7531\u6176\u548c\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u8607\u803f\u708e\u63a5\u624b\u3002<p> <p> 1967\u5e74\uff1a\u6176\u548c\u540a\u6a4b\u5efa\u6210,\u4f5c\u7528\u5373\u662f\u5229\u7528\u540a\u6a4b\u5c07\u5c0d\u5cb8\u7684\u7164\u8eca\u904b\u9001\u904e\u6cb3,\u6cbf\u8457\u4e00\u65c1\u7684\u659c\u5761\u518d\u9001\u5f80\u671b\u53e4\u8eca\u7ad9\u6708\u81fa\u5c0d\u5074\u4e4b\u5378\u7164\u6ac3\u7b49\u5f85\u904b\u51fa\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1991", "1991"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u5229\u540d\u7164\u7926,\u7531\u984f\u671d\u6f22\u7d93\u71df,\u5f8c\u56e0\u50b5\u52d9\u7cfe\u7d1b\u800c\u6cd5\u62cd,\u7531\u80e1\u6d77\u540c\u5f97\u6a19\u3002<p>  <p> 1966\u5e74\uff1a\u6539\u540d\u6176\u548c\u7164\u7926,\u7531\u6176\u548c\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u8607\u803f\u708e\u63a5\u624b\u3002<p> <p> 1967\u5e74\uff1a\u6176\u548c\u540a\u6a4b\u5efa\u6210,\u4f5c\u7528\u5373\u662f\u5229\u7528\u540a\u6a4b\u5c07\u5c0d\u5cb8\u7684\u7164\u8eca\u904b\u9001\u904e\u6cb3,\u6cbf\u8457\u4e00\u65c1\u7684\u659c\u5761\u518d\u9001\u5f80\u671b\u53e4\u8eca\u7ad9\u6708\u81fa\u5c0d\u5074\u4e4b\u5378\u7164\u6ac3\u7b49\u5f85\u904b\u51fa\u3002<p> <p style='color:blue;'> 1991\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7693, 25.01484],
      },
      properties: {
        title: ["1992", "2019"],
        content:
          "<h2> \u6176\u548c\u7164\u7926 <h2> <p> 1921\u5e74\uff1a\u958b\u63a1\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u70ad\u696d\u6703\u793e\u63a5\u8fa6,\u674e\u8208\u65fa\u5305\u63a1\u3002<p> <p> 1947\u5e74\uff1a\u7531\u81fa\u7063\u5de5\u7926\u516c\u53f8\u7d93\u71df,\u7a31\u5e73\u6eaa\u7164\u7926\u5b9a\u798f\u7926\u5834\u5341\u5e73\u5751\u53ca\u5341\u5e73\u5206\u5751\u3002<p> <p> 1955\u5e74\uff1a\u51fa\u552e\u6c11\u71df\u6539\u7d44,\u7a31\u5de5\u7926\u516c\u53f8\u5341\u5e73\u7926\u5834\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u5229\u540d\u7164\u7926,\u7531\u984f\u671d\u6f22\u7d93\u71df,\u5f8c\u56e0\u50b5\u52d9\u7cfe\u7d1b\u800c\u6cd5\u62cd,\u7531\u80e1\u6d77\u540c\u5f97\u6a19\u3002<p>  <p> 1966\u5e74\uff1a\u6539\u540d\u6176\u548c\u7164\u7926,\u7531\u6176\u548c\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u8607\u803f\u708e\u63a5\u624b\u3002<p> <p> 1967\u5e74\uff1a\u6176\u548c\u540a\u6a4b\u5efa\u6210,\u4f5c\u7528\u5373\u662f\u5229\u7528\u540a\u6a4b\u5c07\u5c0d\u5cb8\u7684\u7164\u8eca\u904b\u9001\u904e\u6cb3,\u6cbf\u8457\u4e00\u65c1\u7684\u659c\u5761\u518d\u9001\u5f80\u671b\u53e4\u8eca\u7ad9\u6708\u81fa\u5c0d\u5074\u4e4b\u5378\u7164\u6ac3\u7b49\u5f85\u904b\u51fa\u3002<p> <p> 1991\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1919", "1919"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p style='color:blue;'> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1920", "1946"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1947", "1947"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p style='color:blue;'> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1948", "1949"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1951", "1951"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>  <p style='color:blue;'> 1951\u5e74\uff1a\u8f49\u79fb\u81f3\u5468\u539a\u7d93\u71df\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1953", "1958"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>  <p> 1951\u5e74\uff1a\u8f49\u79fb\u81f3\u5468\u539a\u7d93\u71df\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1959", "1959"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>  <p> 1951\u5e74\uff1a\u8f49\u79fb\u81f3\u5468\u539a\u7d93\u71df\u3002<p> <p style='color:blue;'> 1959\u5e74\uff1a\u59d4\u8a17\u9673\u57f9\u6839\u3001\u5468\u66c9\u58a9\u7d93\u71df3\u5e74\u5f8c\u6536\u56de\u81ea\u71df\uff0c\u8207\u7c21\u8ca1\u65fa\u5408\u8fa6\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1962", "1962"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>  <p> 1951\u5e74\uff1a\u8f49\u79fb\u81f3\u5468\u539a\u7d93\u71df\u3002<p> <p> 1959\u5e74\uff1a\u59d4\u8a17\u9673\u57f9\u6839\u3001\u5468\u66c9\u58a9\u7d93\u71df3\u5e74\u5f8c\u6536\u56de\u81ea\u71df\uff0c\u8207\u7c21\u8ca1\u65fa\u5408\u8fa6\u3002<p>  <p style='color:blue;'> 1962\u5e74\uff1a\u56e0\u70ba\u50b5\u52d9\u95dc\u4fc2\u6cd5\u62cd\u5f8c\u7531\u7c21\u8ca1\u65fa\u5f97\u6a19,\u6539\u540d\u70ba\u9d3b\u798f\u7164\u7926\u3002\u5f8c\u53c8\u8f49\u624b\u88d5\u9686\u7926\u696d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1963", "1992"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>  <p> 1951\u5e74\uff1a\u8f49\u79fb\u81f3\u5468\u539a\u7d93\u71df\u3002<p> <p> 1959\u5e74\uff1a\u59d4\u8a17\u9673\u57f9\u6839\u3001\u5468\u66c9\u58a9\u7d93\u71df3\u5e74\u5f8c\u6536\u56de\u81ea\u71df\uff0c\u8207\u7c21\u8ca1\u65fa\u5408\u8fa6\u3002<p>  <p> 1962\u5e74\uff1a\u56e0\u70ba\u50b5\u52d9\u95dc\u4fc2\u6cd5\u62cd\u5f8c\u7531\u7c21\u8ca1\u65fa\u5f97\u6a19,\u6539\u540d\u70ba\u9d3b\u798f\u7164\u7926\u3002\u5f8c\u53c8\u8f49\u624b\u88d5\u9686\u7926\u696d\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1994", "1994"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>  <p> 1951\u5e74\uff1a\u8f49\u79fb\u81f3\u5468\u539a\u7d93\u71df\u3002<p> <p> 1959\u5e74\uff1a\u59d4\u8a17\u9673\u57f9\u6839\u3001\u5468\u66c9\u58a9\u7d93\u71df3\u5e74\u5f8c\u6536\u56de\u81ea\u71df\uff0c\u8207\u7c21\u8ca1\u65fa\u5408\u8fa6\u3002<p>  <p> 1962\u5e74\uff1a\u56e0\u70ba\u50b5\u52d9\u95dc\u4fc2\u6cd5\u62cd\u5f8c\u7531\u7c21\u8ca1\u65fa\u5f97\u6a19,\u6539\u540d\u70ba\u9d3b\u798f\u7164\u7926\u3002\u5f8c\u53c8\u8f49\u624b\u88d5\u9686\u7926\u696d\u3002<p> <p style='color:blue;'> 1994\u5e74\uff1a\u53d6\u6d88\u7926\u6b0a\u3002",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7605, 24.99012],
      },
      properties: {
        title: ["1995", "2019"],
        content:
          "<h2> \u9d3b\u798f\u7164\u7926\uff08\u5927\u6771\u7164\u7926\uff09 <h2> <p> 1919\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\uff0c\u65e5\u6cbb\u6642\u671f\u5df2\u7d93\u958b\u63a1\u3002<p>  <p> 1947\u5e74\uff1a\u7531\u738b\u660e\u5b8f\u958b\u63a1\uff0c\u5373\u5927\u6771\u70ad\u7926\u3002<p>  <p> 1951\u5e74\uff1a\u8f49\u79fb\u81f3\u5468\u539a\u7d93\u71df\u3002<p> <p> 1959\u5e74\uff1a\u59d4\u8a17\u9673\u57f9\u6839\u3001\u5468\u66c9\u58a9\u7d93\u71df3\u5e74\u5f8c\u6536\u56de\u81ea\u71df\uff0c\u8207\u7c21\u8ca1\u65fa\u5408\u8fa6\u3002<p>  <p> 1962\u5e74\uff1a\u56e0\u70ba\u50b5\u52d9\u95dc\u4fc2\u6cd5\u62cd\u5f8c\u7531\u7c21\u8ca1\u65fa\u5f97\u6a19,\u6539\u540d\u70ba\u9d3b\u798f\u7164\u7926\u3002\u5f8c\u53c8\u8f49\u624b\u88d5\u9686\u7926\u696d\u3002<p> <p> 1994\u5e74\uff1a\u53d6\u6d88\u7926\u6b0a\u3002",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1922", "1922"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p style='color:blue;'> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1923", "1954"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1955", "1955"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>  <p style='color:blue;'> 1955\u5e74\uff1a\u8abf\u67e5\u7d00\u8f09,\u4e3b\u8981\u6709\u7b2c\u4e8c\u659c\u5751\u3001\u65b0\u659c\u5751\uff08\u5357\u659c\u5751\uff09\u53ca\u5927\u5751\uff08\u4e3b\u5751\uff09\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1956", "1959"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>  <p> 1955\u5e74\uff1a\u8abf\u67e5\u7d00\u8f09,\u4e3b\u8981\u6709\u7b2c\u4e8c\u659c\u5751\u3001\u65b0\u659c\u5751\uff08\u5357\u659c\u5751\uff09\u53ca\u5927\u5751\uff08\u4e3b\u5751\uff09\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1962", "1962"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>  <p> 1955\u5e74\uff1a\u8abf\u67e5\u7d00\u8f09,\u4e3b\u8981\u6709\u7b2c\u4e8c\u659c\u5751\u3001\u65b0\u659c\u5751\uff08\u5357\u659c\u5751\uff09\u53ca\u5927\u5751\uff08\u4e3b\u5751\uff09\u3002<p>  <p style='color:blue;'> 1962\u5e74\uff1a\u6539\u7a31\u300c\u4e09\u529f\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1963", "1972"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>  <p> 1955\u5e74\uff1a\u8abf\u67e5\u7d00\u8f09,\u4e3b\u8981\u6709\u7b2c\u4e8c\u659c\u5751\u3001\u65b0\u659c\u5751\uff08\u5357\u659c\u5751\uff09\u53ca\u5927\u5751\uff08\u4e3b\u5751\uff09\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u300c\u4e09\u529f\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1973", "1973"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>  <p> 1955\u5e74\uff1a\u8abf\u67e5\u7d00\u8f09,\u4e3b\u8981\u6709\u7b2c\u4e8c\u659c\u5751\u3001\u65b0\u659c\u5751\uff08\u5357\u659c\u5751\uff09\u53ca\u5927\u5751\uff08\u4e3b\u5751\uff09\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u300c\u4e09\u529f\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>   <p style='color:blue;'> 1973\u5e74\uff1a\u518d\u6613\u540d\u70ba\u300c\u91cd\u5149\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1975", "1997"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>  <p> 1955\u5e74\uff1a\u8abf\u67e5\u7d00\u8f09,\u4e3b\u8981\u6709\u7b2c\u4e8c\u659c\u5751\u3001\u65b0\u659c\u5751\uff08\u5357\u659c\u5751\uff09\u53ca\u5927\u5751\uff08\u4e3b\u5751\uff09\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u300c\u4e09\u529f\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>   <p> 1973\u5e74\uff1a\u518d\u6613\u540d\u70ba\u300c\u91cd\u5149\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["1998", "1998"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>  <p> 1955\u5e74\uff1a\u8abf\u67e5\u7d00\u8f09,\u4e3b\u8981\u6709\u7b2c\u4e8c\u659c\u5751\u3001\u65b0\u659c\u5751\uff08\u5357\u659c\u5751\uff09\u53ca\u5927\u5751\uff08\u4e3b\u5751\uff09\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u300c\u4e09\u529f\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>   <p> 1973\u5e74\uff1a\u518d\u6613\u540d\u70ba\u300c\u91cd\u5149\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>   <p style='color:blue;'> 1998\u5e74\uff1a\u56e0\u57fa\u798f\u516c\u8def\u7684\u958b\u62d3\u5fb5\u6536\u5927\u90e8\u5206\u7684\u7926\u5834\u800c\u5ba3\u544a\u505c\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.78337, 25.025749],
      },
      properties: {
        title: ["2000", "2019"],
        content:
          "<h2> \u76ca\u9686\u7164\u7926\uff08\u91cd\u5149\u7164\u7926\uff09 <h2> <p> 1922\u5e74\uff1a8\u6708\u958b\u5751,\u7926\u540d\u521d\u70ba\u300c\u76ca\u9686\u7164\u7926\u300d,\u7531\u984f\u7a97\u541f\u8207\u984f\u8d64\u4e5d\u7d93\u71df\u3002<p>  <p> 1955\u5e74\uff1a\u8abf\u67e5\u7d00\u8f09,\u4e3b\u8981\u6709\u7b2c\u4e8c\u659c\u5751\u3001\u65b0\u659c\u5751\uff08\u5357\u659c\u5751\uff09\u53ca\u5927\u5751\uff08\u4e3b\u5751\uff09\u3002<p>  <p> 1962\u5e74\uff1a\u6539\u7a31\u300c\u4e09\u529f\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>   <p> 1973\u5e74\uff1a\u518d\u6613\u540d\u70ba\u300c\u91cd\u5149\u7164\u7926\u80a1\u4efd\u6709\u9650\u516c\u53f8\u300d\u3002<p>   <p> 1998\u5e74\uff1a\u56e0\u57fa\u798f\u516c\u8def\u7684\u958b\u62d3\u5fb5\u6536\u5927\u90e8\u5206\u7684\u7926\u5834\u800c\u5ba3\u544a\u505c\u63a1\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.753208, 25.018972],
      },
      properties: {
        title: ["1938", "1938"],
        content:
          "<h2> \u81fa\u548c\u7164\u7926 <h2> <p style='color:blue;'> 1938\u5e74\uff1a\u7531\u9ad8\u91d1\u4e95\u8207\u81fa\u967d\u7926\u696d\u516c\u53f8\u6210\u7acb\u79df\u63a1\u5951\u7d04\u540c\u6642\u958b\u5751\u958b\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.753208, 25.018972],
      },
      properties: {
        title: ["1939", "1963"],
        content:
          "<h2> \u81fa\u548c\u7164\u7926 <h2> <p> 1938\u5e74\uff1a\u7531\u9ad8\u91d1\u4e95\u8207\u81fa\u967d\u7926\u696d\u516c\u53f8\u6210\u7acb\u79df\u63a1\u5951\u7d04\u540c\u6642\u958b\u5751\u958b\u63a1\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.753208, 25.018972],
      },
      properties: {
        title: ["1965", "1965"],
        content:
          "<h2> \u81fa\u548c\u7164\u7926 <h2> <p> 1938\u5e74\uff1a\u7531\u9ad8\u91d1\u4e95\u8207\u81fa\u967d\u7926\u696d\u516c\u53f8\u6210\u7acb\u79df\u63a1\u5951\u7d04\u540c\u6642\u958b\u5751\u958b\u63a1\u3002<p>  <p style='color:blue;'> 1965\u5e74\uff1a\u90e8\u5206\u5408\u5925\u4eba\u9000\u51fa,\u7531\u9ad8\u660e\u8cb4\u7d93\u71df\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.753208, 25.018972],
      },
      properties: {
        title: ["1966", "1981"],
        content:
          "<h2> \u81fa\u548c\u7164\u7926 <h2> <p> 1938\u5e74\uff1a\u7531\u9ad8\u91d1\u4e95\u8207\u81fa\u967d\u7926\u696d\u516c\u53f8\u6210\u7acb\u79df\u63a1\u5951\u7d04\u540c\u6642\u958b\u5751\u958b\u63a1\u3002<p>  <p> 1965\u5e74\uff1a\u90e8\u5206\u5408\u5925\u4eba\u9000\u51fa,\u7531\u9ad8\u660e\u8cb4\u7d93\u71df\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.753208, 25.018972],
      },
      properties: {
        title: ["1985", "1985"],
        content:
          "<h2> \u81fa\u548c\u7164\u7926 <h2> <p> 1938\u5e74\uff1a\u7531\u9ad8\u91d1\u4e95\u8207\u81fa\u967d\u7926\u696d\u516c\u53f8\u6210\u7acb\u79df\u63a1\u5951\u7d04\u540c\u6642\u958b\u5751\u958b\u63a1\u3002<p>  <p> 1965\u5e74\uff1a\u90e8\u5206\u5408\u5925\u4eba\u9000\u51fa,\u7531\u9ad8\u660e\u8cb4\u7d93\u71df\u3002<p>  <p style='color:blue;'> 1985\u5e74\uff1a\u8f49\u624b\u7c21\u5ead\u5143\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.753208, 25.018972],
      },
      properties: {
        title: ["1987", "1991"],
        content:
          "<h2> \u81fa\u548c\u7164\u7926 <h2> <p> 1938\u5e74\uff1a\u7531\u9ad8\u91d1\u4e95\u8207\u81fa\u967d\u7926\u696d\u516c\u53f8\u6210\u7acb\u79df\u63a1\u5951\u7d04\u540c\u6642\u958b\u5751\u958b\u63a1\u3002<p>  <p> 1965\u5e74\uff1a\u90e8\u5206\u5408\u5925\u4eba\u9000\u51fa,\u7531\u9ad8\u660e\u8cb4\u7d93\u71df\u3002<p>  <p> 1985\u5e74\uff1a\u8f49\u624b\u7c21\u5ead\u5143\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.753208, 25.018972],
      },
      properties: {
        title: ["1992", "1992"],
        content:
          "<h2> \u81fa\u548c\u7164\u7926 <h2> <p> 1938\u5e74\uff1a\u7531\u9ad8\u91d1\u4e95\u8207\u81fa\u967d\u7926\u696d\u516c\u53f8\u6210\u7acb\u79df\u63a1\u5951\u7d04\u540c\u6642\u958b\u5751\u958b\u63a1\u3002<p>  <p> 1965\u5e74\uff1a\u90e8\u5206\u5408\u5925\u4eba\u9000\u51fa,\u7531\u9ad8\u660e\u8cb4\u7d93\u71df\u3002<p>  <p> 1985\u5e74\uff1a\u8f49\u624b\u7c21\u5ead\u5143\u3002<p>  <p style='color:blue;'> 1992\u5e74\uff1a\u505c\u63a1\u3002<p> ",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.753208, 25.018972],
      },
      properties: {
        title: ["1994", "2019"],
        content:
          "<h2> \u81fa\u548c\u7164\u7926 <h2> <p> 1938\u5e74\uff1a\u7531\u9ad8\u91d1\u4e95\u8207\u81fa\u967d\u7926\u696d\u516c\u53f8\u6210\u7acb\u79df\u63a1\u5951\u7d04\u540c\u6642\u958b\u5751\u958b\u63a1\u3002<p>  <p> 1965\u5e74\uff1a\u90e8\u5206\u5408\u5925\u4eba\u9000\u51fa,\u7531\u9ad8\u660e\u8cb4\u7d93\u71df\u3002<p>  <p> 1985\u5e74\uff1a\u8f49\u624b\u7c21\u5ead\u5143\u3002<p>  <p> 1992\u5e74\uff1a\u505c\u63a1\u3002<p> ",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1918", "1918"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p style='color:blue;'> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1919", "1922"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1923", "1923"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p style='color:blue;'> 1923\u5e74\uff1a\u958b\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1926", "1935"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1937", "1937"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>  <p style='color:blue;'> 1937\u5e74\uff1a\u7531\u6797\u6709\u8ca1\u5411\u81fa\u967d\u627f\u5305\u958b\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1938", "1953"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>  <p> 1937\u5e74\uff1a\u7531\u6797\u6709\u8ca1\u5411\u81fa\u967d\u627f\u5305\u958b\u63a1\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1954", "1954"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>  <p> 1937\u5e74\uff1a\u7531\u6797\u6709\u8ca1\u5411\u81fa\u967d\u627f\u5305\u958b\u63a1\u3002<p> <p style='color:blue;'> 1954\u5e74\uff1a\u5927\u83ef\u7164\u7926\u9673\u5149\u8072\u8207\u81fa\u967d\u5408\u8fa6\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1955", "1962"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>  <p> 1937\u5e74\uff1a\u7531\u6797\u6709\u8ca1\u5411\u81fa\u967d\u627f\u5305\u958b\u63a1\u3002<p> <p> 1954\u5e74\uff1a\u5927\u83ef\u7164\u7926\u9673\u5149\u8072\u8207\u81fa\u967d\u5408\u8fa6\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1963", "1963"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>  <p> 1937\u5e74\uff1a\u7531\u6797\u6709\u8ca1\u5411\u81fa\u967d\u627f\u5305\u958b\u63a1\u3002<p> <p> 1954\u5e74\uff1a\u5927\u83ef\u7164\u7926\u9673\u5149\u8072\u8207\u81fa\u967d\u5408\u8fa6\u3002<p> <p style='color:blue;'> 1963\u5e74\uff1a\u90b1\u5bb6\u76ca\u6539\u7d44\u70ba\u300c\u592a\u83ef\u7164\u7926\u300d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1965", "1987"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>  <p> 1937\u5e74\uff1a\u7531\u6797\u6709\u8ca1\u5411\u81fa\u967d\u627f\u5305\u958b\u63a1\u3002<p> <p> 1954\u5e74\uff1a\u5927\u83ef\u7164\u7926\u9673\u5149\u8072\u8207\u81fa\u967d\u5408\u8fa6\u3002<p> <p> 1963\u5e74\uff1a\u90b1\u5bb6\u76ca\u6539\u7d44\u70ba\u300c\u592a\u83ef\u7164\u7926\u300d\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1990", "1990"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>  <p> 1937\u5e74\uff1a\u7531\u6797\u6709\u8ca1\u5411\u81fa\u967d\u627f\u5305\u958b\u63a1\u3002<p> <p> 1954\u5e74\uff1a\u5927\u83ef\u7164\u7926\u9673\u5149\u8072\u8207\u81fa\u967d\u5408\u8fa6\u3002<p> <p> 1963\u5e74\uff1a\u90b1\u5bb6\u76ca\u6539\u7d44\u70ba\u300c\u592a\u83ef\u7164\u7926\u300d\u3002<p> <p style='color:blue;'> 1990\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.80017, 25.04641],
      },
      properties: {
        title: ["1991", "2019"],
        content:
          "<h2> \u5927\u83ef\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1923\u5e74\uff1a\u958b\u5751\u3002<p>  <p> 1937\u5e74\uff1a\u7531\u6797\u6709\u8ca1\u5411\u81fa\u967d\u627f\u5305\u958b\u63a1\u3002<p> <p> 1954\u5e74\uff1a\u5927\u83ef\u7164\u7926\u9673\u5149\u8072\u8207\u81fa\u967d\u5408\u8fa6\u3002<p> <p> 1963\u5e74\uff1a\u90b1\u5bb6\u76ca\u6539\u7d44\u70ba\u300c\u592a\u83ef\u7164\u7926\u300d\u3002<p> <p> 1990\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1918", "1918"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p style='color:blue;'> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1919", "1929"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1935", "1935"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p style='color:blue;'> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1937", "1939"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1940", "1940"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p style='color:blue;'> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1943", "1943"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p> <p style='color:blue;'> 1943\u5e74\uff1a\u958b\u947f\u659c\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1946", "1957"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p> <p> 1943\u5e74\uff1a\u958b\u947f\u659c\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1958", "1958"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p> <p> 1943\u5e74\uff1a\u958b\u947f\u659c\u5751\u3002<p>  <p style='color:blue;'> 1958\u5e74\uff1a\u6539\u540d\u77f3\u707c\u70ad\u7926\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1959", "1962"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p> <p> 1943\u5e74\uff1a\u958b\u947f\u659c\u5751\u3002<p>  <p> 1958\u5e74\uff1a\u6539\u540d\u77f3\u707c\u70ad\u7926\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1963", "1963"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p> <p> 1943\u5e74\uff1a\u958b\u947f\u659c\u5751\u3002<p>  <p> 1958\u5e74\uff1a\u6539\u540d\u77f3\u707c\u70ad\u7926\u3002<p>   <p style='color:blue;'> 1963\u5e74\uff1a\u8cc7\u91d1\u9031\u8f49\u4e0d\u9748\u505c\u5751\u4e00\u5e74\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1964", "1969"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p> <p> 1943\u5e74\uff1a\u958b\u947f\u659c\u5751\u3002<p>  <p> 1958\u5e74\uff1a\u6539\u540d\u77f3\u707c\u70ad\u7926\u3002<p>   <p> 1963\u5e74\uff1a\u8cc7\u91d1\u9031\u8f49\u4e0d\u9748\u505c\u5751\u4e00\u5e74\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1970", "1970"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p> <p> 1943\u5e74\uff1a\u958b\u947f\u659c\u5751\u3002<p>  <p> 1958\u5e74\uff1a\u6539\u540d\u77f3\u707c\u70ad\u7926\u3002<p>   <p> 1963\u5e74\uff1a\u8cc7\u91d1\u9031\u8f49\u4e0d\u9748\u505c\u5751\u4e00\u5e74\u3002<p> <p style='color:blue;'> 1970\u5e74\uff1a\u505c\u63a1\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.757913, 25.050467],
      },
      properties: {
        title: ["1971", "2019"],
        content:
          "<h2> \u77f3\u707c\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1935\u5e74\uff1a\u81fa\u967d\u7926\u696d\u516c\u53f8\u8207\u6797\u672c\u5408\u8fa6\u7926\u5834\u77f3\u707c\u70ad\u7926\u3002\u958b\u947f\u672c\u5c64\u53ca\u4e0a\u5c64\u6c34\u5e73\u5751\u9053\u3002<p> <p> 1940\u5e74\uff1a\u958b\u65b0\u5751\u3002<p> <p> 1943\u5e74\uff1a\u958b\u947f\u659c\u5751\u3002<p>  <p> 1958\u5e74\uff1a\u6539\u540d\u77f3\u707c\u70ad\u7926\u3002<p>   <p> 1963\u5e74\uff1a\u8cc7\u91d1\u9031\u8f49\u4e0d\u9748\u505c\u5751\u4e00\u5e74\u3002<p> <p> 1970\u5e74\uff1a\u505c\u63a1\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74638, 25.03497],
      },
      properties: {
        title: ["1918", "1918"],
        content:
          "<h2> \u82f1\u9686\u7164\u7926 <h2> <p style='color:blue;'> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74638, 25.03497],
      },
      properties: {
        title: ["1919", "1925"],
        content:
          "<h2> \u82f1\u9686\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74638, 25.03497],
      },
      properties: {
        title: ["1926", "1926"],
        content:
          "<h2> \u82f1\u9686\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p style='color:blue;'> 1926\u5e74\uff1a\u7531\u8521\u5168\u5411\u81fa\u967d\u7926\u696d\u682a\u5f0f\u6703\u793e\u627f\u79df\u7926\u5340\u958b\u5751\u5305\u63a1,\u7a31\u5dba\u8173\u5bee\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74638, 25.03497],
      },
      properties: {
        title: ["1927", "1958"],
        content:
          "<h2> \u82f1\u9686\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1926\u5e74\uff1a\u7531\u8521\u5168\u5411\u81fa\u967d\u7926\u696d\u682a\u5f0f\u6703\u793e\u627f\u79df\u7926\u5340\u958b\u5751\u5305\u63a1,\u7a31\u5dba\u8173\u5bee\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74638, 25.03497],
      },
      properties: {
        title: ["1959", "1959"],
        content:
          "<h2> \u82f1\u9686\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1926\u5e74\uff1a\u7531\u8521\u5168\u5411\u81fa\u967d\u7926\u696d\u682a\u5f0f\u6703\u793e\u627f\u79df\u7926\u5340\u958b\u5751\u5305\u63a1,\u7a31\u5dba\u8173\u5bee\u5751\u3002<p>  <p style='color:blue;'> 1959\u5e74\uff1a\u7531\u674e\u842c\u570b\u8207\u738b\u706b\u6728\u63a5\u7ba1,\u66f4\u540d\u70ba\u73fe\u5728\u7684\u300c\u82f1\u9686\u7164\u7926\u300d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74638, 25.03497],
      },
      properties: {
        title: ["1962", "1980"],
        content:
          "<h2> \u82f1\u9686\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1926\u5e74\uff1a\u7531\u8521\u5168\u5411\u81fa\u967d\u7926\u696d\u682a\u5f0f\u6703\u793e\u627f\u79df\u7926\u5340\u958b\u5751\u5305\u63a1,\u7a31\u5dba\u8173\u5bee\u5751\u3002<p>  <p> 1959\u5e74\uff1a\u7531\u674e\u842c\u570b\u8207\u738b\u706b\u6728\u63a5\u7ba1,\u66f4\u540d\u70ba\u73fe\u5728\u7684\u300c\u82f1\u9686\u7164\u7926\u300d\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74638, 25.03497],
      },
      properties: {
        title: ["1981", "1981"],
        content:
          "<h2> \u82f1\u9686\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1926\u5e74\uff1a\u7531\u8521\u5168\u5411\u81fa\u967d\u7926\u696d\u682a\u5f0f\u6703\u793e\u627f\u79df\u7926\u5340\u958b\u5751\u5305\u63a1,\u7a31\u5dba\u8173\u5bee\u5751\u3002<p>  <p> 1959\u5e74\uff1a\u7531\u674e\u842c\u570b\u8207\u738b\u706b\u6728\u63a5\u7ba1,\u66f4\u540d\u70ba\u73fe\u5728\u7684\u300c\u82f1\u9686\u7164\u7926\u300d\u3002<p>  <p style='color:blue;'> 1981\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74638, 25.03497],
      },
      properties: {
        title: ["1982", "2019"],
        content:
          "<h2> \u82f1\u9686\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1926\u5e74\uff1a\u7531\u8521\u5168\u5411\u81fa\u967d\u7926\u696d\u682a\u5f0f\u6703\u793e\u627f\u79df\u7926\u5340\u958b\u5751\u5305\u63a1,\u7a31\u5dba\u8173\u5bee\u5751\u3002<p>  <p> 1959\u5e74\uff1a\u7531\u674e\u842c\u570b\u8207\u738b\u706b\u6728\u63a5\u7ba1,\u66f4\u540d\u70ba\u73fe\u5728\u7684\u300c\u82f1\u9686\u7164\u7926\u300d\u3002<p>  <p> 1981\u5e74\uff1a\u6536\u5751\u3002<p>",
        icon: normalPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1922", "1922"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p style='color:blue;'> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1923", "1928"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1929", "1929"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p> <p style='color:blue;'> 1929\u5e74\uff1a\u81fa\u7063\u7e3d\u7763\u5e9c\u5c07\u9435\u9053\u6536\u8cfc\u70ba\u570b\u6709\uff0c\u4e26\u547d\u540d\u70ba\u5e73\u6eaa\u7dda\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1930", "1967"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u7e3d\u7763\u5e9c\u5c07\u9435\u9053\u6536\u8cfc\u70ba\u570b\u6709\uff0c\u4e26\u547d\u540d\u70ba\u5e73\u6eaa\u7dda\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1968", "1968"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u7e3d\u7763\u5e9c\u5c07\u9435\u9053\u6536\u8cfc\u70ba\u570b\u6709\uff0c\u4e26\u547d\u540d\u70ba\u5e73\u6eaa\u7dda\u3002<p>  <p style='color:blue;'> 1968\u5e74\uff1a\u4faf\u7850\u8207\u4e09\u8c82\u5dba\u9593\u8def\u7dda\u96d9\u8ecc\u5316\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1969", "1970"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u7e3d\u7763\u5e9c\u5c07\u9435\u9053\u6536\u8cfc\u70ba\u570b\u6709\uff0c\u4e26\u547d\u540d\u70ba\u5e73\u6eaa\u7dda\u3002<p>  <p> 1968\u5e74\uff1a\u4faf\u7850\u8207\u4e09\u8c82\u5dba\u9593\u8def\u7dda\u96d9\u8ecc\u5316\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1971", "1971"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u7e3d\u7763\u5e9c\u5c07\u9435\u9053\u6536\u8cfc\u70ba\u570b\u6709\uff0c\u4e26\u547d\u540d\u70ba\u5e73\u6eaa\u7dda\u3002<p>  <p> 1968\u5e74\uff1a\u4faf\u7850\u8207\u4e09\u8c82\u5dba\u9593\u8def\u7dda\u96d9\u8ecc\u5316\u3002<p>  <p style='color:blue;'> 1971\u5e74\uff1a\u7531\u539f\u5148\u4e4b\u4e8c\u7b49\u7ad9\u964d\u70ba\u4e09\u7b49\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1972", "1984"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u7e3d\u7763\u5e9c\u5c07\u9435\u9053\u6536\u8cfc\u70ba\u570b\u6709\uff0c\u4e26\u547d\u540d\u70ba\u5e73\u6eaa\u7dda\u3002<p>  <p> 1968\u5e74\uff1a\u4faf\u7850\u8207\u4e09\u8c82\u5dba\u9593\u8def\u7dda\u96d9\u8ecc\u5316\u3002<p>  <p> 1971\u5e74\uff1a\u7531\u539f\u5148\u4e4b\u4e8c\u7b49\u7ad9\u964d\u70ba\u4e09\u7b49\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1985", "1985"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u7e3d\u7763\u5e9c\u5c07\u9435\u9053\u6536\u8cfc\u70ba\u570b\u6709\uff0c\u4e26\u547d\u540d\u70ba\u5e73\u6eaa\u7dda\u3002<p>  <p> 1968\u5e74\uff1a\u4faf\u7850\u8207\u4e09\u8c82\u5dba\u9593\u8def\u7dda\u96d9\u8ecc\u5316\u3002<p>  <p> 1971\u5e74\uff1a\u7531\u539f\u5148\u4e4b\u4e8c\u7b49\u7ad9\u964d\u70ba\u4e09\u7b49\u7ad9\u3002<p>   <p style='color:blue;'> 1985\u5e74\uff1a\u5b8c\u6210\u4e09\u8c82\u5dba-\u7261\u4e39\u9593\u96d9\u8ecc\u5316\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.82263, 25.06554],
      },
      properties: {
        title: ["1986", "2019"],
        content:
          "<h2> \u4e09\u8c82\u5dba\u8eca\u7ad9 <h2> <p> 1922\u5e74\uff1a\u300c\u4e09\u8c82\u5dba\u505c\u8eca\u5834\u300d\uff08\u5373\u4e09\u8c82\u5dba\u8eca\u7ad9(\u77f3\u5e95\u7dda)\u4e4b\u610f\uff09\u958b\u696d\u3002<p> <p> 1929\u5e74\uff1a\u81fa\u7063\u7e3d\u7763\u5e9c\u5c07\u9435\u9053\u6536\u8cfc\u70ba\u570b\u6709\uff0c\u4e26\u547d\u540d\u70ba\u5e73\u6eaa\u7dda\u3002<p>  <p> 1968\u5e74\uff1a\u4faf\u7850\u8207\u4e09\u8c82\u5dba\u9593\u8def\u7dda\u96d9\u8ecc\u5316\u3002<p>  <p> 1971\u5e74\uff1a\u7531\u539f\u5148\u4e4b\u4e8c\u7b49\u7ad9\u964d\u70ba\u4e09\u7b49\u7ad9\u3002<p>   <p> 1985\u5e74\uff1a\u5b8c\u6210\u4e09\u8c82\u5dba-\u7261\u4e39\u9593\u96d9\u8ecc\u5316\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.79754, 25.04991],
      },
      properties: {
        title: ["1956", "1956"],
        content:
          "<h2> \u5927\u83ef\u8eca\u7ad9 <h2> <p style='color:blue;'> 1956\u5e74\uff1a\u8a2d\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u4e09\u8c82\u5dba\u7ad9\u7ba1\u7406\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.79754, 25.04991],
      },
      properties: {
        title: ["1957", "1988"],
        content:
          "<h2> \u5927\u83ef\u8eca\u7ad9 <h2> <p> 1956\u5e74\uff1a\u8a2d\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u4e09\u8c82\u5dba\u7ad9\u7ba1\u7406\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.79754, 25.04991],
      },
      properties: {
        title: ["1989", "1989"],
        content:
          "<h2> \u5927\u83ef\u8eca\u7ad9 <h2> <p> 1956\u5e74\uff1a\u8a2d\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u4e09\u8c82\u5dba\u7ad9\u7ba1\u7406\u3002<p> <p style='color:blue;'> 1989\u5e74\uff1a\u6539\u70ba\u65e5\u9593\u53ea\u6d3e\u4e00\u540d\u7ad9\u54e1\u8fa6\u7406\u552e\u7968\u696d\u52d9\uff0c\u800c\u5176\u4ed6\u696d\u52d9\u4e00\u6982\u4e0d\u8fa6\u7406\uff0c\u9022\u7ad9\u54e1\u4f11\u5047\u6642\u5247\u6bd4\u7167\u62db\u547c\u7ad9\u8fa6\u7406\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.79754, 25.04991],
      },
      properties: {
        title: ["1990", "1993"],
        content:
          "<h2> \u5927\u83ef\u8eca\u7ad9 <h2> <p> 1956\u5e74\uff1a\u8a2d\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u4e09\u8c82\u5dba\u7ad9\u7ba1\u7406\u3002<p> <p> 1989\u5e74\uff1a\u6539\u70ba\u65e5\u9593\u53ea\u6d3e\u4e00\u540d\u7ad9\u54e1\u8fa6\u7406\u552e\u7968\u696d\u52d9\uff0c\u800c\u5176\u4ed6\u696d\u52d9\u4e00\u6982\u4e0d\u8fa6\u7406\uff0c\u9022\u7ad9\u54e1\u4f11\u5047\u6642\u5247\u6bd4\u7167\u62db\u547c\u7ad9\u8fa6\u7406\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.79754, 25.04991],
      },
      properties: {
        title: ["1994", "1994"],
        content:
          "<h2> \u5927\u83ef\u8eca\u7ad9 <h2> <p> 1956\u5e74\uff1a\u8a2d\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u4e09\u8c82\u5dba\u7ad9\u7ba1\u7406\u3002<p> <p> 1989\u5e74\uff1a\u6539\u70ba\u65e5\u9593\u53ea\u6d3e\u4e00\u540d\u7ad9\u54e1\u8fa6\u7406\u552e\u7968\u696d\u52d9\uff0c\u800c\u5176\u4ed6\u696d\u52d9\u4e00\u6982\u4e0d\u8fa6\u7406\uff0c\u9022\u7ad9\u54e1\u4f11\u5047\u6642\u5247\u6bd4\u7167\u62db\u547c\u7ad9\u8fa6\u7406\u3002<p>  <p style='color:blue;'> 1994\u5e74\uff1a\u7531\u7c21\u6613\u7ad9\u964d\u70ba\u62db\u547c\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.79754, 25.04991],
      },
      properties: {
        title: ["1995", "2000"],
        content:
          "<h2> \u5927\u83ef\u8eca\u7ad9 <h2> <p> 1956\u5e74\uff1a\u8a2d\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u4e09\u8c82\u5dba\u7ad9\u7ba1\u7406\u3002<p> <p> 1989\u5e74\uff1a\u6539\u70ba\u65e5\u9593\u53ea\u6d3e\u4e00\u540d\u7ad9\u54e1\u8fa6\u7406\u552e\u7968\u696d\u52d9\uff0c\u800c\u5176\u4ed6\u696d\u52d9\u4e00\u6982\u4e0d\u8fa6\u7406\uff0c\u9022\u7ad9\u54e1\u4f11\u5047\u6642\u5247\u6bd4\u7167\u62db\u547c\u7ad9\u8fa6\u7406\u3002<p>  <p> 1994\u5e74\uff1a\u7531\u7c21\u6613\u7ad9\u964d\u70ba\u62db\u547c\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.79754, 25.04991],
      },
      properties: {
        title: ["2001", "2001"],
        content:
          "<h2> \u5927\u83ef\u8eca\u7ad9 <h2> <p> 1956\u5e74\uff1a\u8a2d\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u4e09\u8c82\u5dba\u7ad9\u7ba1\u7406\u3002<p> <p> 1989\u5e74\uff1a\u6539\u70ba\u65e5\u9593\u53ea\u6d3e\u4e00\u540d\u7ad9\u54e1\u8fa6\u7406\u552e\u7968\u696d\u52d9\uff0c\u800c\u5176\u4ed6\u696d\u52d9\u4e00\u6982\u4e0d\u8fa6\u7406\uff0c\u9022\u7ad9\u54e1\u4f11\u5047\u6642\u5247\u6bd4\u7167\u62db\u547c\u7ad9\u8fa6\u7406\u3002<p>  <p> 1994\u5e74\uff1a\u7531\u7c21\u6613\u7ad9\u964d\u70ba\u62db\u547c\u7ad9\u3002<p> <p style='color:blue;'> 2001\u5e74\uff1a\u7ba1\u7406\u7ad9\u7531\u4e09\u8c82\u5dba\u7ad9\u6539\u70ba\u745e\u82b3\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.79754, 25.04991],
      },
      properties: {
        title: ["2002", "2019"],
        content:
          "<h2> \u5927\u83ef\u8eca\u7ad9 <h2> <p> 1956\u5e74\uff1a\u8a2d\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u4e09\u8c82\u5dba\u7ad9\u7ba1\u7406\u3002<p> <p> 1989\u5e74\uff1a\u6539\u70ba\u65e5\u9593\u53ea\u6d3e\u4e00\u540d\u7ad9\u54e1\u8fa6\u7406\u552e\u7968\u696d\u52d9\uff0c\u800c\u5176\u4ed6\u696d\u52d9\u4e00\u6982\u4e0d\u8fa6\u7406\uff0c\u9022\u7ad9\u54e1\u4f11\u5047\u6642\u5247\u6bd4\u7167\u62db\u547c\u7ad9\u8fa6\u7406\u3002<p>  <p> 1994\u5e74\uff1a\u7531\u7c21\u6613\u7ad9\u964d\u70ba\u62db\u547c\u7ad9\u3002<p> <p> 2001\u5e74\uff1a\u7ba1\u7406\u7ad9\u7531\u4e09\u8c82\u5dba\u7ad9\u6539\u70ba\u745e\u82b3\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.77497, 25.04098],
      },
      properties: {
        title: ["1929", "1929"],
        content:
          "<h2> \u5341\u5206\u8eca\u7ad9 <h2> <p style='color:blue;'> 1929\u5e74\uff1a\u958b\u696d\uff0c\u521d\u540d\u5341\u5206\u5bee\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.77497, 25.04098],
      },
      properties: {
        title: ["1930", "1961"],
        content:
          "<h2> \u5341\u5206\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u958b\u696d\uff0c\u521d\u540d\u5341\u5206\u5bee\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.77497, 25.04098],
      },
      properties: {
        title: ["1962", "1962"],
        content:
          "<h2> \u5341\u5206\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u958b\u696d\uff0c\u521d\u540d\u5341\u5206\u5bee\u3002<p> <p style='color:blue;'> 1962\u5e74\uff1a\u6539\u7a31\u5341\u5206\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.77497, 25.04098],
      },
      properties: {
        title: ["1963", "1969"],
        content:
          "<h2> \u5341\u5206\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u958b\u696d\uff0c\u521d\u540d\u5341\u5206\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u7a31\u5341\u5206\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.77497, 25.04098],
      },
      properties: {
        title: ["1970", "1970"],
        content:
          "<h2> \u5341\u5206\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u958b\u696d\uff0c\u521d\u540d\u5341\u5206\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u7a31\u5341\u5206\u7ad9\u3002<p>  <p style='color:blue;'> 1970\u5e74\uff1a\u6574\u5efa\uff0c\u5c07\u5c71\u8179\u93df\u5e73\u6539\u5efa\u70ba\u6c34\u6ce5\u7ad9\u623f\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.77497, 25.04098],
      },
      properties: {
        title: ["1971", "2000"],
        content:
          "<h2> \u5341\u5206\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u958b\u696d\uff0c\u521d\u540d\u5341\u5206\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u7a31\u5341\u5206\u7ad9\u3002<p>  <p> 1970\u5e74\uff1a\u6574\u5efa\uff0c\u5c07\u5c71\u8179\u93df\u5e73\u6539\u5efa\u70ba\u6c34\u6ce5\u7ad9\u623f\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.77497, 25.04098],
      },
      properties: {
        title: ["2001", "2001"],
        content:
          "<h2> \u5341\u5206\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u958b\u696d\uff0c\u521d\u540d\u5341\u5206\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u7a31\u5341\u5206\u7ad9\u3002<p>  <p> 1970\u5e74\uff1a\u6574\u5efa\uff0c\u5c07\u5c71\u8179\u93df\u5e73\u6539\u5efa\u70ba\u6c34\u6ce5\u7ad9\u623f\u3002<p> <p style='color:blue;'> 2001\u5e74\uff1a\u672c\u7ad9\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u4e19\u7a2e\u7c21\u6613\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u745e\u82b3\u7ad9\u7ba1\u7406\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.77497, 25.04098],
      },
      properties: {
        title: ["2002", "2019"],
        content:
          "<h2> \u5341\u5206\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u958b\u696d\uff0c\u521d\u540d\u5341\u5206\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u7a31\u5341\u5206\u7ad9\u3002<p>  <p> 1970\u5e74\uff1a\u6574\u5efa\uff0c\u5c07\u5c71\u8179\u93df\u5e73\u6539\u5efa\u70ba\u6c34\u6ce5\u7ad9\u623f\u3002<p> <p> 2001\u5e74\uff1a\u672c\u7ad9\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u4e19\u7a2e\u7c21\u6613\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u745e\u82b3\u7ad9\u7ba1\u7406\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1968", "1968"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p style='color:blue;'> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1969", "1971"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1972", "1972"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p> <p style='color:blue;'> 1972\u5e74\uff1a\u56e0\u61c9\u300c\u6176\u548c\u7164\u7926\u300d\u7684\u8a2d\u7acb\uff0c\u4ee5\u914d\u5408\u6176\u548c\u7164\u7926\u4e4b\u8f38\u9001\uff1b\u4ee5\u53ca\u670d\u52d9\u5728\u6176\u548c\u7164\u7926\u4e0a\u4e0b\u73ed\u7684\u54e1\u5de5\u800c\u8a2d\u6176\u548c\u62db\u547c\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1973", "1985"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p> <p> 1972\u5e74\uff1a\u56e0\u61c9\u300c\u6176\u548c\u7164\u7926\u300d\u7684\u8a2d\u7acb\uff0c\u4ee5\u914d\u5408\u6176\u548c\u7164\u7926\u4e4b\u8f38\u9001\uff1b\u4ee5\u53ca\u670d\u52d9\u5728\u6176\u548c\u7164\u7926\u4e0a\u4e0b\u73ed\u7684\u54e1\u5de5\u800c\u8a2d\u6176\u548c\u62db\u547c\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1986", "1986"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p><p style='color:blue;'> 1986\u5e74\uff1a\u6176\u548c\u7164\u7926\u652f\u7dda\u56e0\u6176\u548c\u7164\u7926\u505c\u63a1\u800c\u505c\u7528\u53ca\u62c6\u9664\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1987", "1988"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p><p> 1986\u5e74\uff1a\u6176\u548c\u7164\u7926\u652f\u7dda\u56e0\u6176\u548c\u7164\u7926\u505c\u63a1\u800c\u505c\u7528\u53ca\u62c6\u9664\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1987", "1988"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p><p> 1986\u5e74\uff1a\u6176\u548c\u7164\u7926\u652f\u7dda\u56e0\u6176\u548c\u7164\u7926\u505c\u63a1\u800c\u505c\u7528\u53ca\u62c6\u9664\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1989", "1989"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p><p> 1986\u5e74\uff1a\u6176\u548c\u7164\u7926\u652f\u7dda\u56e0\u6176\u548c\u7164\u7926\u505c\u63a1\u800c\u505c\u7528\u53ca\u62c6\u9664\u3002<p>  <p style='color:blue;'> 1989\u5e74\uff1a\u56e0\u672c\u7ad9\u6240\u5728\u5730\u884c\u653f\u5340\u5c6c\u53f0\u5317\u7e23\u5e73\u6eaa\u9109\u671b\u53e4\u6751\uff0c\u6545\u6539\u70ba\u300c\u671b\u53e4\u300d\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["1990", "2000"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p><p> 1986\u5e74\uff1a\u6176\u548c\u7164\u7926\u652f\u7dda\u56e0\u6176\u548c\u7164\u7926\u505c\u63a1\u800c\u505c\u7528\u53ca\u62c6\u9664\u3002<p>  <p> 1989\u5e74\uff1a\u56e0\u672c\u7ad9\u6240\u5728\u5730\u884c\u653f\u5340\u5c6c\u53f0\u5317\u7e23\u5e73\u6eaa\u9109\u671b\u53e4\u6751\uff0c\u6545\u6539\u70ba\u300c\u671b\u53e4\u300d\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["2001", "2001"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p><p> 1986\u5e74\uff1a\u6176\u548c\u7164\u7926\u652f\u7dda\u56e0\u6176\u548c\u7164\u7926\u505c\u63a1\u800c\u505c\u7528\u53ca\u62c6\u9664\u3002<p>  <p> 1989\u5e74\uff1a\u56e0\u672c\u7ad9\u6240\u5728\u5730\u884c\u653f\u5340\u5c6c\u53f0\u5317\u7e23\u5e73\u6eaa\u9109\u671b\u53e4\u6751\uff0c\u6545\u6539\u70ba\u300c\u671b\u53e4\u300d\u7ad9\u3002<p> <p style='color:blue;'> 2001\u5e74\uff1a\u539f\u7531\u5341\u5206\u7ad9\u7ba1\u7406\uff0c\u4f46\u56e0\u5341\u5206\u7ad9\ufa09\u7b49\uff0c\u4fbf\u6539\u7531\u745e\u82b3\u7ad9\u7ba1\u7406\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7638, 25.03461],
      },
      properties: {
        title: ["2002", "2019"],
        content:
          "<h2> \u671b\u53e4\u8eca\u7ad9 <h2> <p> 1968\u5e74\uff1a\u5728\u5341\u5206\u81f3\u5dba\u8173\u9593\u65b0\u8a2d\u6176\u548c\u7164\u7926\u652f\u7dda\u3002<p><p> 1986\u5e74\uff1a\u6176\u548c\u7164\u7926\u652f\u7dda\u56e0\u6176\u548c\u7164\u7926\u505c\u63a1\u800c\u505c\u7528\u53ca\u62c6\u9664\u3002<p>  <p> 1989\u5e74\uff1a\u56e0\u672c\u7ad9\u6240\u5728\u5730\u884c\u653f\u5340\u5c6c\u53f0\u5317\u7e23\u5e73\u6eaa\u9109\u671b\u53e4\u6751\uff0c\u6545\u6539\u70ba\u300c\u671b\u53e4\u300d\u7ad9\u3002<p> <p> 2001\u5e74\uff1a\u539f\u7531\u5341\u5206\u7ad9\u7ba1\u7406\uff0c\u4f46\u56e0\u5341\u5206\u7ad9\ufa09\u7b49\uff0c\u4fbf\u6539\u7531\u745e\u82b3\u7ad9\u7ba1\u7406\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["1929", "1929"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p style='color:blue;'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["1930", "1961"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["1962", "1962"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p> <p style='color:blue;'> 1962\u5e74\uff1a\u6539\u70ba\u5dba\u8173\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["1963", "1985"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u70ba\u5dba\u8173\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["1986", "1986"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u70ba\u5dba\u8173\u7ad9\u3002<p> <p style='color:blue;'> 1986\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u3002<p> ",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["1987", "1990"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u70ba\u5dba\u8173\u7ad9\u3002<p> <p> 1986\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["1991", "1991"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u70ba\u5dba\u8173\u7ad9\u3002<p> <p> 1986\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u3002<p> <p style='color:blue;'> 1991\u5e74\uff1a\u7531\u7c21\u6613\u7ad9\u964d\u70ba\u62db\u547c\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u5341\u5206\u7ad9\u7ba1\u7406\u3002<p> ",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["1992", "2000"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u70ba\u5dba\u8173\u7ad9\u3002<p> <p> 1986\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u3002<p> <p> 1991\u5e74\uff1a\u7531\u7c21\u6613\u7ad9\u964d\u70ba\u62db\u547c\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u5341\u5206\u7ad9\u7ba1\u7406\u3002<p> ",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["2001", "2001"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u70ba\u5dba\u8173\u7ad9\u3002<p> <p> 1986\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u3002<p> <p> 1991\u5e74\uff1a\u7531\u7c21\u6613\u7ad9\u964d\u70ba\u62db\u547c\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u5341\u5206\u7ad9\u7ba1\u7406\u3002<p>  <p style='color:blue;'> 2001\u5e74\uff1a\u7ba1\u7406\u7ad9\u7531\u5341\u5206\u7ad9\u6539\u70ba\u745e\u82b3\u7ad9\u3002<p> ",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.7481, 25.0301],
      },
      properties: {
        title: ["2002", "2019"],
        content:
          "<h2> \u5dba\u8173\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u5dba\u8173\u5bee\u3002<p> <p> 1962\u5e74\uff1a\u6539\u70ba\u5dba\u8173\u7ad9\u3002<p> <p> 1986\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u3002<p> <p> 1991\u5e74\uff1a\u7531\u7c21\u6613\u7ad9\u964d\u70ba\u62db\u547c\u7ad9\uff0c\u4e26\u6307\u5b9a\u7531\u5341\u5206\u7ad9\u7ba1\u7406\u3002<p>  <p> 2001\u5e74\uff1a\u7ba1\u7406\u7ad9\u7531\u5341\u5206\u7ad9\u6539\u70ba\u745e\u82b3\u7ad9\u3002<p> ",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["1929", "1929"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p style='color:blue;'> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["1930", "1953"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["1954", "1954"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p> <p style='color:blue;'> 1954\u5e74\uff1a\u6539\u70ba\u300c\u5e73\u6eaa\u300d\u4e26\u7531\u7c21\u6613\u7ad9\u6539\u70ba\u4e09\u7b49\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["1955", "1980"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p> <p> 1954\u5e74\uff1a\u6539\u70ba\u300c\u5e73\u6eaa\u300d\u4e26\u7531\u7c21\u6613\u7ad9\u6539\u70ba\u4e09\u7b49\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["1981", "1981"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p> <p> 1954\u5e74\uff1a\u6539\u70ba\u300c\u5e73\u6eaa\u300d\u4e26\u7531\u7c21\u6613\u7ad9\u6539\u70ba\u4e09\u7b49\u7ad9\u3002<p>  <p style='color:blue;'> 1981\u5e74\uff1a\u6539\u70ba\u7c21\u661c\u7ad9\uff0c\u7531\u83c1\u6850\u7ad9\u7ba1\uf9e4\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["1982", "1988"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p> <p> 1954\u5e74\uff1a\u6539\u70ba\u300c\u5e73\u6eaa\u300d\u4e26\u7531\u7c21\u6613\u7ad9\u6539\u70ba\u4e09\u7b49\u7ad9\u3002<p>  <p'> 1981\u5e74\uff1a\u6539\u70ba\u7c21\u661c\u7ad9\uff0c\u7531\u83c1\u6850\u7ad9\u7ba1\uf9e4\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["1989", "1989"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p> <p> 1954\u5e74\uff1a\u6539\u70ba\u300c\u5e73\u6eaa\u300d\u4e26\u7531\u7c21\u6613\u7ad9\u6539\u70ba\u4e09\u7b49\u7ad9\u3002<p>  <p'> 1981\u5e74\uff1a\u6539\u70ba\u7c21\u661c\u7ad9\uff0c\u7531\u83c1\u6850\u7ad9\u7ba1\uf9e4\u3002<p> <p style='color:blue;'> 1989\u5e74\uff1a\u83c1\u6850\u7ad9\ufa09\u7b49\uff0c\u6539\u7531\u5341\u5206\u7ad9\u7ba1\uf9e4\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["1990", "2000"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p> <p> 1954\u5e74\uff1a\u6539\u70ba\u300c\u5e73\u6eaa\u300d\u4e26\u7531\u7c21\u6613\u7ad9\u6539\u70ba\u4e09\u7b49\u7ad9\u3002<p>  <p'> 1981\u5e74\uff1a\u6539\u70ba\u7c21\u661c\u7ad9\uff0c\u7531\u83c1\u6850\u7ad9\u7ba1\uf9e4\u3002<p> <p> 1989\u5e74\uff1a\u83c1\u6850\u7ad9\ufa09\u7b49\uff0c\u6539\u7531\u5341\u5206\u7ad9\u7ba1\uf9e4\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["2001", "2001"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p> <p> 1954\u5e74\uff1a\u6539\u70ba\u300c\u5e73\u6eaa\u300d\u4e26\u7531\u7c21\u6613\u7ad9\u6539\u70ba\u4e09\u7b49\u7ad9\u3002<p>  <p'> 1981\u5e74\uff1a\u6539\u70ba\u7c21\u661c\u7ad9\uff0c\u7531\u83c1\u6850\u7ad9\u7ba1\uf9e4\u3002<p> <p> 1989\u5e74\uff1a\u83c1\u6850\u7ad9\ufa09\u7b49\uff0c\u6539\u7531\u5341\u5206\u7ad9\u7ba1\uf9e4\u3002<p>  <p style='color:blue;'> 2001\u5e74\uff1a\u5341\u5206\u7ad9\ufa09\u7b49\uff0c\u6539\u7531\u745e\u82b3\u7ad9\u7ba1\uf9e4\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.74, 25.02565],
      },
      properties: {
        title: ["2002", "2019"],
        content:
          "<h2> \u5e73\u6eaa\u8eca\u7ad9 <h2> <p> 1929\u5e74\uff1a\u8a2d\u300c\u77f3\u5e95\u9a5b\u300d\u3002<p> <p> 1954\u5e74\uff1a\u6539\u70ba\u300c\u5e73\u6eaa\u300d\u4e26\u7531\u7c21\u6613\u7ad9\u6539\u70ba\u4e09\u7b49\u7ad9\u3002<p>  <p'> 1981\u5e74\uff1a\u6539\u70ba\u7c21\u661c\u7ad9\uff0c\u7531\u83c1\u6850\u7ad9\u7ba1\uf9e4\u3002<p> <p> 1989\u5e74\uff1a\u83c1\u6850\u7ad9\ufa09\u7b49\uff0c\u6539\u7531\u5341\u5206\u7ad9\u7ba1\uf9e4\u3002<p>  <p> 2001\u5e74\uff1a\u5341\u5206\u7ad9\ufa09\u7b49\uff0c\u6539\u7531\u745e\u82b3\u7ad9\u7ba1\uf9e4\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72392, 25.02388],
      },
      properties: {
        title: ["1929", "1929"],
        content:
          "<h2> \u83c1\u6850\u8eca\u7ad9 <h2> <p style='color:blue;'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u83c1\u6850\u5751\u9a5b\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72392, 25.02388],
      },
      properties: {
        title: ["1930", "1961"],
        content:
          "<h2> \u83c1\u6850\u8eca\u7ad9 <h2> <p'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u83c1\u6850\u5751\u9a5b\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72392, 25.02388],
      },
      properties: {
        title: ["1962", "1962"],
        content:
          "<h2> \u83c1\u6850\u8eca\u7ad9 <h2> <p'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u83c1\u6850\u5751\u9a5b\u3002<p> <p style='color:blue;'> 1962\u5e74\uff1a\u6539\u540d\u70ba\u83c1\u6850\u7ad9\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72392, 25.02388],
      },
      properties: {
        title: ["1963", "1988"],
        content:
          "<h2> \u83c1\u6850\u8eca\u7ad9 <h2> <p'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u83c1\u6850\u5751\u9a5b\u3002<p> <p> 1962\u5e74\uff1a\u6539\u540d\u70ba\u83c1\u6850\u7ad9\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72392, 25.02388],
      },
      properties: {
        title: ["1989", "1989"],
        content:
          "<h2> \u83c1\u6850\u8eca\u7ad9 <h2> <p'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u83c1\u6850\u5751\u9a5b\u3002<p> <p> 1962\u5e74\uff1a\u6539\u540d\u70ba\u83c1\u6850\u7ad9\u3002<p>  <p style='color:blue;'> 1989\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u4e26\u6307\u5b9a\u7531\u5341\u5206\u7ad9\u7ba1\u7406\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72392, 25.02388],
      },
      properties: {
        title: ["1990", "2000"],
        content:
          "<h2> \u83c1\u6850\u8eca\u7ad9 <h2> <p'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u83c1\u6850\u5751\u9a5b\u3002<p> <p> 1962\u5e74\uff1a\u6539\u540d\u70ba\u83c1\u6850\u7ad9\u3002<p>  <p> 1989\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u4e26\u6307\u5b9a\u7531\u5341\u5206\u7ad9\u7ba1\u7406\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72392, 25.02388],
      },
      properties: {
        title: ["2001", "2001"],
        content:
          "<h2> \u83c1\u6850\u8eca\u7ad9 <h2> <p'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u83c1\u6850\u5751\u9a5b\u3002<p> <p> 1962\u5e74\uff1a\u6539\u540d\u70ba\u83c1\u6850\u7ad9\u3002<p>  <p> 1989\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u4e26\u6307\u5b9a\u7531\u5341\u5206\u7ad9\u7ba1\u7406\u3002<p> <p style='color:blue;'> 2001\u5e74\uff1a\u5341\u5206\u7ad9\ufa09\u7b49\uff0c\u6539\u7531\u745e\u82b3\u7ad9\u7ba1\uf9e4\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.72392, 25.02388],
      },
      properties: {
        title: ["2002", "2019"],
        content:
          "<h2> \u83c1\u6850\u8eca\u7ad9 <h2> <p'> 1929\u5e74\uff1a\u8a2d\u7acb\uff0c\u521d\u540d\u83c1\u6850\u5751\u9a5b\u3002<p> <p> 1962\u5e74\uff1a\u6539\u540d\u70ba\u83c1\u6850\u7ad9\u3002<p>  <p> 1989\u5e74\uff1a\u7531\u4e09\u7b49\u7ad9\u964d\u70ba\u7c21\u6613\u7ad9\u4e26\u6307\u5b9a\u7531\u5341\u5206\u7ad9\u7ba1\u7406\u3002<p> <p> 2001\u5e74\uff1a\u5341\u5206\u7ad9\ufa09\u7b49\uff0c\u6539\u7531\u745e\u82b3\u7ad9\u7ba1\uf9e4\u3002<p>",
        icon: trainPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1965", "1965"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p style='color:blue;'> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1966", "1966"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1967", "1967"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p style='color:blue;'> 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1968", "1968"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p style='color:blue;'> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1969", "1978"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1979", "1979"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p style='color:blue;'> 1979\u5e74\uff1a8\u67081\u65e5\u8d77,\u7368\u7acb\u70ba\u300c\u65b0\u5e73\u6eaa\u7164\u7926\u516c\u53f8\u300d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1980", "1984"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1979\u5e74\uff1a8\u67081\u65e5\u8d77,\u7368\u7acb\u70ba\u300c\u65b0\u5e73\u6eaa\u7164\u7926\u516c\u53f8\u300d\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1985", "1985"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1979\u5e74\uff1a8\u67081\u65e5\u8d77,\u7368\u7acb\u70ba\u300c\u65b0\u5e73\u6eaa\u7164\u7926\u516c\u53f8\u300d\u3002<p> <p style='color:blue;'> 1985\u5e74\uff1a\u81fa\u967d\u8b93\u552e\u65b0\u5e73\u6eaa\u4e88\u9f94\u8a60\u6ec4\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1986", "1996"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1979\u5e74\uff1a8\u67081\u65e5\u8d77,\u7368\u7acb\u70ba\u300c\u65b0\u5e73\u6eaa\u7164\u7926\u516c\u53f8\u300d\u3002<p> <p> 1985\u5e74\uff1a\u81fa\u967d\u8b93\u552e\u65b0\u5e73\u6eaa\u4e88\u9f94\u8a60\u6ec4\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1997", "1997"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1979\u5e74\uff1a8\u67081\u65e5\u8d77,\u7368\u7acb\u70ba\u300c\u65b0\u5e73\u6eaa\u7164\u7926\u516c\u53f8\u300d\u3002<p> <p> 1985\u5e74\uff1a\u81fa\u967d\u8b93\u552e\u65b0\u5e73\u6eaa\u4e88\u9f94\u8a60\u6ec4\u3002<p> <p style='color:blue;'> 1997\u5e74\uff1a\u56e0\u57fa\u798f\u96a7\u9053\u5de5\u7a0b\u800c\u66ab\u505c\u958b\u63a1\u4f5c\u696d\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["1998", "2018"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1979\u5e74\uff1a8\u67081\u65e5\u8d77,\u7368\u7acb\u70ba\u300c\u65b0\u5e73\u6eaa\u7164\u7926\u516c\u53f8\u300d\u3002<p> <p> 1985\u5e74\uff1a\u81fa\u967d\u8b93\u552e\u65b0\u5e73\u6eaa\u4e88\u9f94\u8a60\u6ec4\u3002<p> <p> 1997\u5e74\uff1a\u56e0\u57fa\u798f\u96a7\u9053\u5de5\u7a0b\u800c\u66ab\u505c\u958b\u63a1\u4f5c\u696d\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.773335, 25.052698],
      },
      properties: {
        title: ["2019", "2019"],
        content:
          "<h2> \u65b0\u5e73\u6eaa\u7164\u7926 <h2> <p> 1965\u5e74\uff1a\u65b0\u5e73\u6eaa\u7164\u7926\u539f\u70ba\u81fa\u967d\u516c\u53f8\u6240\u5c6c\u7164\u7926\u4e4b\u4e00,\u539f\u540d\u5e73\u6eaa\u5206\u5751,1965\u5e741\u670821\u65e5\u7834\u571f\u3002<p>  <p > 1967\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1968\u5e74\uff1a3\u6708\u5c08\u7528\u652f\u7dda\u5b8c\u6210,\u6b63\u5f0f\u751f\u7522\u3002<p> <p> 1979\u5e74\uff1a8\u67081\u65e5\u8d77,\u7368\u7acb\u70ba\u300c\u65b0\u5e73\u6eaa\u7164\u7926\u516c\u53f8\u300d\u3002<p> <p> 1985\u5e74\uff1a\u81fa\u967d\u8b93\u552e\u65b0\u5e73\u6eaa\u4e88\u9f94\u8a60\u6ec4\u3002<p> <p> 1997\u5e74\uff1a\u56e0\u57fa\u798f\u96a7\u9053\u5de5\u7a0b\u800c\u66ab\u505c\u958b\u63a1\u4f5c\u696d\u3002<p> <p style='color:blue;'> 2019\u5e74\uff1a7\u6708\u7926\u52d9\u5c40\u6b63\u5f0f\u6536\u56de\u63a1\u7926\u6b0a\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1918", "1918"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p style='color:blue;'> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1919", "1946"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1947", "1947"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p style='color:blue;'> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1948", "1948"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p style='color:blue;'> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1949", "1949"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>  <p style='color:blue;'> 1949\u5e74\uff1a\u958b\u659c\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1950", "1952"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>  <p> 1949\u5e74\uff1a\u958b\u659c\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1953", "1953"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>  <p> 1949\u5e74\uff1a\u958b\u659c\u5751\u3002<p>  <p style='color:blue;'> 1953\u5e74\uff1a\u7d42\u65bc\u958b\u63a1\u7164\u5c64\u5f97\u4ee5\u751f\u7522\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1954", "1955"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>  <p> 1949\u5e74\uff1a\u958b\u659c\u5751\u3002<p>  <p> 1953\u5e74\uff1a\u7d42\u65bc\u958b\u63a1\u7164\u5c64\u5f97\u4ee5\u751f\u7522\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1956", "1956"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>  <p> 1949\u5e74\uff1a\u958b\u659c\u5751\u3002<p>  <p> 1953\u5e74\uff1a\u7d42\u65bc\u958b\u63a1\u7164\u5c64\u5f97\u4ee5\u751f\u7522\u3002<p> <p style='color:blue;'> 1956\u5e74\uff1a\u518d\u947f\u65b0\u659c\u5751\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1957", "1971"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>  <p> 1949\u5e74\uff1a\u958b\u659c\u5751\u3002<p>  <p> 1953\u5e74\uff1a\u7d42\u65bc\u958b\u63a1\u7164\u5c64\u5f97\u4ee5\u751f\u7522\u3002<p> <p> 1956\u5e74\uff1a\u518d\u947f\u65b0\u659c\u5751\u3002<p>",
        icon: minePin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1972", "1972"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>  <p> 1949\u5e74\uff1a\u958b\u659c\u5751\u3002<p>  <p> 1953\u5e74\uff1a\u7d42\u65bc\u958b\u63a1\u7164\u5c64\u5f97\u4ee5\u751f\u7522\u3002<p> <p> 1956\u5e74\uff1a\u518d\u947f\u65b0\u659c\u5751\u3002<p> <p style='color:blue;'> 1972\u5e74\uff1a\u7d50\u675f\u71df\u904b\u3002<p>",
        icon: eventPin,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.73264, 25.01577],
      },
      properties: {
        title: ["1973", "2019"],
        content:
          "<h2> \u5efa\u6e90\u7164\u7926 <h2> <p> 1918\u5e74\uff1a\u8a2d\u7acb\u7926\u6b0a\u3002<p> <p> 1947\u5e74\uff1a\u5408\u8fa6\u4eba\u984f\u963f\u9806\u91cd\u65b0\u4fee\u5751\u3002<p>  <p> 1948\u5e74\uff1a\u5751\u5167\u958b\u659c\u5751\u3002<p>  <p> 1949\u5e74\uff1a\u958b\u659c\u5751\u3002<p>  <p> 1953\u5e74\uff1a\u7d42\u65bc\u958b\u63a1\u7164\u5c64\u5f97\u4ee5\u751f\u7522\u3002<p> <p> 1956\u5e74\uff1a\u518d\u947f\u65b0\u659c\u5751\u3002<p> <p> 1972\u5e74\uff1a\u7d50\u675f\u71df\u904b\u3002<p>",
        icon: normalPin,
      },
    },
  ],
};

var mymap = L.map("mapid");

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

function createMarker(feature, latlng) {
  return L.marker(latlng, { icon: bible });
}

getDataAddMarkers = function ({ label, value, map, exclamation }) {
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  filteredData = data.features.filter(function (i, n) {
    //console.log(i.properties.title[0], i.properties.title[1],label,(parseInt(i.properties.title[0])<=parseInt(label)),parseInt(i.properties.title[1] >= parseInt(label)));
    if (
      parseInt(i.properties.title[0]) <= parseInt(label) &&
      parseInt(i.properties.title[1]) >= parseInt(label)
    ) {
      return true;
    }

    if (i.properties.title.indexOf(label) >= 0) {
      return true;
    }
  });

  var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "red",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };

  var markerArray = [];
  L.geoJson(filteredData, {
    onEachFeature: function onEachFeature(feature, layer) {
      content = `${feature.properties.content} <br>`;
      var popup = L.popup().setContent(content);

      layer.bindPopup(popup);

      markerArray.push(layer);
    },
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: feature.properties.icon });
    },
  }).addTo(map);

  var markerGroup = L.featureGroup(markerArray);
  map.fitBounds(markerGroup.getBounds());
  //map.setView([25.03461,121.7638], 12);
};

var timeItems = [];
for (var i = 1918; i < 2020; i++) {
  timeItems.push(i.toString());
}

L.control
  .timelineSlider({
    timelineItems: [
      1918, 1919, 1921, 1922, 1923, 1926, 1927, 1928, 1929, 1935, 1937, 1938,
      1939, 1940, 1943, 1946, 1947, 1948, 1949, 1951, 1953, 1954, 1955, 1956,
      1957, 1958, 1959, 1962, 1963, 1965, 1966, 1967, 1968, 1969, 1970, 1972,
      1973, 1975, 1979, 1980, 1981, 1985, 1987, 1990, 1991, 1992, 1994, 1997,
      1998, 2000, 2001, 2019,
    ],
    changeMap: getDataAddMarkers,
    extraChangeMapParams: { exclamation: "Hello World!" },
    labelWidth: "28px",
    betweenLabelAndRangeSpace: "20px",
    labelFontSize: "14px",
    topBgPadding: "20px",
  })
  .addTo(mymap);
