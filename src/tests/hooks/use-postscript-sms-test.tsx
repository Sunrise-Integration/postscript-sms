// @ts-ignore
import React from 'react'
import { render } from '@testing-library/react'
import {usePostscriptSms} from "../../hooks/use-postscript-sms";

interface Props {
    shopId: string
}

const TestRootComponent: React.FC<Props> = ({ shopId }) => {
    usePostscriptSms(shopId);
    return null
}

describe('usePostscriptSms', () => {

    it('renders script', () => {
        const shopId = '123'

        render(<TestRootComponent shopId={shopId}/>);

        let scripts = document.getElementsByTagName("script");

        expect(scripts.length).toBe(1);
        expect(document.body.childNodes.length).toBe(1);
    });
})