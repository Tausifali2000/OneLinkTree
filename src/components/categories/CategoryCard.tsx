"use client";
import React, { useState } from "react";
import { ICategoryCardProps } from "./interface/category.interface";

export const CategoryCard: React.FC<ICategoryCardProps> = ({
  category,
  borderRadius = "12px",
  overlay = true,
  shadow = true,
  className = "",
  href,
  onClick,
  height,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // tweak these to control hover intensity & speed
  const HOVER_EXTRA_OPACITY = 0.1; // small subtle darkening
  const HOVER_TRANSITION_MS = 160;

  // base overlay (unchanged)
  const baseOverlay = (() => {
    if (!overlay) return "transparent";
    if (typeof overlay === "string") return overlay;
    return "rgba(0,0,0,0.35)";
  })();

  const boxShadow = (() => {
    if (!shadow) return undefined;
    if (typeof shadow === "string") return shadow;
    return "0 8px 24px rgba(0,0,0,0.12)";
  })();

  const Container: any = href ? "a" : "div";

  const baseStyle: React.CSSProperties = {
    backgroundImage: `url(${category.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius,
    boxShadow,
    overflow: "hidden",
    display: "block",
    position: "relative",
    textDecoration: "none",
    height: height ?? 160,
  };

  const baseOverlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: baseOverlay,
    pointerEvents: "none",
    borderRadius,
  };

  // the subtle hover layer that fades in/out (does not change text color)
  const hoverOverlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: `rgba(0,0,0,${HOVER_EXTRA_OPACITY})`,
    pointerEvents: "none",
    borderRadius,
    opacity: isHovered ? 1 : 0,
    transition: `opacity ${HOVER_TRANSITION_MS}ms ease`,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 3,
    padding: "1rem",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
  };

  const titleStyle: React.CSSProperties = {
    color: "#fff", // unchanged on hover
    margin: 0,
    fontSize: "1.05rem",
    lineHeight: 1.1,
    textShadow: "0 2px 6px rgba(0,0,0,0.5)",
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Container
      href={href}
      onClick={onClick}
      role={href ? undefined : "button"}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={className}
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* base overlay (your overlay prop) */}
      <div style={baseOverlayStyle} aria-hidden />

      {/* subtle extra hover layer */}
      <div style={hoverOverlayStyle} aria-hidden />

      <div style={contentStyle}>
        <h3 style={titleStyle}>{category.name}</h3>
      </div>
    </Container>
  );
};

export default CategoryCard;
