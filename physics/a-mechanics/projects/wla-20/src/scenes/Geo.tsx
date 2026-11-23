import React from 'react';
import {AutoScene} from '../components/auto';

export const Geo: React.FC = () => <AutoScene k="geo" d={{"tag": "考点六", "title": "地球同步卫星", "blocks": [{"t": "items", "items": [{"at": "f1", "text": "周期 = 地球自转周期"}, {"at": "f2", "text": "静止卫星：轨道在{赤道平面}"}, {"at": "f3", "text": "离地高度约 {3.6×10^4 km}"}], "size": 34}], "callout": {"label": "要点", "at": "f4", "text": "静止卫星：{赤道上空}、高度确定"}, "beat": {"k": "teru", "at": "f3b", "text": "相对地面\n{静止|red}"}}} />;
