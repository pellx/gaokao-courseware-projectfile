import React from 'react';
import {AutoScene} from '../components/auto';

export const Conv: React.FC = () => <AutoScene k="conv" d={{"tag": "考点六", "title": "平衡转化率", "blocks": [{"t": "big", "at": "cv1", "text": "α = {转化量 ÷ 起始量} × 100%", "size": 44}, {"t": "items", "items": [{"at": "cv2", "text": "增大 A 的浓度：{B 的转化率增大}，A 自己的转化率减小"}, {"at": "cv3", "text": "按计量数之比投料：各反应物转化率{相等}"}], "size": 32}], "callout": {"label": "易错", "at": "cv4", "text": "2NO2 ⇌ N2O4 恒容再充 NO2：相当于{加压}，转化率增大"}}} />;
