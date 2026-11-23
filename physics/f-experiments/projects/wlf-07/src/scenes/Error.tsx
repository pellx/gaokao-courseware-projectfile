import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点七", "title": "误差来源", "blocks": [{"t": "items", "items": [{"at": "e1", "text": "斜槽末端{不水平}"}, {"at": "e2", "text": "释放位置{不同}"}, {"at": "e3", "text": "原点、竖直方向确定{不准}"}, {"at": "e3", "text": "描点不准确"}, {"at": "e3", "text": "{空气阻力}"}], "size": 34}], "callout": {"label": "易错", "at": "e4", "text": "原点应是{球心}的投影，不是斜槽端口"}}} />;
