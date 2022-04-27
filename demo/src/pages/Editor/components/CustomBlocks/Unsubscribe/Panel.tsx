import { Stack } from '@demo/components/Stack';
import { useFocusIdx } from 'easy-email-editor';
import {
  AttributesPanelWrapper,
  ColorPickerField,
  TextField,
} from 'easy-email-extensions';
import React from 'react';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper style={{ padding: '20px' }}>
      <Stack vertical>
        <TextField
          label='Text'
          name={`${focusIdx}.data.value.linkText`}
          inline
          alignment='center'
        />
        <ColorPickerField
          label='Text color'
          name={`${focusIdx}.attributes.text-color`}
          inline
          alignment='center'
        />
      </Stack>
    </AttributesPanelWrapper>
  );
}
