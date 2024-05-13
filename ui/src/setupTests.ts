// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import {setupIonicReact} from "@ionic/react";
import {cleanup} from "@testing-library/react";
import {vi} from "vitest";
import failOnConsole from "vitest-fail-on-console";

failOnConsole();
setupIonicReact();

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
// Mock matchmedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
