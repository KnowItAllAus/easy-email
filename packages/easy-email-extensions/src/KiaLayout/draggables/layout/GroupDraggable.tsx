import { BasicType } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';
import Placeholder from '../../assets/Placeholder.svg';

interface IGroupDraggableProps {
  children: React.ReactNode;
}

const group =
{
  payload: {
    type: 'group',
    data: {
      value: {},
    },
    attributes: {
      'vertical-align': 'top',
      direction: 'ltr',
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
              padding: '0px 5px 0px 10px',
              src: Placeholder,
              width: '',
            },
            children: [],
          },
        ],
      },
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
              padding: '0px 10px 0px 5px',
              src: Placeholder,
              width: '',
            },
            children: [],
          },
        ],
      },
    ],
  },
};

export const GroupDraggable = ({ children }: IGroupDraggableProps) => {
  return (
    <DraggableWrapper type={BasicType.GROUP} payload={group.payload}>
      {children}
    </DraggableWrapper>
  );
};
