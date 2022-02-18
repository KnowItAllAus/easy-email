import { Tabs } from '@arco-design/web-react';
import { BlockMarketCategory } from '@extensions';
import { Help } from '@extensions/AttributePanel/components/UI/Help';
import { BasicType } from 'easy-email-core';
import { Stack } from 'easy-email-editor';
import React from 'react';
import { BlockMaskWrapperFactory } from '../draggables/DraggableFactory';
import styles from '../index.module.scss';

export const BlockPanelItem: React.FC<{
  category: BlockMarketCategory;
}> = React.memo((props) => {
  return (
    <Tabs tabPosition="left">
      {props.category.blocks.map((block, index) => {
        return (
          <Tabs.TabPane
            style={{ padding: 0, height: 500 }}
            key={block.title}
            title={(
              <BlockMaskWrapperFactory type={block.type as BasicType}>
                <Stack alignment="center" spacing="extraTight">
                  <div className={styles.blockItem}>{block.title} </div>
                  {block.description && <Help title={block.description} />}
                </Stack>
              </BlockMaskWrapperFactory>
            )}
          >
            <div
              className="small-scrollbar"
              style={{
                maxHeight: '100%',
                overflow: 'auto',
                paddingRight: 10,
                overflowX: 'hidden',
                padding: '24px 48px 24px 24px',
                display: 'none'
              }}
            >
              {block.component && <block.component />}
            </div>
          </Tabs.TabPane>
        );
      })}
    </Tabs>
  );
});
