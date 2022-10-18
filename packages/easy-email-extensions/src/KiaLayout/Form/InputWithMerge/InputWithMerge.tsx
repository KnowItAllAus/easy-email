import { IconFont, useEditorProps } from 'easy-email-editor';
import {
  Button as ArcoButton,
  Input as ArcoInput,
  InputProps as ArcoInputProps,
  Popover,
} from '@arco-design/web-react';
import { MergeTags } from '@extensions/AttributePanel';
import React, { useCallback, useState } from 'react';

export interface InputWithMergeProps extends Omit<ArcoInputProps, 'onChange'> {
  quickchange?: boolean;
  value: string;
  onChange: (val: string) => void;
}

export function InputWithMerge(props: InputWithMergeProps) {
  let {
    quickchange,
    value = '',
    onKeyDown: onPropsKeyDown,
    onChange: propsOnChange,
  } = props;
  const { mergeTags } = useEditorProps();
  const [combinedValue, setCombinedValue] = useState(value);

  const onChange = useCallback(
    (val: string) => {
      propsOnChange(val);
    },
    [propsOnChange]
  );

  const onMergeSelect = useCallback(
    (mergeTag: string) => {
      const newValue = value + mergeTag;
      setCombinedValue(newValue);
      onChange(newValue);
    },
    [value]
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
      <div style={{ flex: 1, display: 'flex' }}>
        <ArcoInput
          {...{ ...props, quickchange: undefined, value: combinedValue }}
          onChange={(value) => {
            setCombinedValue(value);
            onChange(value);
          }}
          onKeyDown={onKeyDown}
        />
        {mergeTags && (
          <Popover
            trigger="click"
            content={<MergeTags value={value} onChange={onMergeSelect} />}
          >
            <ArcoButton icon={<IconFont iconName="icon-merge-tags" />} />
          </Popover>
        )}
      </div>
    </>
  );
}
