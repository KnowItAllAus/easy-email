import { BasicType, IImage, RecursivePartial } from '@core';
import { getImg } from '@core/utils/getImg';
import { BlockMaskWrapper } from '@extensions';
import React from 'react';

interface IImageDraggableProps {
  children: React.ReactNode;
}

export const ImageDraggable = ({ children }: IImageDraggableProps) => {
  const image = getImg('IMAGE_01');  //TODO change to better image

  return (
    <BlockMaskWrapper
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
    </BlockMaskWrapper>
  );
};
