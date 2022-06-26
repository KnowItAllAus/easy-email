import { BasicType } from 'easy-email-core';
import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';

interface INavbarDraggableProps {
  children: React.ReactNode;
}

export const NavbarDraggable = ({ children }: INavbarDraggableProps) => {

  const navbar = {
    payload: {
      type: BasicType.NAVBAR,
      data: {
        value: {
          links: [
            {
              href: '/gettings-started-onboard',
              content: 'HOME',
              color: '#000000',
              'font-size': '13px',
              target: '_blank',
              padding: '15px 10px 15px 10px',
            },
            {
              href: '/try-it-live',
              content: 'NEW',
              color: '#000000',
              'font-size': '13px',
              target: '_blank',
              padding: '15px 10px 15px 10px',
            },
            {
              href: '/templates',
              content: 'WOMEN',
              color: '#000000',
              'font-size': '13px',
              target: '_blank',
              padding: '15px 10px 15px 10px',
            },
            {
              href: '/components',
              content: 'KIDS',
              color: '#000000',
              'font-size': '13px',
              target: '_blank',
              padding: '15px 10px 15px 10px',
            },
            {
              href: '/components',
              content: 'BLOG',
              color: '#000000',
              'font-size': '13px',
              target: '_blank',
              padding: '15px 10px 15px 10px',
            },
          ],
        },
      },
      attributes: {
        align: 'center',
      },
      children: [],
    },
  };

  return (
    <DraggableWrapper
    type={BasicType.NAVBAR}
    payload={navbar.payload}
    >
    {children}
    </DraggableWrapper>
  );
};
