import { BasicType } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';

interface ISectionDraggableProps {
  children: React.ReactNode;
}

const section = {
  payload: {
    type: 'section',
    data: {
      value: {
        noWrap: false,
      },
    },
    attributes: {
      padding: '20px 0px 20px 0px',
      'background-repeat': 'repeat',
      'background-size': 'auto',
      'background-position': 'top center',
      border: 'none',
      direction: 'ltr',
      'text-align': 'center',
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
        children: [],
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
        children: [],
      },
    ],
  },
};

export const SectionDraggable = ({ children }: ISectionDraggableProps) => {
  return (
    <DraggableWrapper type={BasicType.SECTION} payload={section.payload}>
      {children}
    </DraggableWrapper>
  );
};
