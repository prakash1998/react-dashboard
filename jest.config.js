const path = require('path')
module.exports = {
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './__mocks__/fileMock.js'
    ),
  },
  moduleDirectories: ['node_modules', path.join(__dirname, 'test')],
  collectCoverageFrom: [
    '**/src/**/{!(stories),}.js',
    '!**/node_modules/**',
    '!**/src/api/**',
  ],
  testEnvironment: 'jsdom',
  setupFiles: [require.resolve('./test/init-test-env.js')],
  setupFilesAfterEnv: [require.resolve('./test/setup-test.js')],
  snapshotSerializers: ['jest-emotion'],
  globals: {
    apiMode: 'local',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
