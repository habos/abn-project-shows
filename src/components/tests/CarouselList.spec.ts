import { mount } from '@vue/test-utils';
import CarouselList from '../CarouselList.vue';
import { describe, expect, test } from '@jest/globals';
import { CardType } from '@/types';
import ShowItem from '../shows/ShowItem.vue';
import CastItem from '../CastItem.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe('Testing props and text', () => {
  const showCards = [
    { id: '1', rating: {} },
    { id: '2', rating: {} },
  ];
  const wrapper = mount(CarouselList, {
    props: {
      cards: showCards,
      cardType: CardType.Show,
    },
    global: {
      plugins: [router],
    },
  });

  test('Check if cardType impacts card component used', async () => {
    expect(wrapper.findComponent(ShowItem).exists()).toBe(true);

    const castCards = [
      { person: {}, character: {} },
      { person: {}, character: {} },
    ];
    await wrapper.setProps({
      cards: castCards,
      cardType: CardType.Cast,
    });

    expect(wrapper.findComponent(CastItem).exists()).toBe(true);
  });

  test('translate on next click', async () => {
    await wrapper.find('.next').trigger('click');

    const innerStyle = wrapper.find({ ref: 'inner' });

    expect(innerStyle.attributes().style).toBe(
      'transform: translateX(0px)\n                  translateX(-0px);'
    );
  });
});
