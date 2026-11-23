import React from 'react';
import {AutoScene} from '../components/auto';

export const Ideal: React.FC = () => <AutoScene k="ideal" d={{"tag": "考点四", "title": "理想气体", "blocks": [{"t": "rule", "tag": "理想气体", "at": "i1", "text": "任何温度、任何压强下都遵从{气体实验定律}", "c": "red"}, {"t": "rule", "tag": "模型", "at": "i2", "text": "理想化模型，{实际不存在}", "c": "orange"}, {"t": "big", "at": "i3", "text": "温度{不太低}、压强{不太大}", "size": 46}], "callout": {"label": "要点", "at": "i4", "text": "常温常压的实际气体可视为{理想气体}"}, "beat": {"k": "mendako", "at": "i3b", "text": "忽略次要因素\n{理想化模型|red}"}}} />;
