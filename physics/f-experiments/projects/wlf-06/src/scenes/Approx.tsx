import React from 'react';
import {AutoScene} from '../components/auto';

export const Approx: React.FC = () => <AutoScene k="approx" d={{"tag": "考点四", "title": "拉力的近似条件", "blocks": [{"t": "big", "at": "n2", "text": "实际：细绳拉力 {<} 槽码重力", "size": 44}, {"t": "big", "at": "n3", "text": "槽码质量 {≪} 小车质量　→　拉力 ≈ 槽码重力", "size": 40, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "易错", "at": "n4", "text": "只是近似：要求槽码质量{远小于}小车质量"}, "beat": {"k": "think", "at": "n3b", "text": "拉力 = 槽码重力？\n{只是近似|red}"}}} />;
