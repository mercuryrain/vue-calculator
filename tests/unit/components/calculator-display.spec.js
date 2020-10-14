import { shallowMount } from '@vue/test-utils';
import CalculatorDisplay from '@/components/CalculatorDisplay.vue';

describe('CalculatorDisplay.vue', () => {
  it('renders props.value when passed', () => {
    const value = 'awesome message';
    const wrapper = shallowMount(CalculatorDisplay, {
      propsData: { value },
    });
    expect(wrapper.text()).toMatch(value);
  });
});
