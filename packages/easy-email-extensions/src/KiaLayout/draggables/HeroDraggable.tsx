import { BasicType } from '@core';
import { BlockMaskWrapper } from '@extensions';
import { getImg } from '@extensions/ShortcutToolbar/utils/getImg';
import React from 'react';

interface IHeroDraggableProps {
  children: React.ReactNode;
}

export const HeroDraggable = ({ children }: IHeroDraggableProps) => {
  const hero = {
    payload: {
      type: 'hero',
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#ffffff',
        'background-position': 'center center',
        mode: 'fluid-height',
        padding: '100px 0px 100px 0px',
        'vertical-align': 'top',
        'background-url': getImg('IMAGE_31'),
      },
      children: [
        {
          type: 'text',
          data: {
            value: {
              content: 'We Serve Healthy &amp; Delicious Foods',
            },
          },
          attributes: {
            'font-size': '45px',
            padding: '10px 25px 10px 25px',
            'line-height': '45px',
            align: 'center',
            color: '#ffffff',
          },
          children: [],
        },
        {
          type: 'text',
          data: {
            value: {
              content:
                'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br>',
            },
          },
          attributes: {
            'font-size': '14px',
            padding: '10px 25px 10px 25px',
            'line-height': '1.5',
            align: 'center',
            color: '#ffffff',
          },
          children: [],
        },
        {
          type: 'button',
          data: {
            value: {
              content: 'Get Your Order Here!',
            },
          },
          attributes: {
            align: 'center',
            'background-color': '#f3a333',
            color: '#ffffff',
            'font-size': '13px',
            'font-weight': 'normal',
            'border-radius': '30px',
            padding: '10px 25px 10px 25px',
            'inner-padding': '10px 25px 10px 25px',
            'line-height': '120%',
            target: '_blank',
            'vertical-align': 'middle',
            border: 'none',
            'text-align': 'center',
            href: '#',
          },
          children: [],
        },
      ],
    },
  };

  return (
    <BlockMaskWrapper type={BasicType.HERO} payload={hero.payload}>
      {children}
    </BlockMaskWrapper>
  );
};
