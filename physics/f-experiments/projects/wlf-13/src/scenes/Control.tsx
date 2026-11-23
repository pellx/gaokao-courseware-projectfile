import React from 'react';
import {AutoScene} from '../components/auto';

export const Control: React.FC = () => <AutoScene k="control" d={{"tag": "考点五", "title": "控制电路", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "限流式", "at": "k1", "lines": ["变阻器与金属丝串联", "电路简单"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "分压式", "at": "k2", "lines": ["电压可从 0 开始调", "调节范围大"], "c": "red", "size": 32}]}]}, {"t": "big", "at": "k3", "text": "闭合开关前：滑片放在使电压{最小}的位置", "size": 38}], "callout": {"label": "要点", "at": "k4", "text": "先放好滑片，{保护电表和金属丝}"}}} />;
