import { UnicodeCellProps } from './type';
// ascii: 0 to 127
// utf-8 basic latin: 0 to 127 ~ ascii
// utf-8 latin1 supplement: 128 to 255
// any byte > 255 won't display on our webpage because utf8 is used in index.html

export default function UnicodeSet(props: UnicodeCellProps) {
  const {
    set,
    setIndex,
    activeSet,
    activeItem,
  } = props;

  const unicodeCells = set.map((byte, itemIndex, theSet) => {
    let char = '·'; // special char for chars that are control chars
    const isAsciiControlChar = (0 <= byte && byte <= 31) || byte === 127;
    const isUTF8ControlChar = (128 <= byte && byte <= 159);
    const isControlChar = isAsciiControlChar || isUTF8ControlChar;
    if (!isControlChar && byte <= 255) {
      char = String.fromCharCode(byte)
    }

    const activeCell = activeSet * theSet.length + activeItem;
    const currentCell = setIndex * theSet.length + itemIndex;
    const classes = activeCell === currentCell ? 'active' : '';

    return (
      <li key={`unicode${itemIndex}`} className={classes}>
        {char}
      </li>
    );
  });

  return (
    <ul className="setUnicode">
      {unicodeCells}
    </ul>
  );
}
