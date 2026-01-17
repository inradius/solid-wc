import { Component, Show } from 'solid-js';
import {
  HostContractProvider,
  hostContractProps,
  useHostContractContext
} from '@app/contexts';
import './index.css';

const AppCore: Component = () => {
  const { title } = useHostContractContext();

  return (
    <div class="app-container">
      <Show when={title()}>{derivedTitle => <h1>{derivedTitle()}</h1>}</Show>
    </div>
  );
};

const App: Component<Partial<typeof hostContractProps>> = props => (
  <HostContractProvider {...props}>
    <AppCore />
  </HostContractProvider>
);

export default App;
