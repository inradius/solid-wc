import { ParentComponent, createMemo, splitProps } from 'solid-js';
import { HostContractContext } from '@app/contexts';
import { createReactiveProps } from '@app/contexts/host-contract/host-contract.utilities';

export const hostContractProps = {
  title: 'Hello World',
  description: 'A Solid.js web component scaffold.'
};

export const HostContractProvider: ParentComponent<
  Partial<typeof hostContractProps>
> = rawProps => {
  const [props, contractProps] = splitProps(rawProps, ['children']);

  const reactiveContractProps = createMemo(() =>
    createReactiveProps(hostContractProps, contractProps)
  );

  return (
    <HostContractContext.Provider value={reactiveContractProps}>
      {props.children}
    </HostContractContext.Provider>
  );
};
