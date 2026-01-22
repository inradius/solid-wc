import { render } from '@solidjs/testing-library';
import App from '@app/index';

describe('<App />', () => {
  it('should render the app with default props', async () => {
    const { findByText, unmount } = render(() => <App />);
    expect(await findByText('Hello World')).toBeInTheDocument();
    expect(await findByText('A Solid.js web component scaffold.')).toBeInTheDocument();
    unmount();
  });

  it('should render the app with custom props', async () => {
    const { findByText, unmount } = render(() => (
      <App heading="Custom Heading" description="Custom description." />
    ));
    expect(await findByText('Custom Heading')).toBeInTheDocument();
    expect(await findByText('Custom description.')).toBeInTheDocument();
    unmount();
  });
});
