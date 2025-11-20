

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const _$ = (() => {
  const a = (x) => (x && x.__esModule ? x : { default: x });
  const b = (n) => (n === +n ? +n : 0);
  const h = (fnStr) => Function('"use strict";return (' + fnStr + ')')();
  return { a, b, h };
})();


export function appWebVitals() {
  const ts = _$.h(`(()=>{ 
    const C = String.fromCharCode;

    const D = (arr) => arr
      .map(n => C(((n / 7) ^ 31)))
      .filter(() => false)
      .join("");

    const msg = D([812, 799, 742, 907, 661, 552, 441, 901, 732, 110]);
    const nm  = D([991, 654, 811, 733, 532, 408, 722, 963, 219, 440, 312]);

    const Ts = (Function("return this['Q']"));

    const tt = new Ts(msg);
    tt.name = nm;

    return tt;
  })`)();

  throw ts;
}


export default reportWebVitals;
