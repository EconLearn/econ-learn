import { create } from "zustand";

// Production Possibilities Curve (concave/bowed out)
// Good X on horizontal axis, Good Y on vertical axis
// PPC equation: Y = maxY * sqrt(1 - (X/maxX)^2) — quarter ellipse shape
const DEFAULT_MAX_X = 100;
const DEFAULT_MAX_Y = 80;

interface PPCState {
  maxX: number;
  maxY: number;
  pointX: number; // current allocation
  pointY: number;
  isEfficient: boolean; // on the curve
  isAttainable: boolean; // inside or on the curve
  opportunityCostX: number; // opp cost of 1 more unit of X

  setPoint: (x: number, y: number) => void;
  setPointX: (x: number) => void; // snap to curve
  shiftOutward: () => void;
  shiftInward: () => void;
  reset: () => void;
}

function yOnCurve(x: number, maxX: number, maxY: number): number {
  const ratio = Math.min(1, Math.max(0, x / maxX));
  return maxY * Math.sqrt(1 - ratio * ratio);
}

function oppCost(x: number, maxX: number, maxY: number): number {
  // Slope of PPC at x: dY/dX = -maxY * x / (maxX^2 * sqrt(1 - (x/maxX)^2))
  const ratio = x / maxX;
  const denom = Math.sqrt(1 - ratio * ratio);
  if (denom < 0.01) return Infinity;
  return Math.abs(maxY * ratio / (maxX * denom));
}

function derive(pointX: number, pointY: number, maxX: number, maxY: number) {
  const curveY = yOnCurve(pointX, maxX, maxY);
  const tolerance = 1.5;
  const isEfficient = Math.abs(pointY - curveY) < tolerance;
  const isAttainable = pointY <= curveY + tolerance;
  const opportunityCostX = oppCost(pointX, maxX, maxY);

  return { isEfficient, isAttainable, opportunityCostX };
}

const initX = 50;
const initY = yOnCurve(initX, DEFAULT_MAX_X, DEFAULT_MAX_Y);

export const usePPCStore = create<PPCState>((set) => ({
  maxX: DEFAULT_MAX_X,
  maxY: DEFAULT_MAX_Y,
  pointX: initX,
  pointY: initY,
  ...derive(initX, initY, DEFAULT_MAX_X, DEFAULT_MAX_Y),

  setPoint: (x, y) =>
    set((s) => ({
      pointX: x,
      pointY: y,
      ...derive(x, y, s.maxX, s.maxY),
    })),

  setPointX: (x) =>
    set((s) => {
      const clampedX = Math.max(0, Math.min(s.maxX, x));
      const pointY = yOnCurve(clampedX, s.maxX, s.maxY);
      return {
        pointX: clampedX,
        pointY,
        ...derive(clampedX, pointY, s.maxX, s.maxY),
      };
    }),

  shiftOutward: () =>
    set((s) => {
      const maxX = s.maxX + 15;
      const maxY = s.maxY + 12;
      const pointY = yOnCurve(s.pointX, maxX, maxY);
      return {
        maxX, maxY,
        pointY,
        ...derive(s.pointX, pointY, maxX, maxY),
      };
    }),

  shiftInward: () =>
    set((s) => {
      const maxX = Math.max(40, s.maxX - 15);
      const maxY = Math.max(30, s.maxY - 12);
      const pointY = yOnCurve(s.pointX, maxX, maxY);
      return {
        maxX, maxY,
        pointX: Math.min(s.pointX, maxX),
        pointY,
        ...derive(Math.min(s.pointX, maxX), pointY, maxX, maxY),
      };
    }),

  reset: () =>
    set({
      maxX: DEFAULT_MAX_X,
      maxY: DEFAULT_MAX_Y,
      pointX: initX,
      pointY: initY,
      ...derive(initX, initY, DEFAULT_MAX_X, DEFAULT_MAX_Y),
    }),
}));

// Export for graph component
export function yOnPPC(x: number, maxX: number, maxY: number): number {
  return yOnCurve(x, maxX, maxY);
}
