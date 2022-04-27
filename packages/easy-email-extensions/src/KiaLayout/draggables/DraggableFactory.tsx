import { BasicType } from 'easy-email-core';
import { BlockAvatarWrapper } from 'easy-email-editor';
import React from 'react';
import { AccordianDraggable } from './content/AccordianDraggable';
import { ButtonDraggable } from './content/ButtonDraggable';
import { CarouselDraggable } from './content/CarouselDraggable';
import { DividerDraggable } from './content/DividerDraggable';
import { HeroDraggable } from './content/HeroDraggable';
import { ImageDraggable } from './content/ImageDraggable';
import { NavbarDraggable } from './content/NavbarDraggable';
import { SocialDraggable } from './content/SocialDraggable';
import { SpacerDraggable } from './content/SpacerDraggable';
import { TextDraggable } from './content/TextDraggable';
import { ColumnDraggable } from './layout/ColumnDraggable';
import { GroupDraggable } from './layout/GroupDraggable';
import { SectionDraggable, SectionType } from './layout/SectionDraggable';
import { WrapperElementDraggable } from './layout/WrapperElementDraggable';

interface IBlockMaskWrapperFactoryProps {
  type: BasicType;
  subType?: SectionType;
  children: React.ReactNode;
}

export const DraggableFactory = ({
  type,
  subType,
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
      return (
        <SectionDraggable columnNumber={parseInt(subType?.toString() ?? '')}>
          {children}
        </SectionDraggable>
      );

    case BasicType.GROUP:
      return <GroupDraggable>{children}</GroupDraggable>;
    case BasicType.COLUMN:
      return <ColumnDraggable>{children}</ColumnDraggable>;
  }

  return <BlockAvatarWrapper type={type}>{children}</BlockAvatarWrapper>

};
