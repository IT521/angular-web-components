import { Component, Prop, h, Listen } from '@stencil/core';
import { format } from '../../utils/utils';
import { SIZE } from './awc-name.types';

const SIZES = ['xsmall', 'small', 'medium', 'large'];

@Component({
  tag: 'awc-name',
  styleUrl: 'awc-name.scss',
  shadow: true,
})
export class AwcName {
  /**
   * First name
   */
  @Prop({ reflect: true }) first: string;

  /**
   * Middle name
   */
  @Prop({ reflect: true }) middle: string;

  /**
   * Last name
   */
  @Prop({ reflect: true }) last: string;

  /**
   * Text size
   */
  @Prop({ reflect: true, mutable: true }) size: SIZE = 'medium';

  /**
   * Has Greeting
   */
  @Prop({ reflect: true }) hasGreeting: boolean = false;

  /**
   * Greeting
   */
  @Prop({ reflect: true }) greeting: string = 'Hello, World! I am';

  /**
   * Has size button
   */
  @Prop({ reflect: true }) hasSizeButton: boolean = false;

  @Listen('click', { capture: true })
  handleClick() {
    let index = SIZES.findIndex(size => size === this.size);
    index = index === 0 ? index + 1 : index - 1;
    this.size = SIZES[index] as SIZE;
    console.log('Text size set to:', this.size);
  }

  private getCss(): string {
    return `awc-name awc-name__text--${this.size}`;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private renderButton() {
    return this.hasSizeButton ? <awc-button text="Change Text Size" color="blue" size="xsmall" margin="medium" /> : null;
  }

  private renderName() {
    const css = this.getCss();

    return this.hasGreeting ? (
      <div class={css}>
        <div>
          {this.greeting} {this.getText()}
        </div>
        {this.renderButton()}
      </div>
    ) : (
      <div class={css}>
        <div>{this.getText()}</div>
        {this.renderButton()}
      </div>
    );
  }

  render() {
    return this.renderName();
  }
}
