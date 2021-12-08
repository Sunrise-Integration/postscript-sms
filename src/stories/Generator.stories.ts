// @ts-ignore
import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import {useScriptManagerGenerator} from "../hooks/use-script-manager-actions";


interface Props {
    apiKey: string
}

export const StoryComponent: Story<Props> = ({ apiKey }) => {

    useScriptManagerGenerator(apiKey)
    return React.createElement('div', {className: 'postscript-sms'});
}

StoryComponent.storyName = 'Script Generator'
StoryComponent.args = {
    apiKey:  'api-key-here',
}

export default {
    title: `Postscript SMS/Generator/${StoryComponent.storyName}`,
}
