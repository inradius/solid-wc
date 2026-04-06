import App from '@app/index';
import { render } from '@solidjs/testing-library';

describe('<App />', () => {
  it('should render the app with default props', async () => {
    const { findByText, unmount } = render(() => <App />);
    expect(await findByText('Hello World')).toBeInTheDocument();
    expect(await findByText('A Solid.js web component scaffold.')).toBeInTheDocument();
    unmount();
  });

  it('should render the app with custom props', async () => {
    const { findByText, unmount } = render(() => (
      <App description="Custom description." heading="Custom Heading" />
    ));
    expect(await findByText('Custom Heading')).toBeInTheDocument();
    expect(await findByText('Custom description.')).toBeInTheDocument();
    unmount();
  });
});
