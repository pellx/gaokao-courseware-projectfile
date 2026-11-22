import React from 'react';
import {AutoScene} from '../components/auto';

export const Data: React.FC = () => <AutoScene k="data" d={{"tag": "考点八", "title": "数据处理方法", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "列表法", "at": "h1", "lines": ["写明物理量和单位", "列出各次测量", "便于发现规律"], "c": "orange", "size": 31}]}, {"blocks": [{"t": "panel", "title": "图像法", "at": "h2", "lines": ["选好坐标轴和标度", {"at": "h3", "text": "尽量多的点在线上，其余{均匀分布两侧}"}, {"at": "h4", "text": "明显偏离的点{舍去}"}], "c": "red", "size": 31}]}]}, {"t": "big", "at": "h5", "text": "曲线 → {改换坐标} → 直线，看斜率和截距", "size": 38}], "callout": {"label": "要点", "at": "h6", "text": "直线或平滑曲线，{不连折线}"}}} />;
