import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        monoColor01: '#e3e8ea',
        monoColor02: '#bccad0',
        monoColor03: '#9ba8ae',
        monoColor04: '#707a7e',
        monoColor05: '#495054',
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
});
