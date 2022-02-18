import React, { useEffect, useMemo, useState } from 'react';
import { Card, Tabs } from '@arco-design/web-react';
import {
  BlockMarketCategory,
  BlockMarketManager
} from '@extensions';
import { defaultCategories } from '../../ShortcutToolbar/components/BlocksPanel/presetTemplate';
import { ShortcutToolbar } from './ShortcutToolbar';
import { TabTitle } from './TabTitle';
import { BlockPanelItem } from './BlockPanelItem';

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
            title={index < filterCategories.length - 1 ? (
              <TabTitle title={category.title} index={index} />
            ) : (
              <>
                <TabTitle title={category.title} index={index} />
                <ShortcutToolbar />
              </>
            )}
          >
            <BlockPanelItem category={category} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Card>
  );
};
