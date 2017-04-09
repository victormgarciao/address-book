//@flow
import isFinite from 'lodash/isFinite';
import assign from 'lodash/assign';

const px2Em = (px, options) => {
  if (isFinite(px) === false) {
    throw new TypeError('`px` should be a number');
  }

  const {
      base,
      format,
    } = assign({
    }, {
      base: 16,
      format: null,
    }, options);

  if (isFinite(base) === false || base < 0) {
    throw new TypeError('`base` should be a number greater than zero');
  }

  const em = Math.round((px / base) * 1000) / 1000;

  if (format == null) {
    return em;
  }

  return `${em}${format}`;
};

export default px2Em;