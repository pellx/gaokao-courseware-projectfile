import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点二", "title": "向心力演示器的原理", "blocks": [{"t": "chain", "steps": [{"at": "d1", "text": "转动手柄，{槽随塔轮转动}"}, {"at": "d2", "text": "{挡板弹力}提供向心力"}, {"at": "d3", "text": "反作用力经横臂使{套筒下降}"}, {"at": "d4", "text": "标尺格数之比 = {向心力之比}"}], "arrows": []}], "callout": {"label": "要点", "at": "d4", "text": "标尺显示的是两球向心力的{比值}"}, "beat": {"k": "spin", "at": "d3b", "text": "总得有个力往圆心拉\n{挡板的弹力|red}就是向心力"}}} />;
