const isAvailable = (function isAvailableIffe() {
  const test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}());

const localstorage = {
  get(key) {
    if (isAvailable) {
      return JSON.parse(localStorage.getItem(key));
    }
    return null;
  },

  set(key, value) {
    if (isAvailable) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
    return null;
  },
};

export default localstorage;
