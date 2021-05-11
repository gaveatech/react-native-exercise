import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

import Input from '../src/components/Input';

describe('<Input>', () => {
  it('Snapshot', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Add some text', () => {
    const TestFunc = jest.fn();
    const testText = 'Davi Camarinha';

    const {getByPlaceholderText} = render(
      <Input
        placeholder="Test Input"
        onChangeText={TestFunc}
        value={testText}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('Test Input'), testText);
    expect(
      getByPlaceholderText('Test Input')._fiber.stateNode.props.value,
    ).toBe(testText);
  });
});
