import "@testing-library/jest-dom";
import { createElement, type ImgHTMLAttributes } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: function MockImage(
    props: ImgHTMLAttributes<HTMLImageElement> & {
      src?: string | { src: string; width?: number; height?: number };
      alt?: string;
      priority?: boolean;
    }
  ) {
    const { src, alt = "", priority, ...rest } = props;
    const url =
      typeof src === "string"
        ? src
        : src && typeof src === "object" && "src" in src
          ? src.src
          : "/mock-image";
    return createElement("img", {
      ...rest,
      alt,
      src: url,
      ...(priority ? { "data-priority": "true" } : {}),
    });
  },
}));
