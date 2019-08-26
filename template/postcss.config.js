/**
 * Created by ChowChiKwan on 2019/08/26.
 */
module.exports = {
  plugins: {
    'postcss-salad': {
      browsers: ['last 20 versions'],
      features: {
        bem: {
          shortcuts: {
            component: 'b',
            descendent: 'e',
            modifier: 'm'
          },
          separators: {
            descendent: '-',
            modifier: '--'
          }
        }
      }
    },
    'cssnano': {}
  }
};