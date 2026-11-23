import React from 'react';
import {AutoScene} from '../components/auto';

export const Hazard: React.FC = () => <AutoScene k="hazard" d={{"tag": "考点七", "title": "静电的危害与防止", "blocks": [{"t": "rule", "tag": "危害", "at": "h1", "text": "{火花放电}：火灾、爆炸、损坏器件", "c": "red", "size": 32}, {"t": "panel", "title": "防止：及时导走", "at": "h2", "lines": ["油罐车接地", "加油前触摸静电释放器", "保持空气湿润"], "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "h4", "text": "核心是{导走静电}"}, "beat": {"k": "a3", "at": "h3b", "text": "摸门把手“啪”一下\n就是{火花放电|red}"}}} />;
