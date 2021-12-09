/**
 * @jest-environment jsdom
 */
import manager from "../../core/manager";

describe('my test suite', () => {

    afterEach(() => {
        document.getElementsByTagName('html')[0].innerHTML = '';
    });

    test('Can Generate Script Tag', () => {

        let scriptTag = manager.GenerateScript('123');

        expect(scriptTag.src).toBe(manager.scriptSource + '?shopId=123' );
    });

    test('Can Remove Head Script Tag', () => {

        manager.GenerateHeadScript('123');

        let scripts = document.getElementsByTagName("script");
        manager.RemoveScript();

        expect(scripts.length).toBe(0);
    });

    test('Can Remove Body Script Tag', () => {

        manager.GenerateBodyScript('123');

        let scripts = document.getElementsByTagName("script");

        manager.RemoveScript();

        expect(scripts.length).toBe(0);
    });

    test('Can Generate Head Script Tag', () => {

        manager.GenerateHeadScript('123');

        let scripts = document.getElementsByTagName("script");

        expect(scripts.length).toBe(1);
        expect(document.head.childNodes.length).toBe(1);
    });

    test('Can Generate Body Script Tag', () => {

        manager.GenerateBodyScript('123');

        let scripts = document.getElementsByTagName("script");

        expect(scripts.length).toBe(1);
        expect(document.body.childNodes.length).toBe(1);
    });
});

