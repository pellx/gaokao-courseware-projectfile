import React from 'react';
import {AutoScene} from '../components/auto';

export const Lcp: React.FC = () => <AutoScene k="lcp" d={{"tag": "考点七", "title": "勒夏特列原理", "blocks": [{"t": "big", "at": "lc1", "text": "改变一个条件 → 平衡向{减弱这种改变}的方向移动", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "关键词", "at": "lc2", "text": "“{减弱}”，不是“抵消”", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "适用", "at": "lc3", "text": "已达平衡的{可逆反应|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "考法", "at": "lc4", "text": "{不能}用它解释：催化剂加快反应、H2 + I2 加压颜色变深"}, "beat": {"k": "fluster", "at": "lc3b", "text": "平衡被打扰\n只能{减弱|red}，不能抵消"}}} />;
