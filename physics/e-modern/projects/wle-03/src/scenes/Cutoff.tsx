import React from 'react';
import {AutoScene} from '../components/auto';

export const Cutoff: React.FC = () => <AutoScene k="cutoff" d={{"tag": "考点三", "title": "截止频率", "blocks": [{"t": "rule", "tag": "截止频率 ν_c", "at": "c1", "text": "ν < ν_c：光再强、照得再久，也{不能}发生光电效应", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "c1", "text": "ν ≥ ν_c\n{能发生}", "size": 44}]}, {"blocks": [{"t": "big", "at": "c1", "text": "ν < ν_c\n{不能发生|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "c3", "text": "ν_c 由{金属}决定，又叫极限频率", "size": 32}], "callout": {"label": "易错", "at": "c4", "text": "能否发生看{频率}，不看光强"}, "beat": {"k": "fire", "at": "c3b", "text": "频率太低\n能量{不够|red}"}}} />;
