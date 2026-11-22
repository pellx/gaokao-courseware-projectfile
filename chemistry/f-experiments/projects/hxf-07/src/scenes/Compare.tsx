import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="compare" d={{"tag": "考点六", "title": "陷阱五：比较实验是否合理", "blocks": [{"t": "mark", "ok": false, "at": "cp2", "text": "Cl2 通入 NaBr 后的溶液使淀粉 KI 变蓝 → Br2 > I2（Cl2 可能过量）", "size": 29}, {"t": "mark", "ok": false, "at": "cp3", "text": "HCl 酸性强于 H2CO3 → 非金属性 Cl > C（要比最高价含氧酸）", "size": 29}, {"t": "rule", "tag": "挥发性酸", "at": "cp1", "text": "浓盐酸、醋酸制 CO2 后，要{除去挥发出的酸}再通入下一个装置", "c": "orange", "size": 29}], "callout": {"label": "解题方法", "at": "cp4", "text": "中间有没有{多余反应物干扰}"}}} />;
