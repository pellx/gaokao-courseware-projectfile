import React from 'react';
import {AutoScene} from '../components/auto';

export const Redoxeq: React.FC = () => <AutoScene k="redoxeq" d={{"tag": "考点五", "title": "陌生氧化还原方程式", "blocks": [{"t": "chain", "steps": [{"at": "rq1", "text": "{定产物}"}, {"at": "rq2", "text": "电子守恒"}, {"at": "rq2", "text": "电荷守恒\n补 H^+ / OH^-"}, {"at": "rq3", "text": "原子守恒\n补 H2O"}], "arrows": [], "center": true, "size": 32}, {"t": "big", "at": "rq3", "text": "ClO^- + 2Fe^2+ + 5H2O = Cl^- + 2Fe(OH)3↓ + 4H^+", "size": 34}], "callout": {"label": "易错", "at": "rq4", "text": "酸性无 OH^-，碱性无 H^+；写{实际存在形式}"}, "beat": {"k": "fly", "at": "rq3b", "text": "四步按顺序\n{一步都不能跳|red}"}}} />;
