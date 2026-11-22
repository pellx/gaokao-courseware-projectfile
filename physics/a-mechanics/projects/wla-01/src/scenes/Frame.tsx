import React from 'react';
import {AutoScene} from '../components/auto';

export const Frame: React.FC = () => <AutoScene k="frame" d={{"tag": "考点三", "title": "参考系", "blocks": [{"t": "rule", "tag": "定义", "at": "f1", "text": "描述运动时选来作为{参考}的物体", "c": "red", "size": 38}, {"t": "big", "at": "f2", "text": "参考系不同 → 对同一运动的描述{可能不同}", "size": 40}, {"t": "text", "at": "f3", "text": "通常选{地面|orange}作参考系", "size": 34}], "callout": {"label": "要点", "at": "f4", "text": "运动和静止都是{相对}参考系而言的"}, "beat": {"k": "train", "at": "f2b", "text": "对同伴：{静止|red}\n对地面：{运动|orange}"}}} />;
