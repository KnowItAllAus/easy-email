import { BasicType, IImage, RecursivePartial } from '@core';
import { getImg } from '@core/utils/getImg';
import React from 'react';
import { DraggableWrapper } from './DraggableWrapper';

interface IImageDraggableProps {
  children: React.ReactNode;
}

export const ImageDraggable = ({ children }: IImageDraggableProps) => {
  const image = getImg('IMAGE_01');  //TODO change to better image

  return (
    <DraggableWrapper
      type={BasicType.IMAGE}
      payload={
        {
          attributes: {
            src: image,
            padding: '0px 0px 0px 0px',
          },
        } as RecursivePartial<IImage>
      }
    >
      {children}
    </DraggableWrapper>
  );
};
