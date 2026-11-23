import React from 'react';
import {AutoScene} from '../components/auto';

export const Size: React.FC = () => <AutoScene k="size" d={{"tag": "考点八", "title": "原子核的电荷与尺度", "blocks": [{"t": "rule", "tag": "核电荷数", "at": "h1", "text": "核电荷数 = {原子序数} = 核外电子数", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "h3", "text": "原子半径\n{10^-10 m|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "h3", "text": "原子核半径\n{10^-15 m}", "size": 44}]}]}, {"t": "text", "at": "h4", "text": "相差约 {10^5 倍}", "size": 34}], "callout": {"label": "要点", "at": "h5", "text": "原子 10^-10 m，原子核 {10^-15 m}"}}} />;
