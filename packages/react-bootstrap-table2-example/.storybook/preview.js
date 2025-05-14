import React from 'react';
import { withConsole } from '@storybook/addon-console';

// Global styles (opcjonalnie, zależnie od Twojego projektu)

const styles = {
    margin: '15px',
};

const componentDecorator = (Story) => (
    <div style={styles}>
        <Story />
    </div>
);

/**
 * Przekierowanie console.log do panelu "Actions"
 */
export const decorators = [
    (Story, context) => withConsole()(Story)(context),
    componentDecorator
];