import React from 'react';
import { Tabs } from '@arco-design/web-react';
import { BlockMarketCategory } from '@extensions';
import { Help } from '@extensions/AttributePanel/components/UI/Help';
import { BasicType } from 'easy-email-core';
import { DraggableFactory } from '../draggables/DraggableFactory';
import styles from '../index.module.scss';
import { IBlockCategory } from './model/BlockCategory';
import { BlockItem } from './BlockItem';
import { BlockItemHeading } from './BlockItemHeading';
import { SectionType } from '../draggables/layout/SectionDraggable';

export const BlockItemPanel: React.FC<{
  category: IBlockCategory;
}> = (props) => {
  return (
    <div className={styles.blockItems}>
      {props.category.blocks.map((block, index) => {
        return (
          <div key={index}>
            {block.heading ? <BlockItemHeading block={block} /> : <></>}
            <DraggableFactory type={block.type as BasicType} subType={block.subType as SectionType}>
              <BlockItem block={block} />
            </DraggableFactory>
          </div>
        );
      })}
    </div>
  );
};
