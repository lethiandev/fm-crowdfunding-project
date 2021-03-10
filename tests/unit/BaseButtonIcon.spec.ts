import { mount } from '@vue/test-utils';
import BaseButtonIcon from '@/components/BaseButtonIcon.vue';

describe('BaseButtonIcon.vue', () => {
  it('should render slots content', () => {
    const content = 'Button unit test content';
    const wrapper = mount(BaseButtonIcon, {
      slots: { default: content },
      props: { icon: '' },
    });

    expect(wrapper.text()).toEqual(content);
  });
});
