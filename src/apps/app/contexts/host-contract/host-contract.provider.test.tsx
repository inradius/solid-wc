import { HostContractProvider } from '@app/contexts';
import { render } from '@solidjs/testing-library';

describe('<HostContractProvider />', () => {
  it('should', () => {
    const { debug, unmount } = render(() => <HostContractProvider title="Testing" />);
    console.log(debug());
    expect(true).toBeTruthy();
    unmount();
  });
});
