import { HostContractContext } from '@app/contexts';
import { defineHostContractProps } from '@app/contexts/host-contract/host-contract.utilities';
import { destructure } from '@solid-primitives/destructure';
import { createMemo, mergeProps, ParentComponent, splitProps } from 'solid-js';

export const hostContractProps = defineHostContractProps<{
  description: string;
  heading: string;
}>({
  description: 'A Solid.js web component scaffold.',
  heading: 'Hello World'
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
