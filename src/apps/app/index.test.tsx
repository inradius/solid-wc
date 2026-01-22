import { render } from '@solidjs/testing-library';
import App from '@app/index';

describe('<App />', () => {
  it('should render the app', async () => {
    const { findByText, unmount } = render(() => <App />);
    expect(await findByText('Hello World')).toBeInTheDocument();
    unmount();
  });
});
