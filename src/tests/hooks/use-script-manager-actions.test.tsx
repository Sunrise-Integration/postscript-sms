// @ts-ignore
import React from 'react'
import { render } from '@testing-library/react'
import {useScriptManagerGenerator} from "../../hooks/use-script-manager-actions";

interface Props {
    appKey: string
}

const Test: React.FC<Props> = ({ appKey }) => {
    useScriptManagerGenerator(appKey);
    return null
}
describe('usePostscriptSms', () => {

    it('renders script', () => {
        const appKey = '123'

        render(<Test appKey={appKey}/>);

        let scripts = document.getElementsByTagName("script");

        expect(scripts.length).toBe(1);
        expect(document.body.childNodes.length).toBe(1);
    });
})