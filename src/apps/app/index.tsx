import { Component } from 'solid-js';
import {
  HostContractProvider,
  hostContractProps,
  useHostContractContext
} from '@app/contexts';
import './index.css';

const AppCore: Component = () => {
  const { description, title } = useHostContractContext();

  return (
    <div class="app-container">
      <h1>{title()}</h1>
      <p>{description()}</p>
    </div>
  );
};

const App: Component<Partial<typeof hostContractProps>> = props => (
  <HostContractProvider {...props}>
    <AppCore />
  </HostContractProvider>
);

export default App;
