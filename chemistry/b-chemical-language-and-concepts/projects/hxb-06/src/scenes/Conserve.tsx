import React from 'react';
import {AutoScene} from '../components/auto';

export const Conserve: React.FC = () => <AutoScene k="conserve" d={{"tag": "考点六", "title": "得失电子守恒的计算", "blocks": [{"t": "big", "at": "cs1", "text": "得电子总数 = 失电子总数", "size": 44}, {"t": "big", "at": "cs2", "text": "n × {变价原子个数} × {化合价变化值}（两边相等）", "size": 36, "c": "orange", "soft": "orangeSoft"}, {"t": "panel", "title": "例：0.1 mol K2Cr2O7 能氧化多少 Fe^2+？", "at": "cs3", "lines": ["Cr：+6 → +3，每个得 3e^-，{2 个 Cr}", {"at": "cs4", "text": "0.1 × 2 × 3 = n(Fe^2+) × 1 × 1　→　n(Fe^2+) = {0.6 mol}"}], "c": "red", "size": 32}], "callout": {"label": "解题方法", "at": "cs5", "text": "只看{始态和终态}；别漏变价原子个数（Cr2O7^2- 有 2 个 Cr）"}}} />;
