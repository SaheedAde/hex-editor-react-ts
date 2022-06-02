import './HexViewer.scss';
import { HexViewerProps, CleanedData } from './type';
import { splitDataInChunks, cleanData } from './dataUtils';

import Grid from "./Grid";

export default function HexViewer(props: HexViewerProps) {
  const { data } = props;
  const cleanedData: CleanedData = cleanData(data)
  const { chunkedData, rowSize } = splitDataInChunks(cleanedData);

  return (
    <>
      {chunkedData.length === 0 && (<div>Sorry, cannot convert the loaded file to hex</div>)}
      {chunkedData.length > 0 && (
        <pre style={{ overflowWrap: 'break-word', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          {/* Here comes the HexViewer<br />{ props.data } */}
          <Grid
            rowsData={chunkedData}
            bytesPerRow={rowSize}
          />
        </pre>
      )}
    </>
  );
}
