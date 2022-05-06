import { IconFont } from '@/components/IconFont';
import { useEditorProps } from '@/hooks/useEditorProps';
import {
  Input as ArcoInput,
  InputProps as ArcoInputProps,
  Popover,
  Button as ArcoButton
} from '@arco-design/web-react';
import { MergeTags } from '@extensions/AttributePanel';
import React, { useCallback } from 'react';

export interface InputWithMergeProps extends Omit<ArcoInputProps, 'onChange'> {
  quickchange?: boolean;
  value: string;
  onChange: (val: string) => void;
}

export function InputWithMerge(props: InputWithMergeProps) {
  const {
    quickchange,
    value = '',
    onKeyDown: onPropsKeyDown,
    onChange: propsOnChange,
  } = props;
  const { mergeTags } = useEditorProps();

  const onChange = useCallback(
    (val: string) => {
      propsOnChange(val);
    },
    [propsOnChange]
  );

  const onKeyDown = useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) => {
      if (onPropsKeyDown) {
        onPropsKeyDown?.(ev);
      }

      if (quickchange) {
        let step = 0;
        if (ev.key === 'ArrowUp') {
          step = 1;
        }
        if (ev.key === 'ArrowDown') {
          step = -1;
        }

        if (step) {
          if (/^\d+/.test(value)) {
            ev.preventDefault();
            onChange(
              String(value).replace(/^(\d+)/, (_, match) => {
                return (Number(match) + step).toString();
              })
            );
          }
        }
      }
    },
    [onPropsKeyDown, quickchange, value, onChange]
  );

  return (
    <>
    <ArcoInput
      {...{ ...props, quickchange: undefined }}
      onChange={(value) => onChange(value)}
      onKeyDown={onKeyDown}
    />
    {mergeTags && (
      <Popover
        trigger="click"
        content={<MergeTags value={value} onChange={onChange} />}
      >
        <ArcoButton icon={<IconFont iconName="icon-merge-tags" />} />
      </Popover>
    )}
    </>
  );
}
