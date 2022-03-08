import { BasicType } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';
import _ from 'lodash';

export enum SectionType  {
  SECTION1COLUMN = 1,
  SECTION2COLUMN = 2,
  SECTION3COLUMN = 3,
  SECTION4COLUMN = 4
}

interface ISectionDraggableProps {
  columnNumber: number;
  children: React.ReactNode;
}

export const SectionDraggable = ({
  columnNumber,
  children,
}: ISectionDraggableProps) => {
  const columns = _.range(columnNumber).map(() => {
    return {
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
    };
  });

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
      children: columns,
    },
  };

  return (
    <DraggableWrapper type={BasicType.SECTION} payload={section.payload}>
      {children}
    </DraggableWrapper>
  );
};
