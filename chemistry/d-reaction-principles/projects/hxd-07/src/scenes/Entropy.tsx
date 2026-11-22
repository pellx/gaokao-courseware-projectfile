import React from 'react';
import {AutoScene} from '../components/auto';

export const Entropy: React.FC = () => <AutoScene k="entropy" d={{"tag": "考点一", "title": "自发过程与熵", "blocks": [{"t": "rule", "tag": "自发过程", "at": "en1", "text": "{不用外界帮助}就能自动进行", "c": "red", "size": 32}, {"t": "big", "at": "en2", "text": "S(g) > S(l) > S(s)", "size": 46}, {"t": "rule", "tag": "熵增", "at": "en3", "text": "{气体分子数增加}：ΔS > 0，如 CaCO3 分解", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "en4", "text": "ΔH < 0 或 ΔS > 0 {单独都不能决定}是否自发"}}} />;
