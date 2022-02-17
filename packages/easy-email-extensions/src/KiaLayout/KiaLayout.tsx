import { Card, ConfigProvider, Layout, Tabs } from '@arco-design/web-react';
import { useEditorProps } from 'easy-email-editor';
import React from 'react';
import { SourceCodePanel } from '../SourceCodePanel';
import { AttributePanel } from '../AttributePanel';
import { BlockLayer, BlockLayerProps } from '../BlockLayer';
import { InteractivePrompt } from '../InteractivePrompt';
import styles from './index.module.scss';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { LeftPanel } from './LeftPanel';

export const KiaLayout: React.FC<
  {
    showSourceCode?: boolean;
  } & BlockLayerProps
> = (props) => {
  const INITIAL_WIDTH = 500;
  const MAX_WIDTH = 600;
  const { height: containerHeight } = useEditorProps();
  const { showSourceCode = true } = props;

  return (
    <ConfigProvider locale={enUS}>
      <Layout
        className={styles.KiaLayout}
        style={{
          display: 'flex',
          width: '100vw',
          overflow: 'hidden',
          minWidth: 1400,
        }}
      >
        <Layout.Sider
          resizeDirections={['right']}
          style={{
            minWidth: 300,
            maxWidth: MAX_WIDTH,
            width: INITIAL_WIDTH,
            paddingRight: 0,
            zIndex: '1',
          }}
        >
          <Card bodyStyle={{ padding: 0 }} style={{ border: 'none' }}>
            <Card.Grid
              className={styles.customScrollBar}
              style={{
                flex: 1,
                paddingBottom: 50,
                border: 'none',
                height: containerHeight,
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
            >
              <LeftPanel />
            </Card.Grid>
          </Card>
        </Layout.Sider>

        <Layout style={{ height: containerHeight }}>{props.children}</Layout>

        <Layout.Sider
          style={{
            height: containerHeight,
            minWidth: 300,
            maxWidth: 350,
            width: 350,
          }}
          className={styles.rightSide}
        >
          <Card
            size="small"
            id="rightSide"
            style={{
              maxHeight: '100%',
              height: '100%',
              borderLeft: 'none',
            }}
            bodyStyle={{ padding: 0 }}
            className={styles.customScrollBar}
          >
            <Tabs>
              <Tabs.TabPane key="Configuration" title="Configuration">
                <AttributePanel />
              </Tabs.TabPane>
              {showSourceCode && (
                <Tabs.TabPane key="Source code" title="Source code">
                  <SourceCodePanel />
                </Tabs.TabPane>
              )}
              <Tabs.TabPane key="Layout" title="Layer">
                <BlockLayer renderTitle={props.renderTitle} />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Layout.Sider>

        <InteractivePrompt />
      </Layout>
    </ConfigProvider>
  );
};
