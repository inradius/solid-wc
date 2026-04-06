import App from '@app';
import { hostContractProps } from '@app/contexts';
import { compose, register } from 'component-register';
import { withSolid } from 'solid-element';
import withCSS from '@inradius/solid-wc-css-mixin';
import css from '@app/index.css?inline';

compose(register('solid-wc', hostContractProps), withCSS(css), withSolid)(App);
