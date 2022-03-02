import { BasicType } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from './DraggableWrapper';
import { getImg } from '@extensions/ShortcutToolbar/utils/getImg';

interface ICarouselDraggableProps {
  children: React.ReactNode;
}

const carousel =
  {
    payload: {
      type: 'carousel',
      data: {
        value: {
          images: [
            {
              src: getImg('IMAGE_15'),
              target: '_blank',
            },
            {
              src: getImg('IMAGE_16'),
              target: '_blank',
            },
            {
              src: getImg('IMAGE_17'),
              target: '_blank',
            },
          ],
        },
      },
      attributes: {
        align: 'center',
        'left-icon': getImg('IMAGE_18'),
        'right-icon': getImg('IMAGE_19'),
        'icon-width': '44px',
        thumbnails: 'visible',
      },
      children: [],
    },
  };

export const CarouselDraggable = ({ children }: ICarouselDraggableProps) => {

  return (
    <DraggableWrapper
    type={BasicType.CAROUSEL}
    payload={carousel.payload
    }
    >
    {children}
    </DraggableWrapper>
  );
};
