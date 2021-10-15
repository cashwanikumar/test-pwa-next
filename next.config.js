const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  },
  images: {
    domains: ["m.media-amazon.com", "imdb-api.com"],
  },
});
