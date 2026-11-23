import React from 'react';
import {AutoScene} from '../components/auto';

export const Scale: React.FC = () => <AutoScene k="scale" d={{"tag": "考点五", "title": "温标与热力学温度", "blocks": [{"t": "big", "at": "s2", "text": "T = {t + 273.15 K}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "单位", "at": "s2", "text": "开尔文 {K}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "地位", "at": "s3", "text": "国际单位制{基本量}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "s4", "text": "ΔT = Δt，变化 1 K = 变化 1 ℃"}, "beat": {"k": "hot", "at": "s3b", "text": "35 ℃\n约 {308 K|red}"}}} />;
