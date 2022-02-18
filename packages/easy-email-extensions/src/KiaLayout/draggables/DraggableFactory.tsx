import React from 'react';
import { BasicType } from '@core';
import { ButtonDraggable } from './ButtonDraggable';
import { HeroDraggable } from './HeroDraggable';
import { ImageDraggable } from './ImageDraggable';
import { NavbarDraggable } from './NavbarDraggable';
import { TextDraggable } from './TextDraggable';
import { SpacerDraggable } from './SpacerDraggable';

interface IBlockMaskWrapperFactoryProps {
  type: BasicType;
  children: React.ReactNode;
}

export const BlockMaskWrapperFactory = ({
  type,
  children,
}: IBlockMaskWrapperFactoryProps) => {
  switch (type) {
    case BasicType.TEXT:
      return <TextDraggable>{children}</TextDraggable>;
    case BasicType.IMAGE:
      return <ImageDraggable>{children}</ImageDraggable>;
    case BasicType.BUTTON:
      return <ButtonDraggable>{children}</ButtonDraggable>;
    case BasicType.HERO:
      return <HeroDraggable>{children}</HeroDraggable>;
    case BasicType.NAVBAR:
      return <NavbarDraggable>{children}</NavbarDraggable>;
    case BasicType.SPACER:
      return <SpacerDraggable>{children}</SpacerDraggable>;
  }

  return <><hr />{children}</>;
};
