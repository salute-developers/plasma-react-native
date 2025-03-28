import { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconScribbleDiagonal, IconShazam } from '@salutejs/plasma-icons-native';

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
            options: ['xs', 's', 'm'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'negative'],
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
            contentLeft={props.showLeftContent && <IconScribbleDiagonal />}
            contentRight={props.showRightContent && <IconShazam />}
        />
    );
};

export const Default: StoryObj<StoryTextFieldProps> = {
    render: (args) => <StoryDefault {...args} />,
};
