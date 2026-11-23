import React from 'react';
import {AutoScene} from '../components/auto';

export const Spin: React.FC = () => <AutoScene k="spin" d={{"tag": "考点二", "title": "地球自转的影响", "blocks": [{"t": "rule", "tag": "分解", "at": "b2", "text": "万有引力 = 重力 + 自转所需{向心力}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "b3", "text": "两极：{G重 = F引}", "size": 38}]}, {"blocks": [{"t": "big", "at": "b3", "text": "赤道：差别{最大|orange}", "size": 38, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "b4", "text": "差别{很小}，一般可忽略"}}} />;
