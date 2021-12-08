"use strict";

class Manager {
    version: string = '1.0.0';
    scriptSource: string = 'https://sdk.postscript.io/sdk.bundle.js';

    headSmsScript: HTMLScriptElement | null = null;
    bodySmsScript: HTMLScriptElement | null = null;

    GetVersion(): string {
        return this.version;
    }

    GenerateScript(shopId: string) {
        let smsScript = document.createElement("script");
        smsScript.src = `${this.scriptSource}?shopId=${shopId}`;
        smsScript.async = true;

        return smsScript;
    }

    GenerateHeadScript(shopId: string) {
        this.headSmsScript = this.GenerateScript(shopId);
        document.head.appendChild(this.headSmsScript);
    }

    GenerateBodyScript(shopId: string) {
        this.bodySmsScript = this.GenerateScript(shopId);
        document.body.appendChild(this.bodySmsScript);
    }

    RemoveScript() {
        if (this.headSmsScript !== null) {
            document.head.removeChild(this.headSmsScript);
        }

        if (this.bodySmsScript !== null) {
            document.body.removeChild(this.bodySmsScript);
        }
    }
}

export default new Manager();
