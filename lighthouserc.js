module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: "./public",
      url: [
        "/"
      ]
    },
    "assert": {
      "preset": "lighthouse:no-pwa",
      "assertions": {
        "offscreen-images": "off",
        "uses-webp-images": "off",
        "unused-javascript": "off",
        "meta-viewport": "off"
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}