import { Help } from '@extensions/AttributePanel/components/UI/Help';
import React from 'react';
import styles from '../index.module.scss';
import { IBlockCategoryItem } from './model/BlockCategory';

export const BlockItemHeading = ({ block }: { block: IBlockCategoryItem }) => {
  return (
    <div className={styles.blockItemWrapper}>
      <div className={styles.blockItem} style={{ flexGrow: 1 }}>
        {block.heading}{' '}
      </div>
      {block.description && <Help title={block.description} />}
    </div>
  );
};
