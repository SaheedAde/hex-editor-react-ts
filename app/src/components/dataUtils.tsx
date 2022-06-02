import { Data, ChunkedData, Chunks, CleanedData } from './type';

const splitArrayInChunks = (arr: Array<number>, chunkSize: number): Chunks => {
  const result: Chunks = [];
  if (!chunkSize) return result;
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
};

const getChunks = (data: CleanedData, rowLen: number, grpCount: number): ChunkedData => {
  let rowData: Chunks = [];
  const chunkedData: ChunkedData = [];
  rowData = splitArrayInChunks(data, rowLen);
  rowData.map((row) => chunkedData.push(splitArrayInChunks(row, grpCount)));

  return chunkedData;
};

const encodeString = (data: string) => {
  let utf8Encode = new TextEncoder();
  return utf8Encode.encode(data)
};



export const splitDataInChunks = (data: CleanedData) => {
  const columnGroupLength = 4;
  const columnGroupCount = 4;
  const rowSize = columnGroupLength * columnGroupCount;
  const chunkedData = getChunks(data, rowSize, columnGroupCount);

  return {
    chunkedData,
    rowSize,
  };
};

export const cleanData = (data: Data) => {
  if (data != null && typeof data !== 'string') {
    return Array.from(data)
  }
  return Array.from(encodeString(data))
};
