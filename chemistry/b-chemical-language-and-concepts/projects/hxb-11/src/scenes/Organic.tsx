import React from 'react';
import {AutoScene} from '../components/auto';

export const Organic: React.FC = () => <AutoScene k="organic" d={{"tag": "考点六", "title": "有机物参与的氧化还原", "blocks": [{"t": "big", "at": "og1", "text": "H2C2O4：C 为 {+3} → CO2：C 为 +4", "size": 40}, {"t": "big", "at": "og2", "text": "2MnO4^- + 5H2C2O4 + 6H^+ = 2Mn^2+ + {10CO2↑} + 8H2O", "size": 36, "c": "orange", "soft": "orangeSoft"}, {"t": "rule", "tag": "课外", "at": "og3", "text": "平均化合价法：H 按 +1、O 按 −2，算出 C 的{平均价态}", "c": "brown", "size": 30}], "callout": {"label": "易错", "at": "og4", "text": "草酸是弱酸，写 {H2C2O4}，不拆"}}} />;
