import React from 'react';
import {AutoScene} from '../components/auto';

export const Stick: React.FC = () => <AutoScene k="stick" d={{"tag": "考点三", "title": "完全非弹性碰撞", "blocks": [{"t": "rule", "tag": "特点", "at": "s1", "text": "碰后{结合在一起}，速度相同", "c": "red"}, {"t": "big", "at": "s2", "text": "{m_1v_1 + m_2v_2} = (m_1 + m_2)v", "size": 48}, {"t": "text", "at": "s3", "text": "子弹留在木块中；车厢碰后挂在一起", "size": 30}], "callout": {"label": "要点", "at": "s4", "text": "动能损失{最大}"}, "beat": {"k": "hug", "at": "s3b", "text": "撞上后{抱成一团|red}\n共同速度一起运动"}}} />;
