// @ts-ignore
import { useEffect } from 'react'
import manager from "../core/manager";

export const useScriptManagerGenerator = (shopId: string) => {
    useEffect(() => {

        manager.GenerateHeadScript(shopId);

        return () => {
            manager.RemoveScript();
            // TODO remove debugging
            console.log('removing script');
        }

    }, [shopId]);
}

