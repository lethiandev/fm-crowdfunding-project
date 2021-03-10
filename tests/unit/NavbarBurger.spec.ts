import { shallowMount } from '@vue/test-utils';
import NavbarBurger from '@/components/NavbarBurger.vue';

describe('NavbarBurger.vue', () => {
  it('should be initially non-active state', () => {
    const wrapper = shallowMount(NavbarBurger);
    expect(wrapper.classes('active')).toBeFalsy();
  });

  it('should activate on click', async () => {
    const wrapper = shallowMount(NavbarBurger);

    await wrapper.trigger('click');
    expect(wrapper.classes('active')).toBeTruthy();
  });

  it('should toggle active state on click', async () => {
    const wrapper = shallowMount(NavbarBurger);

    await wrapper.trigger('click');
    expect(wrapper.classes('active')).toBeTruthy();

    await wrapper.trigger('click');
    expect(wrapper.classes('active')).toBeFalsy();
  });
});
