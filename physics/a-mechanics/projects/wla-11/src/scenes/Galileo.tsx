import React from 'react';
import {AutoScene} from '../components/auto';

export const Galileo: React.FC = () => <AutoScene k="galileo" d={{"tag": "考点二", "title": "伽利略的理想斜面实验", "blocks": [{"t": "chain", "steps": [{"at": "b1", "text": "小球滚下斜面"}, {"at": "b2", "text": "无摩擦：升到{原来高度}"}, {"at": "b2", "text": "倾角减小：滚得更远"}, {"at": "b3", "text": "放平：{永远运动下去}"}], "arrows": []}], "callout": {"label": "要点", "at": "b4", "text": "可靠事实 + {合理外推}"}, "beat": {"k": "swing", "at": "b3b", "text": "没有阻力\n总能回到{原来的高度|red}"}}} />;
