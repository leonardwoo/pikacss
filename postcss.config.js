module.exports = {
  plugins: [
      require('cssnano')({
          preset: ['default', {
              discardComments: true
          },
          ]
      }),
  ],
};
