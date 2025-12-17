import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/postcss';
import postcssCustomProperties from 'postcss-custom-properties';

const dropRadialProgressProperty = () => ({
  postcssPlugin: 'drop-radialprogress-property',
  AtRule(atRule) {
    if (atRule.name === 'property' && atRule.params.trim() === '--radialprogress') {
      atRule.remove();
    }
  },
});

dropRadialProgressProperty.postcss = true;

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    postcssCustomProperties(),
    dropRadialProgressProperty(),
  ],
}
