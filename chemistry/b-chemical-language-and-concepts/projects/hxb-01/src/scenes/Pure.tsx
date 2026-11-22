import React from 'react';
import {AutoScene} from '../components/auto';

export const Pure: React.FC = () => <AutoScene k="pure" d={{"tag": "考点二", "title": "纯净物与混合物", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "纯净物（一种物质）", "at": "pu1", "lines": [{"at": "pu2", "text": "{CuSO4·5H2O|red}（结晶水合物）"}, {"at": "pu2", "text": "冰水混合物（都是 H2O）"}, {"at": "pu2", "text": "液氯（液态 Cl2）"}], "c": "green"}]}, {"blocks": [{"t": "panel", "title": "混合物（多种物质）", "at": "pu3", "lines": ["漂白粉、氨水、氯水、盐酸", "玻璃、合金、空气", "{淀粉、纤维素|orange}（聚合度 n 不同）"], "c": "red"}]}]}], "callout": {"label": "易错", "at": "pu4", "text": "同种元素组成的物质不一定是纯净物：{O2 + O3} 是混合物"}, "beat": {"k": "mix", "at": "pu3b", "text": "各干各的\n= 混合物\n{各成分保持原来的性质|red}"}}} />;
