import { BasicType } from '@core';
import { BlockMaskWrapper } from '@extensions';
import React from 'react';

interface ITextDraggableProps {
  children: React.ReactNode;
}

export const TextDraggable = ({ children }: ITextDraggableProps) => {
  return (
    <BlockMaskWrapper
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
    </BlockMaskWrapper>
  );
};
