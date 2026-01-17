(function () {
  const WC_VERSION = '0.0.0';
  const WC_SCRIPT_URL = `./solid-wc-${WC_VERSION}.min.js`;

  function loadWebComponent() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = WC_SCRIPT_URL;
      script.type = 'text/javascript';

      script.onload = () => {
        console.log('Solid Web Component loaded successfully');
        resolve();
      };

      script.onerror = () => {
        console.error(`Failed to load web component from ${WC_SCRIPT_URL}`);
        reject(new Error(`Failed to load ${WC_SCRIPT_URL}`));
      };

      document.head.appendChild(script);
    });
  }

  function waitForCustomElement(tagName, timeout = 5000) {
    return new Promise((resolve, reject) => {
      if (customElements.get(tagName)) {
        resolve();
        return;
      }

      const timeoutId = setTimeout(() => {
        reject(new Error(`Timeout waiting for <${tagName}> to be defined`));
      }, timeout);

      customElements.whenDefined(tagName).then(() => {
        clearTimeout(timeoutId);
        resolve();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    loadWebComponent()
      .then(() => waitForCustomElement('solid-wc'))
      .then(() => {
        console.log('<solid-wc> is ready to use');
        document.dispatchEvent(new CustomEvent('solid-wc-ready'));
        const root = document.querySelector('#root');
        root.innerHTML = '<solid-wc></solid-wc>';
      })
      .catch(error => {
        console.error('Error initializing Solid Web Component:', error);
      });
  }
})();
