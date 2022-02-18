import React from 'react';
import { BasicType } from '@core';
import { DraggableWrapper } from './DraggableWrapper';

interface ITextDraggableProps {
  children: React.ReactNode;
}

export const TextDraggable = ({ children }: ITextDraggableProps) => {
  return (
    <DraggableWrapper
      type={BasicType.TEXT}
      payload={{
        attributes: {
          'font-size': '14px',
          padding: '0px 0px 0px 0px',
        },
        data: {
          value: {
            content: '14px',
          },
        },
      }}
    >
      {children}
    </DraggableWrapper>
  );
};
