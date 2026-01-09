import { HostContractProvider, useHostContractContext } from '@app/contexts';
import { Component } from 'solid-js';
import './index.css';

const App: Component = () => {
  const { title } = useHostContractContext();

  return (
    <div class="app-container">
      <h1>{title()}</h1>
    </div>
  );
};

const AppCore: Component = () => (
  <HostContractProvider>
    <App />
  </HostContractProvider>
);

export default AppCore;
