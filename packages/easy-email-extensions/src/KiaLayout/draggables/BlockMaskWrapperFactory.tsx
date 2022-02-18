import { BasicType } from '@core';
import React from 'react';
import { TextDraggable } from './TextDraggable';

interface IBlockMaskWrapperFactoryProps {
  type: BasicType;
  children: React.ReactNode;
}

export const BlockMaskWrapperFactory = ({
  type,
  children,
}: IBlockMaskWrapperFactoryProps) => {
  switch (type) {
    case BasicType.TEXT:
      return (
        <TextDraggable>
        {children}
        </TextDraggable>
      );
  }

  return <>{children}</>;
};
