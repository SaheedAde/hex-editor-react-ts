import type { FC } from 'react';

import { HexCellProps } from './type';

export const HexCell: FC<HexCellProps> = (props) => {
  const {
    byte, activate, index, active, clear,
  } = props;

  const classes = (active ? 'active' : '') + (byte === '--' ? ' none' : '');

  return (
    <li
      className={classes}
      onMouseOver={() => activate(index)}
      onFocus={() => {}}
      onMouseLeave={clear}
    >
      {byte}
    </li>
  );
};
