import App from '@app';
import withCSS from '@inradius/solid-wc-css-mixin';
import { compose, register } from 'component-register';
import { withSolid } from 'solid-element';
import { hostContractProps } from '@app/contexts';
import css from '@dist/dev/index.css?inline';

compose(register('solid-wc', hostContractProps), withCSS(css), withSolid)(App);
