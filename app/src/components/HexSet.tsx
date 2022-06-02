import { HexCell } from './HexCell'

import { HexSetProps } from './type';

export default function HexSet(props: HexSetProps) {
  const {
    set,
    index,
    active,
    activeItem,
    activateItem,
    clearItem,
    activateSet,
    clearSet,
  } = props;

  const cells = set.map((byte, i) => {
    let byteString = '--';

    if (byte !== -1) {
      byteString = byte.toString(16); // convert each Uint8Array byte to base 16

      if (byteString.length === 1) {
        byteString = `0${byteString}`; // add zero to single digits
      }
    }

    byteString = byteString.toUpperCase();

    return (
      <HexCell
        key={i}
        index={i}
        byte={byteString}
        active={activeItem === i && active}
        activate={activateItem}
        clear={clearItem}
      />
    );
  });

  return (
    <ul
      className={`setHex ${active ? 'active' : ''}`}
      onMouseOver={() => activateSet(index)}
      onFocus={() => {}}
      onMouseLeave={clearSet}
    >
      {cells}
    </ul>
  );
}
