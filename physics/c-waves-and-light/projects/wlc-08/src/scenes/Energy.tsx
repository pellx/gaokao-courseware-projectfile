import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点四", "title": "电磁波的能量", "blocks": [{"t": "rule", "tag": "物质", "at": "d1", "text": "电磁场是一种{物质}", "c": "red"}, {"t": "text", "at": "d3", "text": "微波炉加热食物、阳光使地面升温", "size": 36}], "callout": {"label": "要点", "at": "d4", "text": "传递{能量}和{信息}"}, "beat": {"k": "morning", "at": "d3b", "text": "光照进来\n带来{能量|red}"}}} />;
