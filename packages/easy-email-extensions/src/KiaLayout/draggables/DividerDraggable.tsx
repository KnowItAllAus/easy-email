import { BasicType, IDivider, RecursivePartial } from '@core';
import React from 'react';
import { DraggableWrapper } from './DraggableWrapper';

interface IDividerDraggableProps {
  children: React.ReactNode;
}

const divider =  {
  'border-width': '2px',
  'border-style': 'solid',
  'border-color': 'lightgrey',
};

export const DividerDraggable = ({ children }: IDividerDraggableProps) => {

  return (
    <DraggableWrapper
    type={BasicType.DIVIDER}
    payload={
      {
        attributes: { ...divider, padding: '10px 0px' },
      } as RecursivePartial<IDivider>
    }
    >
    {children}
    </DraggableWrapper>
  );
};
