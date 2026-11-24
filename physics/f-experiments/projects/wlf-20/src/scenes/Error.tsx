import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点八", "title": "误差来源及减小方法", "blocks": [{"t": "rule", "tag": "来源", "at": "e1", "text": "{Δx} 和 {l} 的测量", "c": "red"}, {"t": "items", "items": [{"at": "e2", "text": "测{多条}亮条纹的总距离，再求 Δx"}, {"at": "e3", "text": "中心刻线与条纹{平行}，对准{中心}"}, {"at": "e4", "text": "{多次测量}取平均值"}], "size": 32}], "callout": {"label": "要点", "at": "e4", "text": "测多条、对中心、{多次测量}"}}} />;
