import React from 'react';
import {AutoScene} from '../components/auto';

export const Ohm: React.FC = () => <AutoScene k="ohm" d={{"tag": "考点四", "title": "闭合电路的欧姆定律", "blocks": [{"t": "big", "at": "d3", "text": "I = {E/(R + r)}", "size": 64}, {"t": "rule", "tag": "内容", "at": "d2", "text": "I 与 E {成正比}，与 R + r {成反比|orange}", "c": "red", "size": 32}], "callout": {"label": "易错", "at": "d4", "text": "只适用于外电路为{纯电阻}的电路"}}} />;
