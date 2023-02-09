import { DOMWrapper, mount } from '@vue/test-utils';
import Dropdown from '../DropDown.vue';
import { describe, expect, test } from '@jest/globals';

describe('mount dropdown', () => {
  const dropdownList = ['Option1', 'Option2', 'Option3'];
  const wrapper = mount(Dropdown, {
    props: {
      dropdownList,
    },
  });

  const testArr = wrapper.findAll('a').map(function (e, i) {
    return [e, dropdownList[i]];
  });

  test('dropdown should have 3 items', () => {
    expect(wrapper.findAll('a')).toHaveLength(3);
  });

  test.each(testArr)(
    'test list text',
    (a: DOMWrapper<HTMLAnchorElement>, b: string) => {
      expect(a.text()).toContain(b);
    }
  );

  wrapper.find('a').trigger('click');

  test('emits when clicked', () => {
    expect(wrapper.emitted()).toHaveProperty('optionSelected');
    const optionEvent = wrapper.emitted('optionSelected');
    if (optionEvent !== undefined) {
      expect(optionEvent).toHaveLength(1);
      expect(optionEvent[0]).toEqual(['Option1']);
    }
  });
});
