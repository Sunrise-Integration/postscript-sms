"use strict";

class Manager {
    version: string = '1.0.0';
    scriptSource: string = 'https://sdk.postscript.io/integrations/sdk-min.js';

    headSmsScript: HTMLScriptElement | null = null;
    bodySmsScript: HTMLScriptElement | null = null;

    GetVersion(): string {
        return this.version;
    }

    GenerateScript(apiKey: string) {
        // TODO assign api key
        let smsScript = document.createElement("script");
        smsScript.src = this.scriptSource;
        smsScript.async = true;

        return smsScript;
    }

    GenerateHeadScript(apiKey: string) {
        this.headSmsScript = this.GenerateScript(apiKey);
        document.head.appendChild(this.headSmsScript);
    }

    GenerateBodyScript(apiKey: string) {
        this.bodySmsScript = this.GenerateScript(apiKey);
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
