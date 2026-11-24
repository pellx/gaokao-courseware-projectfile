import React from 'react';
import {AutoScene} from '../components/auto';

export const Dilute: React.FC = () => <AutoScene k="dilute" d={{"tag": "考点四", "title": "用油酸酒精溶液的原因", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "纯油酸量太多"}, {"at": "s2", "text": "酒精稀释", "c": "orange"}, {"at": "s3", "text": "酒精溶水挥发"}, {"at": "s3", "text": "单分子油膜"}], "arrows": []}, {"t": "mark", "ok": false, "at": "s1", "text": "直接滴纯油酸：{铺不成单分子层}"}, {"t": "mark", "ok": true, "at": "s2", "text": "滴稀释后的溶液：油酸{充分展开}"}], "callout": {"label": "要点", "at": "s4", "text": "稀释为了{充分展开}"}, "beat": {"k": "melt", "at": "s3b", "text": "整个人摊成一片\n油酸也要{摊开|red}成单层"}}} />;
