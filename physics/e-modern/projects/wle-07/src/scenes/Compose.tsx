import React from 'react';
import {AutoScene} from '../components/auto';

export const Compose: React.FC = () => <AutoScene k="compose" d={{"tag": "考点四", "title": "原子核的组成", "blocks": [{"t": "nuc", "at": "d2", "items": [{"A": "A", "Z": "Z", "X": "X", "note": "A：质量数（核子数）　Z：电荷数（质子数）"}], "size": 80}, {"t": "text", "at": "d3", "text": "中子数 = {A − Z}", "size": 36}, {"t": "rule", "tag": "同位素", "at": "d4", "text": "质子数{相同}、中子数{不同}", "c": "orange"}], "callout": {"label": "易错", "at": "d5", "text": "质量数是核子{个数}，不是质量"}}} />;
