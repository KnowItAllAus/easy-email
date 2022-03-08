import { BlockMarketCategory } from '../../../ShortcutToolbar';
import { IBlockData } from 'easy-email-core';

export interface IBlockCategory extends BlockMarketCategory {
  blocks: Array<IBlockCategoryItem>;
}

export interface IBlockCategoryItem {
  type: string;
  subType?: string | number,
  heading?: string;
  title: string;
  subItem?: boolean;
  description?: React.ReactNode;
  thumbnail?: string;
  payload?: IBlockData;
  component: () => JSX.Element | null;
}
