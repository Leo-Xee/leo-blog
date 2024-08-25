import { vars } from '@/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const markdown = style({});

/**
 * Heading
 */

export const commonHeading = style({
  position: 'relative',
  marginTop: vars.space.space08,
  marginBottom: vars.space.space03,
  color: vars.themeColor.heading,
  fontWeight: vars.fontWeight.bold,
});

export const heading1 = style({
  marginTop: vars.space.none,
  marginBottom: vars.space.none,
  fontSize: vars.fontSize.heading1,
});

export const heading2 = style({
  fontSize: vars.fontSize.heading2,
});

export const heading3 = style({
  fontSize: vars.fontSize.heading3,
});

export const heading4 = style({
  fontSize: vars.fontSize.heading4,
});

export const heading5 = style({
  fontSize: vars.fontSize.heading5,
});

export const heading6 = style({
  fontSize: vars.fontSize.heading6,
});

/**
 * Text
 */

export const paragraph = style({
  marginTop: vars.space.space05,
  marginBottom: vars.space.space05,
});

export const anchor = style({
  textDecoration: 'underline dashed',
  textUnderlineOffset: '0.35em',

  ':hover': {
    color: vars.themeColor.blue700,
  },
});

export const emphasis = style({
  fontStyle: 'italic',
});

export const strong = style({
  fontWeight: vars.fontWeight.bold,
});

export const deletedText = style({
  textDecoration: 'line-through',
});

/**
 *  Fragment
 */

export const headingFragment = style({
  textDecoration: 'none',

  ':hover': {
    color: vars.themeColor.heading,
    textDecoration: 'none',
  },

  '@media': {
    'screen and (min-width: 769px)': {
      ':hover': {
        color: vars.themeColor.heading,
        textDecoration: 'none',
      },

      selectors: {
        [`&:hover:before`]: {
          position: 'absolute',
          left: '-0.8em',
          content: '#',
          color: vars.themeColor.heading,
        },
      },
    },
  },
});

/**
 * List
 */

export const unorderedList = style({
  listStyleType: 'disc',
  paddingLeft: vars.space.space06,
});

export const orderedList = style({
  listStyleType: 'decimal',
  paddingLeft: vars.space.space06,
});

export const firstListItem = style({
  marginTop: vars.space.space01,
  marginBottom: vars.space.space01,
});

/**
 * Task List
 */

export const taskList = style({
  listStyleType: 'none',
});

export const firstTaskList = style({
  paddingLeft: vars.space.none,
});

export const taskListCheckbox = style({
  position: 'relative',
  border: `1px solid ${vars.themeColor.gray300}`,
  width: '14px',
  height: '14px',
  borderRadius: vars.borderRadius.radii01,
});

export const taskListCheckboxDisabled = style({
  backgroundColor: vars.themeColor.gray100,
});

/**
 * Image
 */

export const imageContainer = style({
  display: 'block',
  margin: `${vars.space.none} auto`,
  boxShadow: vars.themeColor.shadowSmall,
});

export const image = style({
  width: '90%',
  borderRadius: vars.borderRadius.radii05,
});

/**
 * Table
 */

export const table = style({
  paddingTop: vars.space.space02,
  paddingBottom: vars.space.space02,
  paddingLeft: vars.space.space05,
  paddingRight: vars.space.space05,
  border: `1px solid ${vars.themeColor.gray300}`,
});

/**
 * Blockquote
 */

export const blockquote = style({
  marginTop: vars.space.space05,
  marginBottom: vars.space.space05,
  padding: `${vars.space.space05} ${vars.space.space10}`,
  borderRadius: vars.borderRadius.radii03,
  backgroundColor: vars.themeColor.blockquoteBackground,
});

export const blockquoteParagraph = style({
  marginTop: vars.space.none,
});

/**
 * etc
 */

export const ThematicBreak = style({
  marginTop: vars.space.space05,
  marginBottom: vars.space.space05,
  borderTop: `1px solid ${vars.themeColor.gray300}`,
});
