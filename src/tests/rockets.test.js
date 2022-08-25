import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import Rockets from '../components/Rocket';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Rockets component', () => {
  const { useSelector } = reactRedux;
  const { useDispatch } = reactRedux;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      rockets: {
        rockets: [
          {
            id: '1',
            rocket_name: 'Falcon 1',
            description:
                'Falcon 1 is a partially reusable expendable rocket designed and manufactured by SpaceX.',
            flickr_image:
                'https://farm1.staticflickr.com/813/29188622681_f8f5e7e0e0_o.jpg',
            reserved: false,
          },
        ],
      },
    }));
    useDispatch.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Rockets />);

    expect(tree).toMatchSnapshot();
  });

  it('does not render reserved message if the reserved state is false', () => {
    render(<Rockets />);

    const reservedMessage = screen.queryByText('Reserved', { exact: false });

    expect(reservedMessage).toBeNull();
  });

  it('renders reserved message when the reserved state is true', () => {
    useSelector.mockImplementation((selector) => selector({
      rockets: {
        rockets: [
          {
            id: '1',
            rocket_name: 'Falcon 1',
            description:
                'Falcon 1 is a partially reusable expendable rocket designed and manufactured by SpaceX.',
            flickr_image:
                'https://farm1.staticflickr.com/813/29188622681_f8f5e7e0e0_o.jpg',
            reserved: true,
          },
        ],
      },
    }));
    render(<Rockets />);

    const reservedMessage = screen.getByText('Reserved', { exact: false });

    expect(reservedMessage).toBeInTheDocument();
  });
});
