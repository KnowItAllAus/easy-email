import {
  Collapse,
  Grid,
  Input,
  InputProps,
  Popover,
  Space,
} from '@arco-design/web-react';
import { FontFamily, MergeTags } from '@extensions/AttributePanel';
import { AttributesPanelWrapper } from '@extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import {
  ColorPickerField,
  InputWithUnitField,
  TextAreaField,
  TextField,
} from '@extensions/components/Form';
import { AddFont } from '@extensions/components/Form/AddFont';
import {
  IconFont,
  Stack,
  useEditorProps,
  useFocusIdx,
} from 'easy-email-editor';
import React from 'react';
import { Button as ArcoButton } from '@arco-design/web-react';
import { PropsProvider } from '@/components/Provider/PropsProvider';
//import { FontFamily } from '../../attributes/FontFamily';

export function Page() {
  const { focusIdx } = useFocusIdx();
  const { mergeTags } = useEditorProps();

  const testProps = {
    value: '',
  };

  //.. TB DEBUG STUBs
  const onChange = (val: string) => {
    testProps.value = val;
    console.log(`on change ${testProps.value}`);
  };

  // const props = {
  //   value: '',
  //   onChange: (value: string, e: any) => {},
  // } as InputProps;

  if (!focusIdx) return null;
  return (
    <AttributesPanelWrapper style={{ padding: 0 }}>
      <Stack.Item fill>
        <Collapse defaultActiveKey={['0', '1']}>
          <Collapse.Item name="0" header="Email Setting">
            <Space direction="vertical">
              <Input
                style={{ flex: 1 }}
                value={testProps.value}
                onChange={onChange}
                name="TB DEBUG"
              />

              {mergeTags && (
                <Popover
                  trigger="click"
                  content={<MergeTags value={testProps.value} onChange={onChange} />}
                >
                  <ArcoButton icon={<IconFont iconName="icon-merge-tags" />} />
                </Popover>
              )}
              <TextField label="Subject" name={'subject'} inline />
              <TextField label="SubTitle" name={'subTitle'} inline />
              <InputWithUnitField
                label="Width"
                name={`${focusIdx}.attributes.width`}
                inline
              />
              <InputWithUnitField
                label="Breakpoint"
                helpText="Allows you to control on which breakpoint the layout should go desktop/mobile."
                name={`${focusIdx}.data.value.breakpoint`}
                inline
              />
            </Space>
          </Collapse.Item>
          <Collapse.Item name="1" header="Theme Setting">
            <Stack vertical spacing="tight">
              <Grid.Row>
                <Grid.Col span={11}>
                  <FontFamily />
                </Grid.Col>
                <Grid.Col offset={1} span={11}>
                  <InputWithUnitField
                    label="Font size"
                    name={`${focusIdx}.data.value.font-size`}
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col span={11}>
                  <ColorPickerField
                    label="Text color"
                    name={`${focusIdx}.data.value.text-color`}
                  />
                </Grid.Col>
                <Grid.Col offset={1} span={11}>
                  <InputWithUnitField
                    label="Line height"
                    unitOptions="percent"
                    name={`${focusIdx}.data.value.line-height`}
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col span={11}>
                  <ColorPickerField
                    label="Background"
                    name={`${focusIdx}.attributes.background-color`}
                  />
                </Grid.Col>
                <Grid.Col offset={1} span={11}>
                  <ColorPickerField
                    label="Content background"
                    name={`${focusIdx}.data.value.content-background-color`}
                  />
                </Grid.Col>
              </Grid.Row>

              <TextAreaField
                label="Style"
                name={`${focusIdx}.data.value.user-style.content`}
              />
              <AddFont />
            </Stack>
          </Collapse.Item>
        </Collapse>
      </Stack.Item>
    </AttributesPanelWrapper>
  );
}
