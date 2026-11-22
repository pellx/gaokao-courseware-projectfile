import React from 'react';
import {AutoScene} from '../components/auto';

export const Thio: React.FC = () => <AutoScene k="thio" d={{"tag": "考点七", "title": "硫代硫酸钠", "blocks": [{"t": "big", "at": "th1", "text": "S2O3^2- + 2H^+ = {S↓} + {SO2↑} + H2O", "size": 42}, {"t": "rule", "tag": "现象", "at": "th2", "text": "变{浑浊|orange} + 刺激性气味；探究速率影响因素", "c": "orange", "size": 31}, {"t": "rule", "tag": "课外", "at": "th3", "text": "碘量法：I2 + 2S2O3^2- = 2I^- + S4O6^2-（{1 : 2}）", "c": "brown", "size": 31}], "callout": {"label": "易错", "at": "th4", "text": "遇酸生成 {S 和 SO2} 两种产物"}}} />;
