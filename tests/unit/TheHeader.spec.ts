import { shallowMount } from '@vue/test-utils';
import TheHeader from '@/components/TheHeader.vue';

describe('TheHeader.vue', () => {
  it('should render slots content', () => {
    const content = 'Header test content';
    const wrapper = shallowMount(TheHeader, {
      slots: { default: content },
    });

    expect(wrapper.text()).toEqual(content);
  });
});
