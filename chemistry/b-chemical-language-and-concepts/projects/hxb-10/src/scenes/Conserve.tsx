import React from 'react';
import {AutoScene} from '../components/auto';

export const Conserve: React.FC = () => <AutoScene k="conserve" d={{"tag": "考点四", "title": "三查：原子、电荷、电子守恒", "blocks": [{"t": "mark", "ok": false, "at": "co2", "text": "Fe^3+ + Cu = Fe^2+ + Cu^2+（电荷：+3 ≠ +4）", "size": 32}, {"t": "mark", "ok": true, "at": "co3", "text": "{2}Fe^3+ + Cu = {2}Fe^2+ + Cu^2+", "size": 32}, {"t": "mark", "ok": false, "at": "co4", "text": "Na + H2O = Na^+ + OH^- + H2↑（H 不守恒）", "size": 32}, {"t": "mark", "ok": true, "at": "co4", "text": "{2}Na + {2}H2O = {2}Na^+ + {2}OH^- + H2↑", "size": 32}], "callout": {"label": "易错", "at": "co5", "text": "原子守恒不等于电荷守恒：{一定要数电荷}"}}} />;
