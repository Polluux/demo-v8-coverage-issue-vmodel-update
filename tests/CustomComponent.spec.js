import { describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomComponent from '../src/components/CustomComponent.vue';

describe('CustomComponent', () => {
  it('test', async() => {
    const wrapper = mount(CustomComponent);
    wrapper.unmount();
  });
});