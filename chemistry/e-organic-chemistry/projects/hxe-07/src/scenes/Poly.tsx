import React from 'react';
import {AutoScene} from '../components/auto';

export const Poly: React.FC = () => <AutoScene k="poly" d={{"tag": "考点五", "title": "加聚反应", "blocks": [{"t": "big", "at": "po1", "text": "nCH2=CH2 → {—[CH2—CH2]_n—}", "size": 44}, {"t": "text", "at": "po2", "text": "聚丙烯链节：—CH2—CH(CH3)—　{甲基在支链}", "size": 33, "center": true}, {"t": "rule", "tag": "特点", "at": "po3", "text": "原子利用率 {100%}", "c": "green", "size": 32}], "callout": {"label": "易错", "at": "po4", "text": "聚乙烯{没有双键}，不使溴水褪色"}, "beat": {"k": "glasses", "at": "po3b", "text": "加聚\n{手拉手排成长队|red}"}}} />;
