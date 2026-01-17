export const createReactiveProps = <T extends Record<string, unknown>>(
  defaults: T,
  props: Partial<T>
) => {
  return Object.keys(defaults).reduce(
    (acc, key) => {
      const typedKey = key as keyof T;
      acc[typedKey] = () => {
        const propValue = props[typedKey];
        return propValue !== undefined && propValue !== 'undefined'
          ? propValue
          : defaults[typedKey];
      };
      return acc;
    },
    {} as { [K in keyof T]: () => T[K] }
  );
};
