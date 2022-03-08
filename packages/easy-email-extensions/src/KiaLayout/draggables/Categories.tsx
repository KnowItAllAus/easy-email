import React from 'react';
import { BasicType } from 'easy-email-core';
import { Stack, TextStyle } from 'easy-email-editor';
import { IBlockCategory } from '../leftnav/model/BlockCategory';

const noopBlock = () => null;

export const defaultCategories: Array<IBlockCategory> = [
  {
    title: 'Layout',
    name: 'LAYOUT',
    blocks: [
      {
        type: BasicType.SECTION,
        heading: 'Section',
        title: '2 cols',
        subItem: true,
        description: (
          <Stack vertical spacing="none">
            <TextStyle>
              Sections are intended to be used as rows within your email. They
              will be used to structure the layout.
            </TextStyle>
            <TextStyle>
              Sections cannot nest in sections. Columns can nest in sections;
              all content must be in a column.
            </TextStyle>
          </Stack>
        ),
        component: noopBlock,
      },
      {
        type: BasicType.SECTION,
        title: '3 cols',
        subItem: true,
        description: (
          <Stack vertical spacing="none">
            <TextStyle>
              Sections are intended to be used as rows within your email. They
              will be used to structure the layout.
            </TextStyle>
            <TextStyle>
              Sections cannot nest in sections. Columns can nest in sections;
              all content must be in a column.
            </TextStyle>
          </Stack>
        ),
        component: noopBlock,
      },
      {
        type: BasicType.SECTION,
        title: '4 cols',
        subItem: true,
        description: (
          <Stack vertical spacing="none">
            <TextStyle>
              Sections are intended to be used as rows within your email. They
              will be used to structure the layout.
            </TextStyle>
            <TextStyle>
              Sections cannot nest in sections. Columns can nest in sections;
              all content must be in a column.
            </TextStyle>
          </Stack>
        ),
        component: noopBlock,
      },
      {
        type: BasicType.COLUMN,
        title: 'Column',
        description: (
          <Stack vertical spacing="none">
            <TextStyle>
              Columns enable you to horizontally organize the content within
              your sections. They must be located under "Section" block in order
              to be considered by the engine. To be responsive, columns are
              expressed in terms of percentage.
            </TextStyle>
            <TextStyle>
              Every single column has to contain something because they are
              responsive containers, and will be vertically stacked on a mobile
              view.
            </TextStyle>
          </Stack>
        ),
        component: noopBlock,
      },
      {
        type: BasicType.WRAPPER,
        title: 'Wrapper',
        description: `Wrapper enables to wrap multiple sections together. It's especially useful to achieve nested layouts with shared border or background images across sections.
        `,
        component: noopBlock,
      },

      {
        type: BasicType.GROUP,
        title: 'Group',
        description: `Group allows you to prevent columns from stacking on
          mobile. To do so, wrap the columns inside a group
          block, so they'll stay side by side on mobile.`,
        component: noopBlock,
      },
    ],
  },
  {
    title: 'Content',
    name: 'CONTENT',
    blocks: [
      {
        type: BasicType.TEXT,
        title: 'Text',
        description: 'This block allows you to display text in your email.',
        component: noopBlock,
      },
      {
        type: BasicType.IMAGE,
        title: 'Image',
        description: (
          <Stack vertical spacing="none">
            <TextStyle>
              Displays a responsive image in your email. It is similar to the
              HTML "&lt;img/&gt;" tag. Note that if no width is provided, the
              image will use the parent column width.
            </TextStyle>
          </Stack>
        ),
        component: noopBlock,
      },
      {
        type: BasicType.BUTTON,
        title: 'Button',
        description: 'Displays a customizable button.',
        component: noopBlock,
      },
      {
        type: BasicType.HERO,
        title: 'Hero',
        description: `This block displays a hero image. It behaves like an
        'section' with a single 'column'.`,
        component: noopBlock,
      },
      {
        type: BasicType.NAVBAR,
        title: 'Navbar',
        description: `Displays a menu for navigation with an optional hamburger
        mode for mobile devices.`,
        component: noopBlock,
      },
      {
        type: BasicType.SPACER,
        title: 'Spacer',
        description: 'Displays a blank space.',
        component: noopBlock,
      },
      {
        type: BasicType.DIVIDER,
        title: 'Divider',
        description: `Displays a horizontal divider that can be customized like a
        HTML border.`,
        component: noopBlock,
      },
      {
        type: BasicType.ACCORDION,
        title: 'Accordion',
        description: `Accordion is an interactive component to stack content in
        tabs, so the information is collapsed and only the titles
        are visible. Readers can interact by clicking on the tabs
        to reveal the content, providing a great experience on
        mobile devices where space is scarce.`,
        component: noopBlock,
      },
      {
        type: BasicType.CAROUSEL,
        title: 'Carousel',
        description: `This block displays a gallery of images or "carousel".
        Readers can interact by hovering and clicking on
        thumbnails depending on the email client they use.`,
        component: noopBlock,
      },
      {
        type: BasicType.SOCIAL,
        title: 'Social',
        description: `Displays calls-to-action for various social networks with
        their associated logo.`,
        component: noopBlock,
      },
    ],
  },
];
