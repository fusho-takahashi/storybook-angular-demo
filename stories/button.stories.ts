import { MatButtonModule } from '@angular/material';

export default {
  title: 'Button',
  includeStories: ['Basic', 'Flat'],
  parameters: { notes: 'default note' },
};

export const Basic = () => ({
  template: `
  <div>
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>
  </div>
  `,
  moduleMetadata: {
    imports: [MatButtonModule],
  },
});

export const Flat = () => ({
  template: `
  <div>
    <button mat-flat-button>Basic</button>
    <button mat-flat-button color="primary">Primary</button>
    <button mat-flat-button color="accent">Accent</button>
    <button mat-flat-button color="warn">Warn</button>
    <button mat-flat-button disabled>Disabled</button>
  </div>
  `,
  moduleMetadata: {
    imports: [MatButtonModule],
  },
});

Basic.story = {
  parameters: { notes: 'note' },
};
