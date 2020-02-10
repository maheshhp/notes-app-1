import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextArea } from '.'

export default {
    title: 'TextArea',
    component: TextArea
}

export const Default = () => (
    <TextArea
        onTextChanged={action('onTextChanged')}
        limit={5}
    />
)