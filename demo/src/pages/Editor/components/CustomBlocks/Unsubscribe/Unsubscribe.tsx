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
    //'background-color': string;
    //'button-color': string;
    'text-color': string;
  },
  {
    buttonText: string;
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
          buttonText: 'Unsubscribe from these emails',
        },
      },
      attributes: {
        //'background-color': '#ffffff',
        'text-color': '#6495ed',
        //'button-color': '#414141',
      },
      children: [
        {
          type: BasicType.TEXT,
          children: [],
          data: {
            value: {
              content: 'custom block title',
            },
          },
          attributes: {},
        },
      ],
    };
    return merge(defaultData, payload);
  },
  render: (data) => {
    const { buttonText } = data.data.value;
    const attributes = data.attributes;

    return (
      <Button
        align='center'
        padding='2px'
        background-color='inherit'
        // background-color={attributes['button-color']}
        color={attributes['text-color']}
        target='_blank'
        vertical-align='middle'
        border='none'
        text-align='center'
        font-size='10px'
        href={'http://TB.TODO.com.au'}
      >
        {buttonText}
      </Button>
    );
  },
});

export { Panel } from './Panel';
