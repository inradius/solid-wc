import App from '@app';
import { hostContractProps } from '@app/contexts';
import css from '@dist/dev/index.css?inline';
import withCSS from '@tools/with-css';
import { compose, register } from 'component-register';
import { withSolid } from 'solid-element';

compose(register('solid-wc', hostContractProps), withCSS(css), withSolid)(App);
