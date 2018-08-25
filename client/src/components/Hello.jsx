// @flow
/* eslint-disable no-use-before-define */
import * as React from 'react';

type Props = {
  name: string,
  enthusiasmLevel: number,
};

function Hello(props: Props) {
  const { name, enthusiasmLevel = 1 } = props;

  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello
        {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars) {
  return Array(numChars + 1).join('!');
}
