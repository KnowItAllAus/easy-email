import React from 'react';
import { Tabs } from '@arco-design/web-react';
import { BlockMarketCategory } from '@extensions';
import { Help } from '@extensions/AttributePanel/components/UI/Help';
import { BasicType } from 'easy-email-core';
import { DraggableFactory } from '../draggables/DraggableFactory';
import styles from '../index.module.scss';
import { BlockMarketCategoryExtended } from '../draggables';

export const BlockItemPanel: React.FC<{
  category: BlockMarketCategoryExtended;
}> = (props) => {
  const smallText = {
    fontSize: '10px',
    marginLeft: '-2em',

  };

  return (
    <div className={styles.blockItems}>
      {props.category.blocks.map((block, index) => {
        return (
          <>
            {block.heading ? (
              <div className={styles.blockHeading}>{block.heading}</div>
            ) : (
              <></>
            )}
            <DraggableFactory type={block.type as BasicType} key={index}>
              <div className={block.indentTitle ? styles.blockItemWrapperSmall : styles.blockItemWrapper}>
                <div className={block.indentTitle ? styles.blockItemSmall : styles.blockItem} style={{ flexGrow: 1 }}>
                  {/* <span style={block.indentTitle ? smallText : {}}> */}
                    {block.title}{' '}
                  {/* </span> */}
                </div>
                {block.description && <Help title={block.description} />}
              </div>
            </DraggableFactory>
          </>
        );
      })}
    </div>
  );
};

export const BlockItemPanelTabbed: React.FC<{
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
