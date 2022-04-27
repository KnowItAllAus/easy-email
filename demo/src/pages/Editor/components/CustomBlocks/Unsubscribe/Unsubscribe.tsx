import {
  BasicType,
  components,
  createCustomBlock,
  IBlockData,
} from 'easy-email-core';
import { merge } from 'lodash';
import React from 'react';
import { CustomBlocksType } from '../constants';

const { Button } = components;

export type IUnsubscribe = IBlockData<
  {
    'text-color': string;
    'font-size': string;
    'font-family': string;
  },
  {
    linkText: string;
  }
>;

export const Unsubscribe = createCustomBlock<IUnsubscribe>({
  name: 'Unsubscribe',
  type: CustomBlocksType.UNSUBSCRIBE,
  validParentType: [BasicType.COLUMN],
  create: (payload) => {
    const defaultData: IUnsubscribe = {
      type: CustomBlocksType.UNSUBSCRIBE,
      data: {
        value: {
          linkText: 'Unsubscribe from these emails',
        },
      },
      attributes: {
        'text-color': '#6495ed',
        'font-size': '10px',
        'font-family': 'default',
      },
      children: [
        {
          type: BasicType.TEXT,
          children: [],
          data: { value: {} },
          attributes: {},
        },
      ],
    };
    return merge(defaultData, payload);
  },
  render: (data) => {
    const { linkText } = data.data.value;
    const attributes = data.attributes;

    return (
      <Button
        align='center'
        padding='2px'
        background-color='inherit'
        color={attributes['text-color']}
        target='_blank'
        vertical-align='middle'
        border='none'
        text-align='center'
        font-size={attributes['font-size']}
        font-family={attributes['font-family']}
        href={
          'https://{{unsubscribe_link}}?campaignid={{campaign_id}}&user_id={{user_id}}'
        }
      >
        {linkText}
      </Button>
    );
  },
});

export { Panel } from './Panel';
