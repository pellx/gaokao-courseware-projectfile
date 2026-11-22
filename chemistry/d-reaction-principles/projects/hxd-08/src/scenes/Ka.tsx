import React from 'react';
import {AutoScene} from '../components/auto';

export const Ka: React.FC = () => <AutoScene k="ka" d={{"tag": "考点五", "title": "电离常数 K_a", "blocks": [{"t": "big", "at": "ka1", "text": "K_a = {c(CH3COO^-)·c(H^+) / c(CH3COOH)}", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "只与", "at": "ka2", "text": "{温度}有关，升温增大", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "越大", "at": "ka3", "text": "酸性{越强}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "ka4", "text": "CH3COOH > H2CO3 > HClO > HCO3^-", "size": 38, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "易错", "at": "ka4", "text": "稀释、加酸、加盐：{K_a 不变}"}, "beat": {"k": "star", "at": "ka3b", "text": "K_a 越大\n{酸性越强|red}"}}} />;
