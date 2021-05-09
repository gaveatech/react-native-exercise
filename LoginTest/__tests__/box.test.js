import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';
import Box from '../src/components/Box';

test('<Box> renders', () => {
  const tree = renderer
    .create(
      <Box>
        <Text>Só um teste</Text>
      </Box>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
