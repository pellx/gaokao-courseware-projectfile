import React from 'react';
import {AutoScene} from '../components/auto';

export const Strong: React.FC = () => <AutoScene k="strong" d={{"tag": "考点一", "title": "强电解质与弱电解质", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "强电解质：全部电离", "at": "sw1", "lines": ["强酸、强碱", "绝大多数盐（含 BaSO4）"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "弱电解质：部分电离", "at": "sw2", "lines": ["CH3COOH、H2CO3、HClO", "HF、H2S、H2SO3", "NH3·H2O、H2O"], "c": "orange", "size": 32}]}]}, {"t": "big", "at": "sw3", "text": "强弱看{电离程度}，与溶解性无关", "size": 40}], "callout": {"label": "易错", "at": "sw4", "text": "导电能力看{离子浓度和电荷}，不看强弱"}, "beat": {"k": "rice", "at": "sw2b", "text": "弱电解质\n只有{一小部分|red}电离"}}} />;
