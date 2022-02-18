import React from 'react';
import { BasicType } from '@core';
import { ButtonDraggable } from './ButtonDraggable';
import { HeroDraggable } from './HeroDraggable';
import { ImageDraggable } from './ImageDraggable';
import { NavbarDraggable } from './NavbarDraggable';
import { TextDraggable } from './TextDraggable';
import { SpacerDraggable } from './SpacerDraggable';
import { DividerDraggable } from './DividerDraggable';
import { AccordianDraggable } from './AccordianDraggable';
import { CarouselDraggable } from './CarouselDraggable';
import { SocialDraggable } from './SocialDraggable';

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
    case BasicType.DIVIDER:
      return <DividerDraggable>{children}</DividerDraggable>;
    case BasicType.ACCORDION:
      return <AccordianDraggable>{children}</AccordianDraggable>;
    case BasicType.CAROUSEL:
      return <CarouselDraggable>{children}</CarouselDraggable>;
    case BasicType.SOCIAL:
       return <SocialDraggable>{children}</SocialDraggable>;
  }

  return <>{children}</>;
};
