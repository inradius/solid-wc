import { destructure } from '@solid-primitives/destructure';
import { ParentComponent, createMemo, mergeProps, splitProps } from 'solid-js';
import { HostContractContext } from '@app/contexts';
import { defineHostContractProps } from '@app/contexts/host-contract/host-contract.utilities';

export const hostContractProps = defineHostContractProps({
  heading: 'Hello World',
  description: 'A Solid.js web component scaffold.'
});

export const HostContractProvider: ParentComponent<
  Partial<typeof hostContractProps>
> = rawProps => {
  const mergedProps = mergeProps(hostContractProps, rawProps);
  const [props, contractProps] = splitProps(mergedProps, ['children']);

  const reactiveContractProps = createMemo(() => destructure(contractProps));

  return (
    <HostContractContext.Provider value={reactiveContractProps}>
      {props.children}
    </HostContractContext.Provider>
  );
};
