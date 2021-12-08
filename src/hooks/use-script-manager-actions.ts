// @ts-ignore
import { useEffect } from 'react'
import manager from "../core/manager";

export const useScriptManagerGenerator = (apiKey: string) => {
    useEffect(() => {

        manager.GenerateHeadScript(apiKey);

        return () => {
            manager.RemoveScript();
            // TODO remove debugging
            console.log('removing script');
        }

    }, [apiKey]);
}

