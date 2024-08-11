const { defineConfig } = require('cypress');
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 60000, 
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);

      on('task', {
        clearScreenshots() {
          const screenshotsDir = path.join(config.screenshotsFolder, 'baseline');
          if (fs.existsSync(screenshotsDir)) {
            fs.rmSync(screenshotsDir, { recursive: true, force: true });
          }
          fs.mkdirSync(screenshotsDir, { recursive: true });
          return null;
        },
      });

      return config;
    },
  },
});
