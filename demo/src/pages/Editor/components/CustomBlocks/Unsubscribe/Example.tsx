import { BlockMaskWrapper } from 'easy-email-extensions';
import React from 'react';
import { CustomBlocksType } from '../constants';

export function Example() {
  return (
    <BlockMaskWrapper type={CustomBlocksType.UNSUBSCRIBE} payload={{}}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
          }}
        />
      </div>
    </BlockMaskWrapper>
  );
}
