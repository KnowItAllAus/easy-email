import { BasicType } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';
import Placeholder from '../../assets/Placeholder.svg';

interface IWrapperElementDraggableProps {
  children: React.ReactNode;
}

const wrapper =
{
  payload: {
    type: 'wrapper',
    data: {
      value: {},
    },
    attributes: {
      padding: '50px 30px',
      border: '1px solid #aaaaaa',
      direction: 'ltr',
      'text-align': 'center',
      'background-color': '#ffffff',
    },
    children: [
      {
        type: 'section',
        data: {
          value: {
            noWrap: false,
          },
        },
        attributes: {
          padding: '20px',
          'background-repeat': 'repeat',
          'background-size': 'auto',
          'background-position': 'top center',
          border: 'none',
          direction: 'ltr',
          'text-align': 'center',
          'border-top': '1px solid #aaaaaa',
          'border-left': '1px solid #aaaaaa',
          'border-right': '1px solid #aaaaaa',
        },
        children: [
          {
            type: 'column',
            data: {
              value: {},
            },
            attributes: {
              padding: '0px 0px 0px 0px',
              border: 'none',
              'vertical-align': 'top',
            },
            children: [
              {
                type: 'image',
                data: {
                  value: {},
                },
                attributes: {
                  align: 'center',
                  height: 'auto',
                  padding: '0',
                  src: Placeholder
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        type: 'section',
        data: {
          value: {
            noWrap: false,
          },
        },
        attributes: {
          padding: '20px',
          'background-repeat': 'repeat',
          'background-size': 'auto',
          'background-position': 'top center',
          border: 'none',
          direction: 'ltr',
          'text-align': 'center',
          'border-left': '1px solid #aaaaaa',
          'border-right': '1px solid #aaaaaa',
          'border-bottom': '1px solid #aaaaaa',
        },
        children: [
          {
            type: 'column',
            data: {
              value: {},
            },
            attributes: {
              padding: '0px 0px 0px 0px',
              border: '1px solid #dddddd',
              'vertical-align': 'top',
            },
            children: [
              {
                type: 'text',
                data: {
                  value: {
                    content: 'First line of text',
                  },
                },
                attributes: {
                  'font-size': '13px',
                  padding: '20px',
                  'line-height': 1,
                  align: 'left',
                },
                children: [],
              },
              {
                type: 'divider',
                data: {
                  value: {},
                },
                attributes: {
                  align: 'center',
                  'border-width': '1px',
                  'border-style': 'dashed',
                  'border-color': 'lightgrey',
                  padding: '0 20px',
                },
                children: [],
              },
              {
                type: 'text',
                data: {
                  value: {
                    content: 'Second line of text',
                  },
                },
                attributes: {
                  'font-size': '13px',
                  padding: '20px',
                  'line-height': 1,
                  align: 'left',
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
};

export const WrapperElementDraggable = ({ children }: IWrapperElementDraggableProps) => {

  return (
    <DraggableWrapper
    type={BasicType.WRAPPER}
    payload={wrapper.payload
    }
    >
    {children}
    </DraggableWrapper>
  );
};
