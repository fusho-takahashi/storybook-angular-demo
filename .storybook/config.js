import { configure } from '@storybook/angular';

configure(require.context('../stories', true, /.stories.ts$/), module);
