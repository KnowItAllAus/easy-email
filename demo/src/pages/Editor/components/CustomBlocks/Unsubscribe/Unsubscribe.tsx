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
    'text-decoration': string;
  },
  {
    linkText: string;
  }
>;

const mergeTags = {
  unsubscribeLink: '{{unsubscribe_link}}',
  campaignId: '{{campaign_id}}',
  userId: '{{user_id}}',
};

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
        'text-decoration': 'underline',
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
        text-decoration={attributes['text-decoration']}
        href={`${mergeTags.unsubscribeLink}campaignid=${mergeTags.campaignId}&user_id=${mergeTags.userId}`}
      >
        {linkText}
      </Button>
    );
  },
});

export { Panel } from './Panel';
