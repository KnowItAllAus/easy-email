import { BasicType, ISpacer, RecursivePartial } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from './DraggableWrapper';

interface ISpacerDraggableProps {
  children: React.ReactNode;
}

export const SpacerDraggable = ({ children }: ISpacerDraggableProps) => {

  return (
    <DraggableWrapper
    type={BasicType.SPACER}
    payload={
      {
        attributes: {
          height: '10px',
        },
      } as RecursivePartial<ISpacer>
    }
    >
{children}
    </DraggableWrapper>
  );
};
