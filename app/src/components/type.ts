export type Data = string | Uint8Array;
export type CleanedData = number[];
export type Chunks = CleanedData[]
export type ChunkedData = Chunks[]

export interface HexViewerProps {
  data: Data;
}

export interface GridProps {
  rowsData: ChunkedData;
  bytesPerRow: number;
}

export interface RowProps {
  columnSets: Chunks;
  rowHeader: string;
}

export interface HexSetProps {
  set: number[];
  index: number;
  active: boolean;
  activeItem: number;
  activateItem: (index: number) => void;
  clearItem: () => void;
  activateSet: (index: number) => void;
  clearSet: () => void;
}

export interface HexCellProps {
  byte: string;
  index: number;
  active: boolean;
  activate(idx: number): void;
  clear(): void;
}

export interface UnicodeCellProps {
  set: number[];
  setIndex: number;
  activeSet: number;
  activeItem: number;
}