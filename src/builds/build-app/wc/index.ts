import App from '@app';
import css from '@dist/solid-build/index.css?inline';
import withCSS from '@tools/with-css';
import { compose, register } from 'component-register';
import { withSolid } from 'solid-element';

compose(register('solid-wc'), withCSS(css), withSolid)(App);
