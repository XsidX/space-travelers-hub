import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { GridRow } from '../components/Missions/Grid';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('GridRow component', () => {
  const mockState = [
    {
      id: '1',
      name: 'Test Mission',
      description: 'Test description',
      joined: false,
    },
  ];

  const dispatch = reactRedux.useDispatch;

  beforeEach(() => {
    dispatch.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  it('renders not a member if joined property is false', () => {
    render(
      mockState.map((mission) => (
        <GridRow key={mission.id} mission={{ ...mission, joined: false }} />
      )),
    );

    const activeMemberButton = screen.getAllByText('NOT A MEMBER', {
      exact: false,
    });

    expect(activeMemberButton[1]).toBeInTheDocument();
  });

  it('renders active member if joined property is true', () => {
    render(
      mockState.map((mission) => (
        <GridRow key={mission.id} mission={{ ...mission, joined: true }} />
      )),
    );

    const activeMemberButton = screen.getAllByText('Active Member', {
      exact: false,
    });

    expect(activeMemberButton[1]).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        mockState.map((mission) => (
          <GridRow key={mission.id} mission={{ ...mission, joined: false }} />
        )),
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
