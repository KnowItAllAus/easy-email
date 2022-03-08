import { Help } from '@extensions/AttributePanel/components/UI/Help';
import { Picture } from '@extensions/ShortcutToolbar/components/Picture';
import React from 'react';
import styles from '../index.module.scss';
import { IBlockCategoryItem } from './model/BlockCategory';

export const BlockItem = ({ block }: { block: IBlockCategoryItem }) => {

  return (
    <div
      className={
        styles.blockItemWrapper
      }
    >
      {block.thumbnail ? (
        <Picture src={block.thumbnail} />
      ) : (
        <div
          className={block.subItem ? styles.blockItemSmall : styles.blockItem}
          style={{ flexGrow: 1 }}
        >
          {block.title}
        </div>
      )}
      {block.description && !block.subItem && (
        <Help title={block.description} />
      )}
    </div>
  );
};
