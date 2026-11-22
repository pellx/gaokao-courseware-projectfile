import React from 'react';
import {AutoScene} from '../components/auto';

export const Mutual: React.FC = () => <AutoScene k="mutual" d={{"tag": "考点七", "title": "苯环与侧链的相互影响", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "侧链 → 苯环", "at": "mu1", "text": "甲苯硝化{比苯容易}", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "苯环 → 侧链", "at": "mu2", "text": "甲苯能被 {KMnO4 氧化}，甲烷不能", "c": "orange", "size": 31}]}]}, {"t": "text", "at": "mu3", "text": "苯酚：—OH 使苯环更活泼，苯环使 —OH 显{弱酸性}", "size": 32, "center": true}], "callout": {"label": "考法", "at": "mu4", "text": "苯环影响侧链：{甲苯被 KMnO4 氧化而甲烷不能}"}, "beat": {"k": "mugi", "at": "mu2b", "text": "苯环与侧链\n{互相影响|red}"}}} />;
