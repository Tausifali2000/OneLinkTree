import * as React from "react";

type GapValue =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | string; // allow arbitrary css gap like "1.125rem" or "16px"

type JustifyOptions =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

type AlignOptions = "start" | "center" | "end" | "stretch" | "baseline";

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** spacing between children. Accepts Tailwind-like scale numbers or any valid CSS gap string */
  gap?: GapValue;
  /** flex-direction: column (vertical) or row (horizontal) */
  direction?: "column" | "row";
  /** justify-content helper */
  justify?: JustifyOptions;
  /** align-items helper */
  align?: AlignOptions;
  /** whether children should wrap (only affects row direction) */
  wrap?: boolean;
  /** allows passing raw className which will be merged */
  className?: string;
}

const gapMap: Record<number, string> = {
  0: "gap-0",
  0.5: "gap-0.5",
  1: "gap-1",
  1.5: "gap-1.5",
  2: "gap-2",
  2.5: "gap-2.5",
  3: "gap-3",
  3.5: "gap-3.5",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
};

const justifyMap: Record<JustifyOptions, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignMap: Record<AlignOptions, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      gap = 2,
      direction = "column",
      justify = undefined,
      align = undefined,
      wrap = false,
      className,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    // Compute gap class or fallback to style-based gap
    let gapClass = "";
    let styleGap = undefined as React.CSSProperties | undefined;

    if (typeof gap === "string") {
      // user provided a raw css gap string like "12px" or "1rem"
      styleGap = { gap };
    } else {
      // numeric — try to map to tailwind gap class
      gapClass = gapMap[gap as number] ?? "";
    }

    const dirClass = direction === "row" ? "flex-row" : "flex-col";
    const wrapClass = wrap ? "flex-wrap" : "flex-nowrap";
    const justifyClass = justify ? justifyMap[justify] : "";
    const alignClass = align ? alignMap[align] : "";

    const classes = cn(
      "flex",
      dirClass,
      wrapClass,
      gapClass,
      justifyClass,
      alignClass,
      className
    );

    const mergedStyle = Object.assign({}, style, styleGap);

    return (
      <div ref={ref} className={classes} style={mergedStyle} {...rest}>
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack";

/**
 * Usage examples:
 *
 * // vertical stack with tailwind gap scale
 * <Stack gap={3} align="start" justify="center">...
 *
 * // horizontal stack with numeric gap and wrapping
 * <Stack direction="row" gap={4} wrap>
 *   <div>Left</div>
 *   <div>Right</div>
 * </Stack>
 *
 * // custom css gap
 * <Stack gap="12px">...</Stack>
 */

export default Stack;
