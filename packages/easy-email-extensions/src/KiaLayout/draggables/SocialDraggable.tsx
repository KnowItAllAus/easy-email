import { BasicType } from '@core';
import React from 'react';
import { DraggableWrapper } from './DraggableWrapper';
import { getImg } from '@extensions/ShortcutToolbar/utils/getImg';

interface ISocialDraggableProps {
  children: React.ReactNode;
}

const social =
  {
    payload: {
      type: BasicType.SOCIAL,
      data: {
        value: {
          elements: [
            {
              href: '#',
              'icon-size': '20px',
              target: '_blank',
              src: getImg('IMAGE_53'),
              content: 'Facebook',
            },
            {
              href: '#',
              'icon-size': '20px',
              target: '_blank',
              src: getImg('IMAGE_54'),
              content: 'Google',
            },
            {
              href: '',
              'icon-size': '20px',
              target: '_blank',
              src: getImg('IMAGE_55'),
              content: 'Twitter',
            },
          ],
        },
      },
      attributes: {
        align: 'center',
        color: '#333333',
        mode: 'horizontal',
        'font-size': '13px',
        'font-weight': 'normal',
        'border-radius': '3px',
        padding: '10px 25px 10px 25px',
        'inner-padding': '4px 4px 4px 4px',
        'line-height': '22px',
        'text-padding': '4px 4px 4px 0px',
        'icon-padding': '0px',
        'icon-size': '20px',
      },
      children: [],
    },
  };

export const SocialDraggable = ({ children }: ISocialDraggableProps) => {

  return (
    <DraggableWrapper
    type={BasicType.SOCIAL}
    payload={social.payload
    }
    >
    {children}
    </DraggableWrapper>
  );
};
