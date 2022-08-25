import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import Profiles from '../components/Profiles/index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profiles component', () => {
  const { useSelector } = reactRedux;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      missions: {
        missions: [],
      },
      rockets: {
        rockets: [],
      },
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Profiles />);

    expect(tree).toMatchSnapshot();
  });
});
