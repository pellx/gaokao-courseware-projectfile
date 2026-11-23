import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点三", "title": "机械能守恒定律", "blocks": [{"t": "rule", "tag": "条件", "at": "c1", "text": "只有{重力或弹力}做功", "c": "red"}, {"t": "rule", "tag": "结论", "at": "c3", "text": "动能与势能互相转化，总机械能{不变}", "c": "orange"}], "callout": {"label": "要点", "at": "c4", "text": "只有{重力或弹力}做功"}}} />;
