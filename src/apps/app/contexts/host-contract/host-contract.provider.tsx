import { HostContractContext } from '@app/contexts';
import { destructure } from '@solid-primitives/destructure';
import { createMemo, mergeProps, ParentComponent, splitProps } from 'solid-js';

export const hostContractProps = {
  title: 'Hello World'
};

export const HostContractProvider: ParentComponent<
  Partial<typeof hostContractProps>
> = rawProps => {
  const props = mergeProps(hostContractProps, rawProps);
  const [, contractProps] = splitProps(props, ['children']);

  const reactiveContractProps = createMemo(() => destructure(contractProps));

  return (
    <HostContractContext.Provider value={reactiveContractProps}>
      {props.children}
    </HostContractContext.Provider>
  );
};
