import { expect } from 'chai';
import { ComponentPublicInstance } from 'vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import BaseIcon from '@/components/BaseIcon.vue';

const ICON_DEFAULT = 'icon-source-svg';
const ICON_SECOND = 'another-icon-source-svg';

function baseIconFactory(props: { icon: string }) {
  return shallowMount(BaseIcon, { props });
}

describe('BaseIcon.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    const icon = ICON_DEFAULT;
    wrapper = baseIconFactory({ icon });
  });

  it('should render <img> element', async () => {
    expect(wrapper.find('img').exists()).to.be.true;
  });

  it('should render <img> element with correct source', async () => {
    expect(wrapper.find('img').attributes('src')).to.equals(ICON_DEFAULT);
  });

  it('should update <img> src attribute on prop change', async () => {
    await wrapper.setProps({ icon: ICON_SECOND });
    expect(wrapper.find('img').attributes('src')).to.equals(ICON_SECOND);
  });
});
