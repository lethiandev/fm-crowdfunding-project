import { shallowMount } from '@vue/test-utils';
import NavBurger from '@/components/NavBurger.vue';

describe('NavBurger.vue', () => {
  it('should be initially non-active state', () => {
    const wrapper = shallowMount(NavBurger);
    expect(wrapper.classes('active')).toBeFalsy();
  });

  it('should activate on click', async () => {
    const wrapper = shallowMount(NavBurger);

    await wrapper.trigger('click');
    expect(wrapper.classes('active')).toBeTruthy();
  });

  it('should toggle active state on click', async () => {
    const wrapper = shallowMount(NavBurger);

    await wrapper.trigger('click');
    expect(wrapper.classes('active')).toBeTruthy();

    await wrapper.trigger('click');
    expect(wrapper.classes('active')).toBeFalsy();
  });
});
