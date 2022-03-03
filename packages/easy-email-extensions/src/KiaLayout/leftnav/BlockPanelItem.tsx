import React from 'react';
import { Tabs } from '@arco-design/web-react';
import { BlockMarketCategory } from '@extensions';
import { Help } from '@extensions/AttributePanel/components/UI/Help';
import { BasicType } from 'easy-email-core';
import { DraggableFactory } from '../draggables/DraggableFactory';
import styles from '../index.module.scss';

export const BlockPanelItem: React.FC<{
  category: BlockMarketCategory;
}> = (props) => {
  return (
    <div
      style={{
        width: '100px',
        display: 'flex',
        flexDirection: 'column',

      }}
    >

      {props.category.blocks.map((block, index) => {
        return (
          <DraggableFactory type={block.type as BasicType} key={index}>
            <div
              style={{
                width: '100px',
                display: 'flex',
                marginTop: '0.5em',
                marginBottom: '0.5em',
                paddingRight: '0.3em'
              }}
            >
              <div
                className={styles.blockItem}
                style={{ flexGrow: 1 }}
              >
                {block.title}{' '}
              </div>
              {block.description && <Help title={block.description} />}
            </div>
          </DraggableFactory>
        );
      })}

    </div>
  );
};

export const BlockPanelItemTabbed: React.FC<{
  category: BlockMarketCategory;
}> = React.memo((props) => {
  return (
    <Tabs tabPosition="left">
      {props.category.blocks.map((block, index) => {
        return (
          <Tabs.TabPane
            style={{ padding: 0, height: 500, backgroundColor: 'blue' }}
            key={block.title}
            title={(
              <DraggableFactory type={block.type as BasicType}>
                <div
                  style={{
                    width: '100px',
                    display: 'flex',
                  }}
                >
                  <div
                    className={styles.blockItem}
                    style={{ flexGrow: 1, backgroundColor: 'red' }}
                  >
                    {block.title}{' '}
                  </div>
                  {block.description && <Help title={block.description} />}
                </div>
              </DraggableFactory>
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
                display: 'none',
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
