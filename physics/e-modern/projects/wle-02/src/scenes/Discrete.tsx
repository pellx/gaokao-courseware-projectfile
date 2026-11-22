import React from 'react';
import {AutoScene} from '../components/auto';

export const Discrete: React.FC = () => <AutoScene k="discrete" d={{"tag": "考点六", "title": "能量量子化", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "f1", "text": "微观\n能量{分立}", "size": 44}]}, {"blocks": [{"t": "big", "at": "f2", "text": "宏观\n看起来{连续|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "f3", "text": "量子化是{微观世界的基本特征}", "size": 34}], "callout": {"label": "要点", "at": "f4", "text": "能量{不连续}、分立"}}} />;
