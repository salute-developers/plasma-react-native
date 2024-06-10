import { CheckboxConfig, CheckboxProps } from '../Checkbox/Checkbox.types';

interface CustomRadioboxProps extends Omit<CheckboxProps, 'indeterminate'> {}

export interface RadioboxProps extends CustomRadioboxProps {}

export interface RadioboxConfig extends CheckboxConfig {}
