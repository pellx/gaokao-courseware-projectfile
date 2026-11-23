import React from 'react';
import {AutoScene} from '../components/auto';

export const Build: React.FC = () => <AutoScene k="build" d={{"tag": "考点六", "title": "示波管的构造", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "电子枪", "c": "red"}, {"at": "f1", "text": "偏转电极", "c": "orange"}, {"at": "f1", "text": "荧光屏", "c": "red"}], "arrows": []}, {"t": "rule", "tag": "电子枪", "at": "f2", "text": "发射并{加速}电子", "c": "red", "size": 32}, {"t": "rule", "tag": "偏转电极", "at": "f3", "text": "YY′ {竖直偏转}，XX′ {水平偏转}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "f4", "text": "管内抽成{真空}"}, "beat": {"k": "beam", "at": "f2b", "text": "电子枪\n射出{电子束|red}"}}} />;
