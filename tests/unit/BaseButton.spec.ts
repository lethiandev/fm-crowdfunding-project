import { shallowMount } from '@vue/test-utils';
import BaseButton from '@/components/BaseButton.vue';

describe('BaseButton.vue', () => {
  it('should render slots content', () => {
    const content = 'Button unit test content';
    const wrapper = shallowMount(BaseButton, {
      slots: { default: content },
    });

    expect(wrapper.text()).toEqual(content);
  });
});
