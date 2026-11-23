import React from 'react';
import {AutoScene} from '../components/auto';

export const Heat: React.FC = () => <AutoScene k="heat" d={{"tag": "考点三", "title": "热与内能", "blocks": [{"t": "big", "at": "h2", "text": "单纯传热：{ΔU = Q}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "吸热", "at": "h3", "text": "内能{增加}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "放热", "at": "h3", "text": "内能{减少|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "h4", "text": "热量是{过程量}，不能说“含有”热量"}, "beat": {"k": "warm", "at": "h3b", "text": "热饮 → 手心\n{传热|red}"}}} />;
