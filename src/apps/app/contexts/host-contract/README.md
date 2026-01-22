# Host Contract Props

## Type Safety

The `hostContractProps` object is protected by TypeScript type enforcement that prevents using HTML global attributes as property names. This prevents conflicts with native web component attributes.

### Forbidden Property Names

The following property names are **not allowed**:

- HTML global attributes: `title`, `id`, `class`, `style`, `lang`, `dir`, `tabindex`, `accesskey`, `contenteditable`, `draggable`, `hidden`, `spellcheck`, `translate`, `role`, `slot`, `part`
- Data attributes: `data-*`
- ARIA attributes: `aria-*`

### Example

```typescript
// ❌ This will cause a TypeScript error
export const hostContractProps = defineHostContractProps({
  title: 'Hello World',  // Error: 'title' is a reserved HTML attribute
  id: '123'              // Error: 'id' is a reserved HTML attribute
});

// ✅ This is correct
export const hostContractProps = defineHostContractProps({
  heading: 'Hello World',
  description: 'A description',
  customId: '123'
});
```

## Why This Matters

Web component attributes are always strings in HTML. When you use reserved HTML attribute names like `title`, the browser's native handling can interfere with your custom props, causing unexpected behavior like receiving the string `"undefined"` instead of the value `undefined`.

## Adding New Props

Simply add new properties to the `hostContractProps` object:

```typescript
export const hostContractProps = defineHostContractProps({
  heading: 'Hello World',
  description: 'A Solid.js web component scaffold.',
  theme: 'light',
  showFooter: true
});
```

The type system will automatically:

- Validate that property names don't conflict with HTML attributes
- Provide full TypeScript inference
- Generate reactive accessors via `destructure`
