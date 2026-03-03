// components/common/Grid.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Direct CSS template, e.g. "60% 40%", "30% 30% 40%", "1fr 2fr", "repeat(3, 1fr)" */
  template?: string;
  /** Fallback: number of equal columns when template is not provided */
  cols?: number;
  /** gap in px or CSS value (e.g. 16, "16px", "1rem") */
  gap?: number | string;
};

/** Convert "60% 40%" => "60fr 40fr" so gaps are automatically accounted for */
function percentageTemplateToFr(template: string): string {
  // split on whitespace, ignore empty tokens
  const tokens = template.trim().split(/\s+/);
  const converted = tokens.map((t) => {
    const pctMatch = t.match(/^(\d+(?:\.\d+)?)%$/);
    if (pctMatch) {
      // preserve the numeric ratio but use fr so the browser subtracts gaps first
      return `${pctMatch[1]}fr`;
    }
    // if token already fr or px or other unit, keep as-is
    return t;
  });
  return converted.join(" ");
}

export const Grid: React.FC<GridProps> = ({
  template,
  cols = 12,
  gap = 16,
  children,
  className,
  style,
  ...rest
}) => {
  const gapCss = typeof gap === "number" ? `${gap}px` : gap;

  // Determine gridTemplateColumns
  let gridTemplateColumns: string;
  if (template) {
    // If template contains percent tokens, convert them to fr units so gaps are accounted for
    if (/%/.test(template)) {
      gridTemplateColumns = percentageTemplateToFr(template);
    } else {
      // leave other templates alone (e.g. "1fr 2fr", "repeat(3, 1fr)", "200px 1fr")
      gridTemplateColumns = template;
    }
  } else {
    gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
  }

  const gridStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    gridTemplateColumns,
    gap: gapCss,
    ...style,
  };

  return (
    <div {...rest} style={gridStyle} className={cn("w-full grid", className)}>
      {children}
    </div>
  );
};

type GridItemProps = React.HTMLAttributes<HTMLDivElement> & {
  /** optional span in tracks (keeps compatibility); rarely needed if using `template` */
  span?: number;
  /** optional explicit start column (1-based) */
  start?: number;
};

export const GridItem: React.FC<GridItemProps> = ({
  span,
  start,
  style,
  className,
  children,
  ...rest
}) => {
  const itemStyle: React.CSSProperties = {
    ...(span ? { gridColumn: start ? `${start} / span ${span}` : `span ${span}` } : {}),
    boxSizing: "border-box",
    ...style,
  };

  return (
    <div {...rest} style={itemStyle} className={cn("", className)}>
      {children}
    </div>
  );
};
