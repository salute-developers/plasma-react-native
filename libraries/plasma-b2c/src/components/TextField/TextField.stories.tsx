import { View } from 'react-native';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { TextField } from './TextField';

interface AdditionalStoryProps {
    showLeftContent: boolean;
    showRightContent: boolean;
}

type StoryTextFieldProps = ComponentProps<typeof TextField> & AdditionalStoryProps;

const notes = `
| **Control**    | **Description**                                                 | **Default** |
|----------------|-----------------------------------------------------------------|-------------|
| placeholder    | Вспомогательный текст, который располагают в форме ввода данных |             |
| label          | Метка-подпись к элементу                                        |             |
| labelPlacement | Расположение лейбла                                             | 'outer'     |
| textBefore     | Слот для вспомогательного текста справа                         |             |
| textAfter      | Слот для вспомогательного текста слева                          |             |
| captionLeft    | Вспомогательный текст снизу слева для поля ввода                |             |
| readOnly       | Компонент доступен только для чтения                            | false       |
| view           | Вид текстового поля                                             | 'default'   |
| size           | Размер текстового поля                                          | 'm'         |
| focused        | Может ли фокусироваться текстовое поле                          | true        |
| disabled       | Текстовое поле неактивно                                        | false       |
`;

const meta: Meta<StoryTextFieldProps> = {
    title: 'Components/TextField',
    component: TextField,
    parameters: {
        notes,
    },
    args: {
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
        label: 'Label',
        labelPlacement: 'outer',
        textBefore: 'TB',
        textAfter: 'TA',
        placeholder: 'Placeholder',
        captionLeft: 'Caption',
        readOnly: false,
        // INFO: кастомные свойства для стори
        showLeftContent: false,
        showRightContent: false,
    },
    argTypes: {
        size: {
            options: ['xs', 's', 'm', 'l'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'positive', 'warning', 'negative'],
            control: {
                type: 'select',
            },
        },
        labelPlacement: {
            options: ['inner', 'outer'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryTextFieldProps) => {
    const [value, setValue] = useState('');

    const onValueChange = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <TextField
            {...props}
            value={value}
            onValueChange={onValueChange}
            contentLeft={
                props.showLeftContent && (
                    <View style={{ backgroundColor: 'red', opacity: 0.25, width: 22, height: 22, borderRadius: 50 }} />
                )
            }
            contentRight={
                props.showRightContent && (
                    <View
                        style={{ backgroundColor: 'green', opacity: 0.25, width: 22, height: 22, borderRadius: 50 }}
                    />
                )
            }
        />
    );
};

export const Default: StoryObj<StoryTextFieldProps> = {
    render: (args) => <StoryDefault {...args} />,
};
