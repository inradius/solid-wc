import css from '@dist/solid-build/index.css?inline';
import App from '@app';
import { compose, register } from 'component-register';
import { withSolid } from 'solid-element';
import withCSS from '@tools/with-css';

compose(register('solid-wc'), withCSS(css), withSolid)(App);
