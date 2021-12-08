// @ts-ignore
import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import {useScriptManagerGenerator} from "../hooks/use-script-manager-actions";


interface Props {
    shopId: string
}

export const StoryComponent: Story<Props> = ({ shopId }) => {

    useScriptManagerGenerator(shopId)
    return React.createElement('div', {className: 'postscript-sms'});
}

StoryComponent.storyName = 'Script Generator'
StoryComponent.args = {
    shopId:  'shopId',
}

export default {
    title: `Postscript SMS/Generator/${StoryComponent.storyName}`,
}
