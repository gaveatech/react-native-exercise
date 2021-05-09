import React from 'react';
import renderer from 'react-test-renderer';
import SubTitle from '../src/components/SubTitle';

describe('<SubTitle>', () => {
  it('Snapshot', () => {
    const tree = renderer.create(<SubTitle>Teste</SubTitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
