import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as Stories from "./Test.stories";
import { expect, test } from "vitest";

const { Default } = composeStories(Stories);

describe("Test", () => {
  test("should render", () => {
    const { getByRole } = render(<Default />);
    const element = getByRole("heading", { level: 1 });
    expect(element.textContent).toContain("Hello!!");
    // expect(element).toHaveTextContent("Hello!!");
  });
});
