import { useState } from 'react';

import HexSet from "./HexSet";
import UnicodeSet from "./UnicodeSet";

import { RowProps } from './type';

export default function Row(props: RowProps) {
  const { columnSets, rowHeader } = props;

  const [state, setState] = useState({ activeSet: -1, activeItem: -1 });

  const setActiveSet = (activeSet: number) => {
    if (columnSets[activeSet][state.activeItem] === -1) return;
    setState((prevState) => ({ ...prevState, activeSet }));
  };
  const clearActiveSet = () => {
    setState((prevState) => ({ ...prevState, activeSet: -1 }));
  };

  const setActiveItem = (activeItem: number) => {
    setState((prevState) => ({ ...prevState, activeItem }));
  };
  const clearActiveItem = () => {
    setState((prevState) => ({ ...prevState, activeItem: -1 }));
  };

  const hexSetsNode = columnSets.map((set, i) => (
    <HexSet
      key={`set${i}`}
      set={set}
      index={i}
      active={state.activeSet === i}
      activeItem={state.activeItem}
      activateSet={setActiveSet}
      clearSet={clearActiveSet}
      activateItem={setActiveItem}
      clearItem={clearActiveItem}
    />
  ));

  const unicodeSetsNode = columnSets.map((set, i) => (
    <UnicodeSet
      key={`set${i}`}
      set={set}
      setIndex={i}
      activeSet={state.activeSet}
      activeItem={state.activeItem}
    />
  ));

  return (
    <div className="hex-row">
      <div className="heading">
        {rowHeader}
        :
      </div>

      <div className="hex">{hexSetsNode}</div>

      <div className="unicode">{unicodeSetsNode}</div>
    </div>
  );
}
