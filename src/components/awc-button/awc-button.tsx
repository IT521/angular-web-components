import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'awc-button',
  styleUrl: 'awc-button.scss',
  shadow: true,
})
export class AwcButton {
  /**
   * Button text
   */
  @Prop({ reflect: true }) text: string = '';

  /**
   * Button color
   */
  @Prop({ reflect: true }) color: 'blue' | 'green' | 'red' | 'black' = 'blue';

  /**
   * Button size
   */
  @Prop({ reflect: true }) size: 'xsmall' | 'small' | 'medium' | 'large' = 'xsmall';

  /**
   * Margin top size
   */
  @Prop({ reflect: true }) margin: 'none' | 'xsmall' | 'small' | 'medium' | 'large' = 'none';

  private getCss(): string {
    return `awc-button awc-button__color--${this.color} awc-button__size--${this.size} awc-button__margin--${this.margin}`;
  }

  render() {
    return <button class={this.getCss()}>{this.text}</button>;
  }
}
