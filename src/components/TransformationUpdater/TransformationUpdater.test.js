import TransformationUpdater from './TransformationUpdater';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

describe('TransformationUpdater', () => {
  test('renders header', () => {
    render(<TransformationUpdater/>);
    expect(screen.getByText('Transformations')).toBeInTheDocument();
  });

  test('render No filter selected if no changes are passed', () => {
    render(<TransformationUpdater changes={[]}/>);
    expect(screen.getByText('No filters selected')).toBeInTheDocument();
  });

  test('render changes if changes are passed', () => {
    render(<TransformationUpdater changes={['Add 1']}/>);
    expect(screen.getByText('Add 1')).toBeInTheDocument();
  });

  test('renders loading text when loading', () => {
    render(<TransformationUpdater loading={true}/>);
    expect(screen.getByText('Applying your changes...')).toBeInTheDocument();
  })

  test('renders non loading text when loading is false', () => {
    render(<TransformationUpdater loading={false}/>);
    expect(screen.getByText('Apply changes to array')).toBeInTheDocument();
  })
})