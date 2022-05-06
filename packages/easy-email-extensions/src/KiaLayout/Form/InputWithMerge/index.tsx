import { InputProps } from '@arco-design/web-react';
import { enhancer } from '@extensions/components/Form';
import { InputWithMerge, InputWithMergeProps } from './InputWithMerge';

export const TextWithMergeField = enhancer<
InputWithMergeProps,
Required<InputProps>['onChange']
>(InputWithMerge, (value: string) => value);