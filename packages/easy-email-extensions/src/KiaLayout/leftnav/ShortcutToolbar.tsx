import { BlocksPanel } from '@extensions/ShortcutToolbar/components/BlocksPanel';
import { BasicType } from 'easy-email-core';
import { IconFont, Stack, BlockAvatarWrapper } from 'easy-email-editor';
import React, { useRef } from 'react';

export function ShortcutToolbar() {
  const blocksPanelRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Divider />
      <div
        style={{
          paddingLeft: '0.5em',
          paddingRight: '1em',
        }}
      >
        <div>Shortcuts</div>
        <Stack vertical alignment="center" distribution="center">
          <BlocksPanel>
            <div ref={blocksPanelRef} />
          </BlocksPanel>

          <BlockAvatarWrapper type={BasicType.TEXT}>
            <IconFont
              title="Text"
              iconName="icon-text-rounded"
              style={{
                fontSize: 18,
                textAlign: 'center',
                cursor: 'grab',
                color: '#6ED787',
              }}
            />
          </BlockAvatarWrapper>
          <BlockAvatarWrapper type={BasicType.IMAGE}>
            <IconFont
              title="Image"
              iconName="icon-img"
              style={{
                fontSize: 20,
                textAlign: 'center',
                cursor: 'grab',
                color: '#FAD061',
              }}
            />
          </BlockAvatarWrapper>
          <BlockAvatarWrapper type={BasicType.BUTTON}>
            <IconFont
              title="Button"
              iconName="icon-button"
              style={{
                fontSize: 22,
                textAlign: 'center',
                cursor: 'grab',
                color: '#59BEF8',
              }}
            />
          </BlockAvatarWrapper>
          <BlockAvatarWrapper
            payload={{
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
            }}
            type={BasicType.SECTION}
          >
            <IconFont
              title="Section"
              iconName="icon-section"
              style={{
                fontSize: 22,
                textAlign: 'center',
                cursor: 'grab',
                color: '#e5afe5',
              }}
            />
          </BlockAvatarWrapper>
        </Stack>
      </div>
    </>
  );
}

const Divider = () => {
  return (
    <div
      style={{
        marginRight: '0.75em',
        marginTop: '1.5em',
        marginBottom: '2em',
        borderBottom: '1px solid gray',
      }}
    />
  );
};
