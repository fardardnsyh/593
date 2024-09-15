import React from "react";
import Live from "./Live";
import * as reactQuery from "@tanstack/react-query";
import { render } from "../../../utils/helpers/testing";

jest.spyOn(reactQuery, "useQuery");

describe("<Live>", () => {
  function setup() {
    render(<Live />);
  }

  it("should render the Live component fetching live events", () => {
    setup();
    expect(reactQuery.useQuery).toHaveBeenCalled();
  });
});
