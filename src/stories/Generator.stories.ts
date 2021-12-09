// @ts-ignore
import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import {usePostscriptSms} from "../hooks/use-postscript-sms";


interface Props {
    shopId: string
}

export const StoryComponent: Story<Props> = ({ shopId }) => {

    usePostscriptSms(shopId)
    return React.createElement('div', {className: 'postscript-sms'});
}

StoryComponent.storyName = 'Postscript SMS'
StoryComponent.args = {
    shopId:  '12345',
}

export default {
    title: `Postscript SMS/Generator/${StoryComponent.storyName}`,
}
