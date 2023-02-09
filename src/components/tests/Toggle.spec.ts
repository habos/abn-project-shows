import { mount } from '@vue/test-utils';
import Toggle from '../ToggleButton.vue';
import { describe, expect, test } from '@jest/globals';

describe('mount toggle (disabled false)', () => {
  const wrapper = mount(Toggle, {
    props: {
      disabled: false,
    },
  });

  test('check if input is disabled', () => {
    expect(wrapper.find('input').attributes()).not.toHaveProperty('disabled');
  });

  test('emits when clicked', () => {
    wrapper.find('input').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('toggle');
  });
});

describe('mount toggle (disabled true)', () => {
  const wrapper = mount(Toggle, {
    props: {
      disabled: true,
    },
  });

  test('check if input is disabled', () => {
    expect(wrapper.find('input').attributes()).toHaveProperty('disabled');
  });

  test('does not emit when clicked', () => {
    wrapper.find('input').trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('toggle');
  });
});
