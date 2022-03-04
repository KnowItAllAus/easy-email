import { BasicType } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';
import { getImg } from '@extensions/ShortcutToolbar/utils/getImg';

interface IAccordianDraggableProps {
  children: React.ReactNode;
}

const list =
  {
    payload: {
      type: 'accordion',
      data: {
        value: {},
      },
      attributes: {
        'icon-height': '32px',
        'icon-width': '32px',
        'icon-align': 'middle',
        'icon-position': 'right',
        'icon-unwrapped-url': getImg('IMAGE_09'),
        'icon-wrapped-url': getImg('IMAGE_10'),
        padding: '10px 25px 10px 25px',
        border: '1px solid #d9d9d9',
      },
      children: [
        {
          type: 'accordion-element',
          data: {
            value: {},
          },
          attributes: {
            'icon-align': 'middle',
            'icon-height': '32px',
            'icon-width': '32px',
            'icon-position': 'right',
            padding: '10px 25px 10px 25px',
          },
          children: [
            {
              type: 'accordion-title',
              data: {
                value: {
                  content: 'Why use an accordion?',
                },
              },
              attributes: {
                'font-size': '13px',
                padding: '16px 16px 16px 16px',
              },
              children: [],
            },
            {
              type: 'accordion-text',
              data: {
                value: {
                  content:
                    '<span style="line-height:20px">\n                Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.\n              </span>',
                },
              },
              attributes: {
                'font-size': '13px',
                padding: '16px 16px 16px 16px',
                'line-height': '1',
              },
              children: [],
            },
          ],
        },
        {
          type: 'accordion-element',
          data: {
            value: {},
          },
          attributes: {
            'icon-align': 'middle',
            'icon-height': '32px',
            'icon-width': '32px',
            'icon-position': 'right',
            padding: '10px 25px 10px 25px',
          },
          children: [
            {
              type: 'accordion-title',
              data: {
                value: {
                  content: 'How it works',
                },
              },
              attributes: {
                'font-size': '13px',
                padding: '16px 16px 16px 16px',
              },
              children: [],
            },
            {
              type: 'accordion-text',
              data: {
                value: {
                  content:
                    '<span style="line-height:20px">\n                Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.\n              </span>',
                },
              },
              attributes: {
                'font-size': '13px',
                padding: '16px 16px 16px 16px',
                'line-height': '1',
              },
              children: [],
            },
          ],
        },
      ],
    },
  };

export const AccordianDraggable = ({ children }: IAccordianDraggableProps) => {

  return (
    <DraggableWrapper
    type={BasicType.ACCORDION}
    payload={list.payload
    }
    >
    {children}
    </DraggableWrapper>
  );
};
