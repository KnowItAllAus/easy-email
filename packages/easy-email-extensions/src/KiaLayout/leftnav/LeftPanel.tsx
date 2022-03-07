import React, { useEffect, useMemo, useState } from 'react';
import { Card, Tabs } from '@arco-design/web-react';
import { BlockMarketCategory, BlockMarketManager } from '@extensions';
//import { defaultCategories } from '../../ShortcutToolbar/components/BlocksPanel/presetTemplate';
import { defaultCategories } from '../draggables';
import { ShortcutToolbar } from './ShortcutToolbar';
import { TabTitle } from './TabTitle';
import { BlockItemPanel } from './BlockItemPanel';

BlockMarketManager.addCategories(defaultCategories);

export const LeftPanel = () => {
  const [categories, setCategories] = useState<BlockMarketCategory[]>(
    BlockMarketManager.getCategories()
  );

  const filterCategories = useMemo(() => {
    return categories.filter((item) => item.blocks.length > 0);
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
    <Card style={{ border: 'none' }} className="left-hand-nav">
      <Tabs tabPosition="left" size="mini">
        {filterCategories.map((category, index) => (
          <Tabs.TabPane
            style={{
              padding: 0,
              overflow: 'none',
              height: 500,
            }}
            key={category.title}
            title={
              index < filterCategories.length - 1 ? (
                <TabTitle title={category.title} index={index} />
              ) : (
                <>
                  <TabTitle title={category.title} index={index} />
                  <ShortcutToolbar />
                </>
              )
            }
          >
            <BlockItemPanel category={category} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Card>
  );
};
