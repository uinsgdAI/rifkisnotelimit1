import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import type { SandboxType } from '../types/syllabus';

interface TopicSandboxProps {
  type: SandboxType;
}

const MoneyConverterSandbox: React.FC = () => {
  const [amount, setAmount] = useState(500);
  const [rate, setRate] = useState(0.92);
  const [commissionPct, setCommissionPct] = useState(2);
  const [direction, setDirection] = useState<'home-to-foreign' | 'foreign-to-home'>('home-to-foreign');
  const [commissionStage, setCommissionStage] = useState<'before' | 'none'>('before');

  const effectivePct = commissionStage === 'before' ? commissionPct : 0;
  const netAmount = amount * (1 - effectivePct / 100);
  const converted = direction === 'home-to-foreign' ? netAmount * rate : netAmount / rate;

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="space-y-4">
        <div role="group" aria-label="Conversion Direction" className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-lg">
          <button
            type="button"
            onClick={() => setDirection('home-to-foreign')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer ${
              direction === 'home-to-foreign' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            $1 → Rate (Multiply)
          </button>
          <button
            type="button"
            onClick={() => setDirection('foreign-to-home')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer ${
              direction === 'foreign-to-home' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Rate → $1 (Divide)
          </button>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="money-amount" className="font-medium text-slate-700">
              Starting Amount ({direction === 'home-to-foreign' ? 'USD' : 'EUR'})
            </label>
            <span className="font-mono tabular-nums text-slate-900 font-semibold">
              {direction === 'home-to-foreign' ? `$${amount}` : `€${amount}`}
            </span>
          </div>
          <input
            id="money-amount"
            type="range"
            min={50}
            max={2000}
            step={25}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-blue-700"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="money-rate" className="font-medium text-slate-700">
              Exchange Rate ($1 USD = r EUR)
            </label>
            <span className="font-mono tabular-nums text-slate-900 font-semibold">{rate.toFixed(2)}</span>
          </div>
          <input
            id="money-rate"
            type="range"
            min={0.5}
            max={2.5}
            step={0.02}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-blue-700"
          />
        </div>

        <div className="flex items-center justify-between gap-4 pt-1">
          <div className="flex-1">
            <div className="flex justify-between text-xs mb-1">
              <label htmlFor="money-comm" className="font-medium text-slate-700">
                Bank Commission (%)
              </label>
              <span className="font-mono tabular-nums text-slate-900 font-semibold">
                {effectivePct}%
              </span>
            </div>
            <input
              id="money-comm"
              type="range"
              min={0}
              max={6}
              step={0.5}
              value={commissionPct}
              disabled={commissionStage === 'none'}
              onChange={(e) => setCommissionPct(Number(e.target.value))}
              className="w-full accent-blue-700"
            />
          </div>
          <button
            type="button"
            onClick={() => setCommissionStage((s) => (s === 'before' ? 'none' : 'before'))}
            className="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 cursor-pointer shrink-0"
          >
            {commissionStage === 'before' ? 'Disable Fee' : 'Enable Fee'}
          </button>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
        <div className="text-xs font-medium text-slate-500">Live Step-by-Step Working</div>
        <div className="space-y-2 text-xs font-mono text-slate-800">
          <div>
            1. Net after {effectivePct}% commission:{' '}
            <span className="font-semibold text-slate-900">
              {amount} × {(1 - effectivePct / 100).toFixed(3)} = {netAmount.toFixed(2)}
            </span>
          </div>
          <div>
            2. {direction === 'home-to-foreign' ? 'Multiply by rate' : 'Divide by rate'}:{' '}
            <span className="font-semibold text-slate-900">
              {netAmount.toFixed(2)} {direction === 'home-to-foreign' ? '×' : '÷'} {rate.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between">
          <span className="text-xs font-medium text-slate-600">Converted Total (2 d.p.)</span>
          <span className="font-mono text-xl font-bold tabular-nums text-blue-700">
            {direction === 'home-to-foreign' ? `€${converted.toFixed(2)}` : `$${converted.toFixed(2)}`}
          </span>
        </div>
      </div>
    </div>
  );
};

const LinearGraphSandbox: React.FC = () => {
  const [m, setM] = useState(1.5);
  const [c, setC] = useState(1);
  const [showPerp, setShowPerp] = useState(true);

  const perpM = m !== 0 ? -1 / m : null;
  const toSvgX = (x: number) => 140 + x * 24;
  const toSvgY = (y: number) => 120 - y * 20;

  const x1 = -5;
  const x2 = 5;
  const y1 = m * x1 + c;
  const y2 = m * x2 + c;

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="line-m" className="font-medium text-slate-700">Gradient (m)</label>
            <span className="font-mono tabular-nums font-semibold text-slate-900">{m.toFixed(1)}</span>
          </div>
          <input
            id="line-m"
            type="range"
            min={-3}
            max={3}
            step={0.5}
            value={m}
            onChange={(e) => setM(Number(e.target.value))}
            className="w-full accent-blue-700"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="line-c" className="font-medium text-slate-700">y-Intercept (c)</label>
            <span className="font-mono tabular-nums font-semibold text-slate-900">{c.toFixed(1)}</span>
          </div>
          <input
            id="line-c"
            type="range"
            min={-4}
            max={4}
            step={0.5}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-blue-700"
          />
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="text-xs text-slate-700 font-mono">
            Line: y = {m.toFixed(1)}x {c >= 0 ? `+ ${c.toFixed(1)}` : `- ${Math.abs(c).toFixed(1)}`}
          </div>
          <button
            type="button"
            onClick={() => setShowPerp((p) => !p)}
            className="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer"
          >
            {showPerp ? 'Hide Perpendicular' : 'Show Perpendicular'}
          </button>
        </div>
        {showPerp && (
          <div className="text-xs text-emerald-700 font-mono">
            Perpendicular gradient: {perpM !== null ? perpM.toFixed(2) : 'Vertical (undefined)'}
          </div>
        )}
      </div>

      <svg
        viewBox="0 0 280 240"
        className="w-full max-w-[300px] mx-auto bg-slate-50 border border-slate-200 rounded-lg"
        role="img"
        aria-label="Interactive straight line coordinate grid"
      >
        {[-4, -2, 0, 2, 4].map((v) => (
          <React.Fragment key={v}>
            <line x1={toSvgX(v)} y1={10} x2={toSvgX(v)} y2={230} stroke="#e2e8f0" strokeWidth="1" />
            <line x1={10} y1={toSvgY(v)} x2={270} y2={toSvgY(v)} stroke="#e2e8f0" strokeWidth="1" />
          </React.Fragment>
        ))}
        <line x1={10} y1={120} x2={270} y2={120} stroke="#64748b" strokeWidth="1.5" />
        <line x1={140} y1={10} x2={140} y2={230} stroke="#64748b" strokeWidth="1.5" />
        <line
          x1={toSvgX(x1)}
          y1={toSvgY(y1)}
          x2={toSvgX(x2)}
          y2={toSvgY(y2)}
          stroke="#1d4ed8"
          strokeWidth="2.5"
        />
        {showPerp && perpM !== null && (
          <line
            x1={toSvgX(x1)}
            y1={toSvgY(perpM * x1 + c)}
            x2={toSvgX(x2)}
            y2={toSvgY(perpM * x2 + c)}
            stroke="#059669"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        )}
        <circle cx={toSvgX(0)} cy={toSvgY(c)} r="4" fill="#1d4ed8" />
      </svg>
    </div>
  );
};

const TrigTriangleSandbox: React.FC = () => {
  const [opp, setOpp] = useState(6);
  const [adj, setAdj] = useState(8);
  const hyp = Math.sqrt(opp * opp + adj * adj);
  const angleDeg = (Math.atan2(opp, adj) * 180) / Math.PI;

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="trig-opp" className="font-medium text-slate-700">Opposite Side (cm)</label>
            <span className="font-mono tabular-nums font-semibold text-slate-900">{opp} cm</span>
          </div>
          <input
            id="trig-opp"
            type="range"
            min={2}
            max={15}
            step={1}
            value={opp}
            onChange={(e) => setOpp(Number(e.target.value))}
            className="w-full accent-blue-700"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="trig-adj" className="font-medium text-slate-700">Adjacent Side (cm)</label>
            <span className="font-mono tabular-nums font-semibold text-slate-900">{adj} cm</span>
          </div>
          <input
            id="trig-adj"
            type="range"
            min={2}
            max={15}
            step={1}
            value={adj}
            onChange={(e) => setAdj(Number(e.target.value))}
            className="w-full accent-blue-700"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div>Hypotenuse: <strong className="text-slate-900">{hyp.toFixed(2)} cm</strong></div>
          <div>Angle θ: <strong className="text-blue-700">{angleDeg.toFixed(1)}°</strong></div>
          <div>sin θ: <strong>{(opp / hyp).toFixed(3)}</strong></div>
          <div>cos θ: <strong>{(adj / hyp).toFixed(3)}</strong></div>
        </div>
      </div>

      <svg
        viewBox="0 0 260 190"
        className="w-full max-w-[280px] mx-auto bg-slate-50 border border-slate-200 rounded-lg"
        role="img"
        aria-label="Right angled triangle trigonometry explorer"
      >
        <polygon
          points={`40,155 ${40 + adj * 11},155 ${40 + adj * 11},${155 - opp * 8}`}
          fill="#dbeafe"
          stroke="#1d4ed8"
          strokeWidth="2"
        />
        <rect
          x={40 + adj * 11 - 12}
          y={143}
          width="12"
          height="12"
          fill="none"
          stroke="#1d4ed8"
          strokeWidth="1.5"
        />
        <text x={40 + (adj * 11) / 2} y={173} fontSize="11" textAnchor="middle" fill="#0f172a">
          Adj = {adj}
        </text>
        <text
          x={40 + adj * 11 + 8}
          y={155 - (opp * 8) / 2}
          fontSize="11"
          fill="#0f172a"
        >
          Opp = {opp}
        </text>
        <text x={58} y={147} fontSize="10" fill="#1d4ed8" fontWeight="600">
          θ={angleDeg.toFixed(0)}°
        </text>
      </svg>
    </div>
  );
};

const CircleTheoremSandbox: React.FC = () => {
  const [circumAngle, setCircumAngle] = useState(42);
  const centreAngle = circumAngle * 2;
  const cyclicOpp = 180 - circumAngle;

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="circle-theta" className="font-medium text-slate-700">
              Circumference Angle θ (degrees)
            </label>
            <span className="font-mono tabular-nums font-semibold text-blue-700">{circumAngle}°</span>
          </div>
          <input
            id="circle-theta"
            type="range"
            min={20}
            max={75}
            step={1}
            value={circumAngle}
            onChange={(e) => setCircumAngle(Number(e.target.value))}
            className="w-full accent-blue-700"
          />
        </div>
        <div className="space-y-2 text-xs bg-slate-50 p-3.5 rounded-lg border border-slate-200 font-mono">
          <div className="flex justify-between">
            <span className="text-slate-600">Angle at centre (2θ):</span>
            <strong className="text-emerald-700">{centreAngle}°</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Cyclic opposite (180° − θ):</span>
            <strong className="text-amber-700">{cyclicOpp}°</strong>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 220 200"
        className="w-full max-w-[230px] mx-auto bg-slate-50 border border-slate-200 rounded-lg"
        role="img"
        aria-label="Circle theorem angle at centre demonstration"
      >
        <circle cx="110" cy="100" r="76" fill="white" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Chord endpoints A, B */}
        <line x1="56" y1="154" x2="110" y2="24" stroke="#1d4ed8" strokeWidth="2" />
        <line x1="164" y1="154" x2="110" y2="24" stroke="#1d4ed8" strokeWidth="2" />
        {/* Centre lines */}
        <line x1="56" y1="154" x2="110" y2="100" stroke="#059669" strokeWidth="2" />
        <line x1="164" y1="154" x2="110" y2="100" stroke="#059669" strokeWidth="2" />
        <circle cx="110" cy="100" r="3" fill="#0f172a" />
        <text x="110" y="54" fontSize="11" textAnchor="middle" fill="#1d4ed8" fontWeight="700">
          {circumAngle}°
        </text>
        <text x="110" y="128" fontSize="11" textAnchor="middle" fill="#059669" fontWeight="700">
          {centreAngle}°
        </text>
      </svg>
    </div>
  );
};

const CompoundInterestSandbox: React.FC = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(6);
  const [mode, setMode] = useState<'growth' | 'decay'>('growth');

  const mult = mode === 'growth' ? 1 + rate / 100 : 1 - rate / 100;
  const finalAmount = principal * Math.pow(mult, years);

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="space-y-4">
        <div role="group" aria-label="Growth or Decay" className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-lg">
          <button
            type="button"
            onClick={() => setMode('growth')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer ${
              mode === 'growth' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Compound Growth (+)
          </button>
          <button
            type="button"
            onClick={() => setMode('decay')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer ${
              mode === 'decay' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Depreciation (−)
          </button>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="ci-p" className="font-medium text-slate-700">Principal ($)</label>
            <span className="font-mono tabular-nums font-semibold">${principal}</span>
          </div>
          <input id="ci-p" type="range" min={200} max={5000} step={100} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="ci-r" className="font-medium text-slate-700">Annual Rate (%)</label>
            <span className="font-mono tabular-nums font-semibold">{rate}%</span>
          </div>
          <input id="ci-r" type="range" min={1} max={20} step={1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="ci-n" className="font-medium text-slate-700">Years (n)</label>
            <span className="font-mono tabular-nums font-semibold">{years} yrs</span>
          </div>
          <input id="ci-n" type="range" min={1} max={15} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
      </div>

      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
        <div className="text-xs font-mono text-slate-700">
          Formula: {principal} × ({mult.toFixed(2)})<sup>{years}</sup>
        </div>
        <div className="flex items-baseline justify-between pt-2 border-t border-slate-200">
          <span className="text-xs text-slate-600">Final Value</span>
          <span className="font-mono text-xl font-bold tabular-nums text-blue-700">
            ${finalAmount.toFixed(2)}
          </span>
        </div>
        <div className="text-xs text-slate-500 font-mono">
          Total change: {finalAmount >= principal ? '+' : ''}${(finalAmount - principal).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

const ProbabilityTreeSandbox: React.FC = () => {
  const [red, setRed] = useState(5);
  const [blue, setBlue] = useState(3);
  const [withReplacement, setWithReplacement] = useState(false);

  const total = red + blue;
  const secondTotal = withReplacement ? total : total - 1;
  const pRR = (red / total) * ((withReplacement ? red : Math.max(0, red - 1)) / secondTotal);
  const pDiff = ((red / total) * (blue / secondTotal)) + ((blue / total) * (red / secondTotal));

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="prob-red" className="font-medium text-slate-700">Red Counters</label>
            <span className="font-mono tabular-nums font-semibold">{red}</span>
          </div>
          <input id="prob-red" type="range" min={1} max={9} step={1} value={red} onChange={(e) => setRed(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="prob-blue" className="font-medium text-slate-700">Blue Counters</label>
            <span className="font-mono tabular-nums font-semibold">{blue}</span>
          </div>
          <input id="prob-blue" type="range" min={1} max={9} step={1} value={blue} onChange={(e) => setBlue(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
        <button
          type="button"
          onClick={() => setWithReplacement((w) => !w)}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Mode: {withReplacement ? 'With Replacement' : 'Without Replacement'}
        </button>
      </div>

      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2.5 text-xs font-mono">
        <div className="text-slate-600">Total counters = {total}</div>
        <div className="flex justify-between">
          <span>P(Both Red):</span>
          <strong className="text-slate-900">{pRR.toFixed(4)}</strong>
        </div>
        <div className="flex justify-between">
          <span>P(Different colours):</span>
          <strong className="text-blue-700">{pDiff.toFixed(4)}</strong>
        </div>
      </div>
    </div>
  );
};

const QuadraticSandbox: React.FC = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-4);
  const [c, setC] = useState(3);

  const disc = b * b - 4 * a * c;
  const vx = -b / (2 * a);
  const vy = a * vx * vx + b * vx + c;

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="quad-a" className="font-medium text-slate-700">a (x² coefficient)</label>
            <span className="font-mono font-semibold">{a}</span>
          </div>
          <input id="quad-a" type="range" min={1} max={3} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="quad-b" className="font-medium text-slate-700">b (x coefficient)</label>
            <span className="font-mono font-semibold">{b}</span>
          </div>
          <input id="quad-b" type="range" min={-8} max={8} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="quad-c" className="font-medium text-slate-700">c (constant)</label>
            <span className="font-mono font-semibold">{c}</span>
          </div>
          <input id="quad-c" type="range" min={-6} max={6} step={1} value={c} onChange={(e) => setC(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
      </div>
      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
        <div className="font-semibold text-slate-900">
          y = {a}x² {b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`} {c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`}
        </div>
        <div>Discriminant (b² − 4ac) = <strong>{disc}</strong></div>
        <div>Vertex = <strong>({vx.toFixed(2)}, {vy.toFixed(2)})</strong></div>
        <div className="text-blue-700 font-semibold">
          {disc > 0
            ? `Roots: x₁ = ${((-b - Math.sqrt(disc)) / (2 * a)).toFixed(2)}, x₂ = ${((-b + Math.sqrt(disc)) / (2 * a)).toFixed(2)}`
            : disc === 0
              ? `Repeated root: x = ${vx.toFixed(2)}`
              : 'No real roots (discriminant < 0)'}
        </div>
      </div>
    </div>
  );
};

const MensurationSandbox: React.FC = () => {
  const [radius, setRadius] = useState(5);
  const [height, setHeight] = useState(12);
  const slant = Math.sqrt(radius * radius + height * height);
  const cylVol = Math.PI * radius * radius * height;
  const coneVol = cylVol / 3;
  const sphereVol = (4 / 3) * Math.PI * Math.pow(radius, 3);

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="mens-r" className="font-medium text-slate-700">Radius r (cm)</label>
            <span className="font-mono font-semibold">{radius} cm</span>
          </div>
          <input id="mens-r" type="range" min={2} max={15} step={1} value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="mens-h" className="font-medium text-slate-700">Vertical Height h (cm)</label>
            <span className="font-mono font-semibold">{height} cm</span>
          </div>
          <input id="mens-h" type="range" min={3} max={20} step={1} value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
      </div>
      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
        <div className="flex justify-between">
          <span>Cone slant height l:</span>
          <strong>{slant.toFixed(2)} cm</strong>
        </div>
        <div className="flex justify-between">
          <span>Cylinder Volume:</span>
          <strong>{cylVol.toFixed(1)} cm³ ({radius * radius * height}π)</strong>
        </div>
        <div className="flex justify-between">
          <span>Cone Volume:</span>
          <strong>{coneVol.toFixed(1)} cm³</strong>
        </div>
        <div className="flex justify-between">
          <span>Sphere Volume:</span>
          <strong>{sphereVol.toFixed(1)} cm³</strong>
        </div>
      </div>
    </div>
  );
};

const StandardFormSandbox: React.FC = () => {
  const [coeff, setCoeff] = useState(24);
  const [exp, setExp] = useState(4);

  const value = coeff * Math.pow(10, exp);
  const normExp = value === 0 ? 0 : Math.floor(Math.log10(Math.abs(value)));
  const normA = value / Math.pow(10, normExp);

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="sf-c" className="font-medium text-slate-700">Raw Coefficient</label>
            <span className="font-mono font-semibold">{coeff}</span>
          </div>
          <input id="sf-c" type="range" min={0.2} max={50} step={0.2} value={coeff} onChange={(e) => setCoeff(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <label htmlFor="sf-e" className="font-medium text-slate-700">Raw Exponent (n)</label>
            <span className="font-mono font-semibold">{exp}</span>
          </div>
          <input id="sf-e" type="range" min={-4} max={8} step={1} value={exp} onChange={(e) => setExp(Number(e.target.value))} className="w-full accent-blue-700" />
        </div>
      </div>
      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
        <div>Input: {coeff.toFixed(1)} × 10<sup>{exp}</sup></div>
        <div className="text-blue-700 font-bold text-base">
          Normalised: {normA.toFixed(2)} × 10<sup>{normExp}</sup>
        </div>
        <div className="text-slate-500">Ordinary value: {value.toPrecision(4)}</div>
      </div>
    </div>
  );
};

export const TopicSandbox: React.FC<TopicSandboxProps> = ({ type }) => {
  if (type === 'none') return null;

  const titles: Record<Exclude<SandboxType, 'none'>, string> = {
    'money-converter': 'Interactive Currency & Commission Calculator',
    'percentage-interest': 'Interactive Compound Growth & Depreciation Explorer',
    'linear-graph': 'Interactive Straight-Line & Perpendicular Explorer',
    'quadratic-solver': 'Interactive Quadratic Discriminant & Vertex Explorer',
    'trigonometry-triangle': 'Interactive Right-Angled Triangle Solver',
    'circle-theorems': 'Interactive Circle Theorem Angle Explorer',
    'probability-tree': 'Interactive Two-Stage Probability Simulator',
    'mensuration-3d': 'Interactive 3D Solid Volume & Slant Height Calculator',
    'standard-form': 'Interactive Standard Form Normaliser',
  };

  return (
    <section className="p-5 bg-white border border-slate-200 rounded-xl space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-sm font-bold text-slate-900">{titles[type]}</h3>
        <span className="text-xs text-slate-500">Interactive Model</span>
      </div>
      {type === 'money-converter' && <MoneyConverterSandbox />}
      {type === 'percentage-interest' && <CompoundInterestSandbox />}
      {type === 'linear-graph' && <LinearGraphSandbox />}
      {type === 'quadratic-solver' && <QuadraticSandbox />}
      {type === 'trigonometry-triangle' && <TrigTriangleSandbox />}
      {type === 'circle-theorems' && <CircleTheoremSandbox />}
      {type === 'probability-tree' && <ProbabilityTreeSandbox />}
      {type === 'mensuration-3d' && <MensurationSandbox />}
      {type === 'standard-form' && <StandardFormSandbox />}
    </section>
  );
};
