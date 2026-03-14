/**
 * Graph Mathematics Library — v2
 * High-performance equilibrium solver, curve generation, surplus geometry,
 * coordinate transforms, and animation interpolation.
 */

// ─── Core types ──────────────────────────────────────────────────────
export interface Point {
  x: number;
  y: number;
}

export interface LinearCurve {
  intercept: number;
  slope: number;
}

export interface Equilibrium {
  price: number;
  quantity: number;
}

export interface GraphArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Domain {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export interface SurplusResult {
  consumerSurplus: number;
  producerSurplus: number;
  totalSurplus: number;
}

// ─── Curve generation ────────────────────────────────────────────────

export function generateCurvePoints(
  curve: LinearCurve,
  qMin: number,
  qMax: number,
  steps = 120
): Point[] {
  const pts: Point[] = [];
  const dq = (qMax - qMin) / steps;
  for (let i = 0; i <= steps; i++) {
    const q = qMin + i * dq;
    const p = curve.intercept + curve.slope * q;
    if (p >= 0) pts.push({ x: q, y: p });
  }
  return pts;
}

export function generateQuadraticPoints(
  a: number,
  b: number,
  c: number,
  qMin: number,
  qMax: number,
  steps = 120
): Point[] {
  const pts: Point[] = [];
  const dq = (qMax - qMin) / steps;
  for (let i = 0; i <= steps; i++) {
    const q = qMin + i * dq;
    const p = a * q * q + b * q + c;
    if (p >= 0) pts.push({ x: q, y: p });
  }
  return pts;
}

// ─── Equilibrium ─────────────────────────────────────────────────────

export function findEquilibrium(
  c1: LinearCurve,
  c2: LinearCurve
): Equilibrium | null {
  const dSlope = c1.slope - c2.slope;
  if (Math.abs(dSlope) < 1e-6) return null;
  const quantity = (c2.intercept - c1.intercept) / dSlope;
  const price = c1.intercept + c1.slope * quantity;
  if (quantity < 0 || price < 0) return null;
  return { price, quantity };
}

// ─── Curve manipulation ──────────────────────────────────────────────

export function shiftCurve(curve: LinearCurve, deltaQ: number): LinearCurve {
  return {
    intercept: curve.intercept - curve.slope * deltaQ,
    slope: curve.slope,
  };
}

export function priceAt(curve: LinearCurve, q: number): number {
  return curve.intercept + curve.slope * q;
}

export function quantityAt(curve: LinearCurve, p: number): number {
  if (Math.abs(curve.slope) < 1e-8) return 0;
  return (p - curve.intercept) / curve.slope;
}

// Aliases for backward compat
export const priceAtQuantity = priceAt;
export const quantityAtPrice = quantityAt;

// ─── Surplus ─────────────────────────────────────────────────────────

export function calculateSurplus(
  demand: LinearCurve,
  supply: LinearCurve,
  eq: Equilibrium
): SurplusResult {
  const cs = Math.max(0, 0.5 * (demand.intercept - eq.price) * eq.quantity);
  const ps = Math.max(0, 0.5 * (eq.price - supply.intercept) * eq.quantity);
  return { consumerSurplus: cs, producerSurplus: ps, totalSurplus: cs + ps };
}

export function consumerSurplusPolygon(
  demand: LinearCurve,
  eq: Equilibrium,
  ga: GraphArea,
  domain: Domain
): string {
  const topLeft = dataToSvg({ x: 0, y: Math.min(demand.intercept, domain.yMax) }, ga, domain);
  const eqPt = dataToSvg({ x: eq.quantity, y: eq.price }, ga, domain);
  const botLeft = dataToSvg({ x: 0, y: eq.price }, ga, domain);
  return `${topLeft.x},${topLeft.y} ${eqPt.x},${eqPt.y} ${botLeft.x},${botLeft.y}`;
}

export function producerSurplusPolygon(
  supply: LinearCurve,
  eq: Equilibrium,
  ga: GraphArea,
  domain: Domain
): string {
  const topLeft = dataToSvg({ x: 0, y: eq.price }, ga, domain);
  const eqPt = dataToSvg({ x: eq.quantity, y: eq.price }, ga, domain);
  const botLeft = dataToSvg({ x: 0, y: Math.max(0, supply.intercept) }, ga, domain);
  return `${topLeft.x},${topLeft.y} ${eqPt.x},${eqPt.y} ${botLeft.x},${botLeft.y}`;
}

export function deadweightLossPolygon(
  demand: LinearCurve,
  supply: LinearCurve,
  eq: Equilibrium,
  controlPrice: number,
  ga: GraphArea,
  domain: Domain
): string | null {
  const qd = quantityAt(demand, controlPrice);
  const qs = quantityAt(supply, controlPrice);
  const qTransacted = Math.min(Math.max(0, qd), Math.max(0, qs));
  if (Math.abs(qTransacted - eq.quantity) < 0.5) return null;

  const eqPt = dataToSvg({ x: eq.quantity, y: eq.price }, ga, domain);
  const dPt = dataToSvg({ x: qTransacted, y: priceAt(demand, qTransacted) }, ga, domain);
  const sPt = dataToSvg({ x: qTransacted, y: priceAt(supply, qTransacted) }, ga, domain);
  return `${eqPt.x},${eqPt.y} ${dPt.x},${dPt.y} ${sPt.x},${sPt.y}`;
}

// ─── Coordinate transforms ──────────────────────────────────────────

export function dataToSvg(pt: Point, ga: GraphArea, domain: Domain): Point {
  const sx = ga.width / (domain.xMax - domain.xMin);
  const sy = ga.height / (domain.yMax - domain.yMin);
  return {
    x: ga.x + (pt.x - domain.xMin) * sx,
    y: ga.y + ga.height - (pt.y - domain.yMin) * sy,
  };
}

export function svgToData(svgPt: Point, ga: GraphArea, domain: Domain): Point {
  const sx = ga.width / (domain.xMax - domain.xMin);
  const sy = ga.height / (domain.yMax - domain.yMin);
  return {
    x: (svgPt.x - ga.x) / sx + domain.xMin,
    y: (ga.y + ga.height - svgPt.y) / sy + domain.yMin,
  };
}

export function pointsToPath(points: Point[]): string {
  if (points.length === 0) return "";
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");
}

export function pointsToSmoothPath(points: Point[]): string {
  if (points.length < 3) return pointsToPath(points);
  let d = `M${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

export function generateTicks(min: number, max: number, count = 5): number[] {
  const step = (max - min) / count;
  return Array.from({ length: count + 1 }, (_, i) => min + i * step);
}

// ─── Animation helpers ───────────────────────────────────────────────

export function lerpCurve(from: LinearCurve, to: LinearCurve, t: number): LinearCurve {
  return {
    intercept: from.intercept + (to.intercept - from.intercept) * t,
    slope: from.slope + (to.slope - from.slope) * t,
  };
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export function calculateDeadweightLoss(
  demand: LinearCurve,
  supply: LinearCurve,
  eq: Equilibrium,
  controlPrice: number,
  isFloor: boolean
): number {
  if (isFloor && controlPrice <= eq.price) return 0;
  if (!isFloor && controlPrice >= eq.price) return 0;
  const qd = quantityAt(demand, controlPrice);
  const qs = quantityAt(supply, controlPrice);
  const qTransacted = Math.min(Math.max(0, qd), Math.max(0, qs));
  return 0.5 * Math.abs(controlPrice - eq.price) * Math.abs(eq.quantity - qTransacted);
}
