import React, { useEffect, useMemo, useState } from 'react';
import { Card, Tabs } from '@arco-design/web-react';
import {
  BlockMarketCategory,
  BlockMarketManager,
  ShortcutToolbar,
} from '@extensions';
import { Help } from '@extensions/AttributePanel/components/UI/Help';
import { Stack } from 'easy-email-editor';
import { defaultCategories } from '../ShortcutToolbar/components/BlocksPanel/presetTemplate';
import styles from './index.module.scss';
import { BasicType } from 'easy-email-core';
import { BlockMaskWrapperFactory } from './draggables/DraggableFactory';

BlockMarketManager.addCategories(defaultCategories);

export const LeftPanel = () => {
  const [categories, setCategories] = useState<BlockMarketCategory[]>(
    BlockMarketManager.getCategories()
  );

  const filterCategories = useMemo(() => {
    return categories.filter(
      (item) => item.blocks.length > 0 && item.name !== 'LAYOUT'
    );
  }, [categories]);

  useEffect(() => {
    const onChange = (c: BlockMarketCategory[]) => {
      setCategories(c);
    };
    BlockMarketManager.subscribe(onChange);
    return () => {
      BlockMarketManager.subscribe(onChange);
    };
  }, []);

  return (
    <Card style={{ border: 'none' }}>
      <Tabs tabPosition="left" size="mini">
        {filterCategories.map((category, index) => {
          return (
            <Tabs.TabPane
              style={{
                padding: 0,
                overflow: 'auto',
                height: 500,
              }}
              key={category.title}
              title={
                index < filterCategories.length - 1 ? (
                  <TabTitle title={category.title} index={index} />
                ) : (
                  <>
                    <TabTitle title={category.title} index={index} />
                    <ShortcutToolbar showMore={false} />
                  </>
                )
              }
            >
              <BlockPanelItem category={category} />
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </Card>
  );
};

const TabTitle: React.FC<{ title: string; index: number }> = ({
  title,
  index,
}) => {
  return (
    <div
      style={{
        paddingTop: index === 0 ? 5 : undefined,
        paddingBottom: 10,
      }}
    >
      {title}
    </div>
  );
};

const BlockPanelItem: React.FC<{
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
