import { describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomComponent from '../src/components/custom-component.vue';

describe('CustomComponent', () => {
  it('test', async() => {
    const wrapper = mount(CustomComponent);
    wrapper.unmount();
  });
});