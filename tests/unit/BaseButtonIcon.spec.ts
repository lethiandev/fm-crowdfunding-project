import { mount } from '@vue/test-utils';
import BaseIcon from '@/components/BaseIcon.vue';
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

  it('should pass icon prop to the icon component', () => {
    const icon = 'test-icon-svg';
    const wrapper = mount(BaseButtonIcon, {
      props: { icon },
    });

    expect(wrapper.findComponent(BaseIcon).props('icon')).toEqual(icon);
  });
});
