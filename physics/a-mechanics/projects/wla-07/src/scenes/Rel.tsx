import React from 'react';
import {AutoScene} from '../components/auto';

export const Rel: React.FC = () => <AutoScene k="rel" d={{"tag": "考点七", "title": "摩擦力阻碍相对运动", "blocks": [{"t": "big", "at": "g1", "text": "阻碍的是{相对运动}", "size": 50}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "g2", "text": "可以是阻力，也可以是{动力}"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "g3", "text": "运动的物体可受{静摩擦力}"}]}]}, {"t": "text", "at": "g3", "text": "随传送带匀速上行的箱子：静摩擦力{沿传送带向上}", "size": 30}], "callout": {"label": "易错", "at": "g4", "text": "摩擦力{可以是动力}"}, "beat": {"k": "run", "at": "g3b", "text": "脚向后蹬地\n静摩擦力{向前|red}，是动力"}}} />;
