module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        "/"
      ]
    },
    "assert": {
      "preset": "lighthouse:no-pwa",
      "assertions": {
        "offscreen-images": "off",
        "uses-webp-images": "off"
      }
    }
  }
}