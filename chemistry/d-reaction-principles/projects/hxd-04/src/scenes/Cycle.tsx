import React from 'react';
import {AutoScene} from '../components/auto';

export const Cycle: React.FC = () => <AutoScene k="cycle" d={{"tag": "考点五", "title": "催化循环图", "blocks": [{"t": "items", "items": [{"at": "cy1", "text": "箭头{进入}圈：反应物"}, {"at": "cy1", "text": "箭头{离开|orange}圈：生成物"}, {"at": "cy2", "text": "总反应：{圈上物质全部消掉}"}, {"at": "cy3", "text": "转一圈回到原形：{催化剂}；其余：中间体"}], "size": 34}], "callout": {"label": "解题方法", "at": "cy4", "text": "沿箭头走一圈，{标出每步进出的物质}，再写总反应"}}} />;
