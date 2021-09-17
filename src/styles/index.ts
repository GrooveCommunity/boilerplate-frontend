import {
  padding,
  percent,
} from 'csx';
import {
  cssRule,
  style,
} from 'typestyle';


cssRule('html, body, #root', {
  backgroundColor: '#fafbfe',
  height: percent(100),
  width: percent(100),
  color: '#6c757d',
});
cssRule('.autocompleteInherit', { position: 'relative', height: '60px' });
cssRule('.autocompleteInherit label', { position: 'absolute', width: '100%' });

export const wrapper = style({
  justifyContent: 'center',
  padding: padding(0, 30),
  width: percent(100),
  display: 'flex',
});

export const container = style({
  height: percent(100),
  width: percent(100),
  maxWidth: 1720,
});
