import { BasicType } from '@core';
import { BlockMaskWrapper } from '@extensions';
import React from 'react';

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
      return (
        <BlockMaskWrapper
          type={BasicType.TEXT}
          payload={{
            attributes: {
              'font-size': '14px',
              padding: '0px 0px 0px 0px',
            },
            data: {
              value: {
                content: '14px',
              },
            },
          }}
        >
          {children}
        </BlockMaskWrapper>
      );
  }

  return <>{children}</>;
};
