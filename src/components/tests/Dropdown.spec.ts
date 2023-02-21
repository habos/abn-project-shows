import { DOMWrapper, mount } from '@vue/test-utils';
import Dropdown from '../DropDown.vue';
import { describe, expect, test } from '@jest/globals';
import { routes } from '../../router';
import { createWebHistory, createRouter, type Router } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe('Testing props and text', () => {
  const dropdownList = ['Option1', 'Option2', 'Option3'];
  const wrapper = mount(Dropdown, {
    props: {
      dropdownList,
      title: 'Drowdown',
    },
    global: {
      plugins: [router],
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
});

describe('Testing route on click', () => {
  const dropdownList = ['Drama', 'Comedy'];
  const wrapper = mount(Dropdown, {
    props: {
      dropdownList,
      title: 'Drowdown',
    },
    global: {
      plugins: [router],
    },
  });

  test('Testing that home route is called on click', async () => {
    const push = jest.spyOn(router, 'push');
    await wrapper.find('a').trigger('click');

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: 'home' });
  });
});
