import { IonApp } from "@ionic/react";
import ArticleMockData from "@pages/home/__tests__/mock-data/articleHeaders.json";
import { CriticalNews } from "@pages/home/components/CriticalNews";
import { render } from "@testing-library/react";
import { vi } from "vitest";

test("displays the critical news section", async () => {});

test("displays dropdown of menu items", async () => {});

function setup() {
  const mockRenderFn = vi.fn();
  const utils = render(
    <IonApp>
      <CriticalNews articles={ArticleMockData} render={mockRenderFn} />
    </IonApp>,
  );

  return { ...utils, mockRenderFn };
}
