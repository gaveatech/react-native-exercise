import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

import Btn from '../src/components/Button';

describe('<Button>', () => {
  it('Snapshot', () => {
    const tree = renderer.create(<Btn title="Botao" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Button press', () => {
    const pressBtn = jest.fn();
    const {getByTestId} = render(<Btn title="Botao" onPress={pressBtn} />);

    fireEvent.press(getByTestId('touch'));
    expect(getByTestId('touch')).toBeTruthy();
    expect(pressBtn).toHaveBeenCalledTimes(1);
  });
});
