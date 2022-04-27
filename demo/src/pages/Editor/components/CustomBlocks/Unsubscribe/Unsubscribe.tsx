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
    'background-color': string;
    'button-color': string;
    'button-text-color': string;
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
          buttonText: '>> Unsubscribe from these emails',
        },
      },
      attributes: {
        'background-color': '#ffffff',
        'button-text-color': '#414141',
        'button-color': '#414141',
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
  render: (data, idx, mode, context, dataSource) => {
    const { buttonText } = data.data.value;
    const attributes = data.attributes;

    return (
      <Button
        align='center'
        padding='15px 0px'
        background-color='inherit'
        // background-color={attributes['button-color']}
        color={attributes['button-text-color']}
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
