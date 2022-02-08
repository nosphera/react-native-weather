const re = /(\b[a-z](?!\s))/g;
const Capitalise = (text: string): string =>
  text.replace(re, function (x) {
    return x.toUpperCase();
  });
export default Capitalise;
