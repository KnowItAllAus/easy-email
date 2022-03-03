import { BasicType } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';
import Placeholder from '../../assets/Placeholder.svg';

interface IColumnDraggableProps {
  children: React.ReactNode;
}

const column =
{
  payload: {
    type: 'column',
    data: {
      value: {},
    },
    attributes: {
      padding: '20px 0px 20px 0px',
      border: 'none',
      'vertical-align': 'top',
      'background-color': '#ffffff',
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
          padding: '0px 0px 0px 0px',
          src: Placeholder,
          width: '150px',
        },
        children: [],
      },
      {
        type: 'text',
        data: {
          value: {
            content: 'Heading',
          },
        },
        attributes: {
          'font-size': '20px',
          padding: '10px 0px 10px 0px',
          'line-height': '1.7',
          align: 'center',
          'font-family': '"Nunito Sans", sans-serif',
        },
        children: [],
      },
      {
        type: 'text',
        data: {
          value: {
            content: 'Subheading',
          },
        },
        attributes: {
          'font-size': '15px',
          padding: '0px 0px 10px 0px',
          'line-height': '1.7',
          align: 'center',
          color: '#9b9b9b',
          'font-family': '"Nunito Sans", sans-serif',
        },
        children: [],
      },
      {
        type: 'text',
        data: {
          value: {
            content:
              'Put the content here',
          },
        },
        attributes: {
          'font-size': '15px',
          padding: '0px 0px 0px 0px',
          'line-height': '1.7',
          align: 'center',
          color: '#9b9b9b',
          'font-family': '"Nunito Sans", sans-serif',
        },
        children: [],
      },
    ],
  },
};

export const ColumnDraggable = ({ children }: IColumnDraggableProps) => {
  return (
    <DraggableWrapper type={BasicType.COLUMN} payload={column.payload}>
      {children}
    </DraggableWrapper>
  );
};
