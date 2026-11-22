import React from 'react';
import {AutoScene} from '../components/auto';

export const Rel: React.FC = () => <AutoScene k="rel" d={{"tag": "考点一", "title": "关系式法", "blocks": [{"t": "items", "items": [{"at": "re2", "text": "2Cu^2+ + 4I^- = 2CuI↓ + {I2}"}, {"at": "re2", "text": "{I2} + 2S2O3^2- = 2I^- + S4O6^2-"}], "size": 34}, {"t": "big", "at": "re3", "text": "2Cu^2+ ～ I2 ～ 2S2O3^2-　→　{Cu^2+ ～ S2O3^2-（1 : 1）}", "size": 38}], "callout": {"label": "解题方法", "at": "re4", "text": "中间物质{两边系数对齐}再约去，只看起始物和终态物"}, "beat": {"k": "chain", "at": "re3b", "text": "手搭肩传话\n{只看第一个和最后一个|red}"}}} />;
