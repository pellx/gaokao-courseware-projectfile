import React from 'react';
import {AutoScene} from '../components/auto';

export const Force: React.FC = () => <AutoScene k="force" d={{"tag": "考点一", "title": "向心力", "blocks": [{"t": "rule", "tag": "定义", "at": "f1", "text": "匀速圆周运动中，指向{圆心}的合力", "c": "red"}, {"t": "big", "at": "f2", "text": "F_n = {mv^2/r} = {mω^2r|orange}", "size": 52}, {"t": "text", "at": "f3", "text": "只改变速度{方向}，不改变速度大小", "size": 32}], "callout": {"label": "要点", "at": "f4", "text": "向心力按{效果}命名，不是新的性质力"}}} />;
