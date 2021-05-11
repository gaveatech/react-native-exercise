import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../src/components/Title';

describe('<Title>', () => {
  it('Snapshot', () => {
    const tree = renderer.create(<Title>Teste</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
