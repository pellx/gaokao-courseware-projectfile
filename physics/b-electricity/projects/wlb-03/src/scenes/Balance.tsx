import React from 'react';
import {AutoScene} from '../components/auto';

export const Balance: React.FC = () => <AutoScene k="balance" d={{"tag": "考点一", "title": "静电平衡", "blocks": [{"t": "rule", "tag": "过程", "at": "b1", "text": "外电场使{自由电子}重新分布", "c": "red", "size": 34}, {"t": "rule", "tag": "静电平衡", "at": "b2", "text": "自由电子{不再定向移动}", "c": "orange", "size": 34}], "callout": {"label": "要点", "at": "b3", "text": "不是电子静止，而是{无定向移动}"}}} />;
