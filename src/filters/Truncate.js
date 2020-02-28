import Vue from 'vue';

const TRUNCATE_MAX_SIZE = 50;

/* Maybe best pratice to do this */
Vue.filter('trunctate', (value) => {
  if (!value) return '';
  const valueString = value.toString();
  return (valueString.length > TRUNCATE_MAX_SIZE) ? `${valueString.slice(0, TRUNCATE_MAX_SIZE)}...` : valueString;
});
