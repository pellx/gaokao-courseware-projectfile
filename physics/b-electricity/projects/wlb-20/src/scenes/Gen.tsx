import React from 'react';
import {AutoScene} from '../components/auto';

export const Gen: React.FC = () => <AutoScene k="gen" d={{"tag": "考点二", "title": "交变电流的产生", "blocks": [{"t": "rule", "tag": "条件", "at": "b1", "text": "绕{垂直于磁场}的轴匀速转动", "c": "red", "size": 32}, {"t": "rule", "tag": "中性面", "at": "b2", "text": "线圈平面与磁场{垂直}", "c": "orange", "size": 32}, {"t": "rule", "tag": "在中性面", "at": "b3", "text": "Φ {最大}，e = {0}", "c": "red", "size": 32}], "callout": {"label": "易错", "at": "b4", "text": "Φ 最大时，变化率{为 0}"}}} />;
