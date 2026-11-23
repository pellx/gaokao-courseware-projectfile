import React from 'react';
import {AutoScene} from '../components/auto';

export const Rho: React.FC = () => <AutoScene k="rho" d={{"tag": "考点七", "title": "电阻率", "blocks": [{"t": "items", "items": [{"at": "r1", "text": "ρ 由{材料、温度}决定，与形状无关"}, {"at": "r2", "text": "金属：温度升高，ρ {增大}"}, {"at": "r2", "text": "某些合金：ρ 几乎不变 → {标准电阻}"}, {"at": "r3", "text": "低温下电阻突然为 0 → {超导}"}], "size": 30}], "callout": {"label": "易错", "at": "r4", "text": "拉长导线：R 变大，{ρ 不变}"}, "beat": {"k": "a3", "at": "r3b", "text": "温度足够低\n电阻{突然为 0|red}"}}} />;
