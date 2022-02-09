import { tracked } from '@glimmer/tracking';
import Component from '@glint/environment-ember-loose/glimmer-component';

export interface Signature {
  Element: HTMLDivElement;
  Args: {
    /** the passing list of items */
    items: string[];
  };
  Yields: {
    header?: [];
    /**
     * the exposed parameters of the content block. `item` is the item of the
     * iterating `@items`, and `index` is the index of the item in the list.
     */
    content?: [item: string, index: number];
  };
}

export default class GlintExample extends Component<Signature> {
  @tracked
  title = 'Glint Example';

  /** 用于显示的标题 */
  get displayTitle() {
    return `This is a ${this.title}`;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    GlintExample: typeof GlintExample;
  }
}
