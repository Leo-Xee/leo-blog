import { vars } from '@/styles/themes.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const markdown = style({});

/**
 * Heading
 */

export const commonHeading = style({
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
  marginTop: vars.space.space04,
  marginBottom: vars.space.space04,
});

export const anchor = style({
  color: vars.themeColor.blue600,
});

export const emphasis = style({
  fontStyle: 'italic',
});

export const strong = style({
  fontWeight: vars.fontWeight.bold,
  boxShadow: `inset 0 -6px 0 ${vars.themeColor.yellow100}`,
});

export const deletedText = style({
  textDecoration: 'line-through',
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

// globalStyle(`${markdown} > ul.contains-task-list`, {
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

// FIXME: rehype-class-names 패키지에서 ::after, ::before를 지원하지 않아서 globalStyle로 임시 작성
globalStyle(`${markdown} input[type="checkbox"]:checked::after`, {
  content: '',
  position: 'absolute',
  top: '1px',
  left: '4px',
  width: '5px',
  height: '10px',
  border: `solid ${vars.themeColor.heading}`,
  borderWidth: '0 2px 2px 0',
  transform: 'rotate(45deg)',
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
 * etc
 */

export const ThematicBreak = style({
  marginTop: vars.space.space04,
  marginBottom: vars.space.space04,
  borderTop: `1px solid ${vars.themeColor.gray300}`,
});
