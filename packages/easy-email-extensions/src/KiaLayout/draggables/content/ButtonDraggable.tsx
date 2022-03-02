import { BasicType, IButton, RecursivePartial } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';

interface IButtonDraggableProps {
  children: React.ReactNode;
}

export const ButtonDraggable = ({ children }: IButtonDraggableProps) => {
  const button = {
    payload: {
      attributes: {
        align: 'center',
        'background-color': '#8ccaca',
        color: '#ffffff',
        'font-size': '12px',
        'font-weight': 'normal',
        'border-radius': '0px',
        padding: '10px 25px 10px 25px',
        'inner-padding': '10px 25px 10px 25px',
        'line-height': '120%',
        target: '_blank',
        'vertical-align': 'middle',
        border: 'none',
        'text-align': 'center',
        href: '#',
      },
      data: {
        value: {
          content: 'READ MORE',
        },
      },
    },
  };

  return (
    <DraggableWrapper
      type={BasicType.BUTTON}
      payload={
        {
          ...button.payload,
        } as RecursivePartial<IButton>
      }
    >
      {children}
    </DraggableWrapper>
  );
};
