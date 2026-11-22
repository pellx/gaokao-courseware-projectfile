import React from 'react';
import {AutoScene} from '../components/auto';

export const Sign: React.FC = () => <AutoScene k="sign" d={{"tag": "考点二", "title": "平衡标志的判断", "blocks": [{"t": "big", "at": "si1", "text": "{变量不变} → 平衡", "size": 48}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "直接", "at": "si2", "text": "v(正) = v(逆)：{一正一逆}，比值等于计量数之比", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "间接", "at": "si3", "text": "原来会变的量不再变；{原来就不变的不能用}", "c": "orange", "size": 30}]}]}, {"t": "text", "at": "si4", "text": "可作变量：颜色、浓度、绝热时的温度、分子数变化时的总压和平均摩尔质量", "size": 30}], "callout": {"label": "解题方法", "at": "si5", "text": "恒容全气体：{密度始终不变}，不能作标志"}}} />;
