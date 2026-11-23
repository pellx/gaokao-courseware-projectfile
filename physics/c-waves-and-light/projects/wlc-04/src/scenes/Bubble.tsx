import React from 'react';
import {AutoScene} from '../components/auto';

export const Bubble: React.FC = () => <AutoScene k="bubble" d={{"tag": "考点八", "title": "生活中的全反射", "blocks": [{"t": "big", "at": "h1", "text": "水中气泡{特别明亮}", "size": 50}, {"t": "chain", "steps": [{"at": "h2", "text": "水 → 气泡 光密 → 光疏"}, {"at": "h3", "text": "全反射", "c": "red"}, {"at": "h3", "text": "大量光进入人眼", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "h4", "text": "气泡明亮 = {全反射}"}, "beat": {"k": "bubble", "at": "h3b", "text": "水中气泡发亮\n是{全反射|red}"}}} />;
