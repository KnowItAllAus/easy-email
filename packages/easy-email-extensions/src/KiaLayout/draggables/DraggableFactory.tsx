import React from 'react';
import { BasicType } from 'easy-email-core';
import { ButtonDraggable } from './content/ButtonDraggable';
import { HeroDraggable } from './content/HeroDraggable';
import { ImageDraggable } from './content/ImageDraggable';
import { NavbarDraggable } from './content/NavbarDraggable';
import { TextDraggable } from './content/TextDraggable';
import { SpacerDraggable } from './content/SpacerDraggable';
import { DividerDraggable } from './content/DividerDraggable';
import { AccordianDraggable } from './content/AccordianDraggable';
import { CarouselDraggable } from './content/CarouselDraggable';
import { SocialDraggable } from './content/SocialDraggable';
import { WrapperElementDraggable } from './layout/WrapperElementDraggable';
import { SectionDraggable } from './layout/SectionDraggable';
import { GroupDraggable } from './layout/GroupDraggable';
import { ColumnDraggable } from './layout/ColumnDraggable';

interface IBlockMaskWrapperFactoryProps {
  type: BasicType;
  children: React.ReactNode;
}

export const DraggableFactory = ({
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
    case BasicType.WRAPPER:
      return <WrapperElementDraggable>{children}</WrapperElementDraggable>;
    case BasicType.SECTION:
      return <SectionDraggable>{children}</SectionDraggable>;
    case BasicType.GROUP:
      return <GroupDraggable>{children}</GroupDraggable>;
    case BasicType.COLUMN:
      return <ColumnDraggable>{children}</ColumnDraggable>;
  }

  return <>{children}</>;
};
