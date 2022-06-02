import Row from './Row';
import { GridProps } from './type';

export default function Grid(props: GridProps) {
	const { rowsData, bytesPerRow } = props;

  const rowsNode = rowsData.map((columnSets, i) => {
    const rowHeader = (i * bytesPerRow).toString().padStart(6, '0');
    return <Row key={`row${i}`} columnSets={columnSets} rowHeader={rowHeader} />;
  });

  return (
    <div className="hexviewer" data-testid="hexviewer">
      <div className="hex">{rowsNode}</div>
    </div>
  );
};
