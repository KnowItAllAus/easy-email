import { BasicType, IImage, RecursivePartial } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';
import Placeholder from '../../assets/Placeholder.svg';

interface IImageDraggableProps {
  children: React.ReactNode;
}

export const ImageDraggable = ({ children }: IImageDraggableProps) => {

  return (
    <DraggableWrapper
      type={BasicType.IMAGE}
      payload={
        {
          attributes: {
            padding: '0px 0px 0px 0px',
            src: Placeholder
          },
        } as RecursivePartial<IImage>
      }
    >
      {children}
    </DraggableWrapper>
  );
};