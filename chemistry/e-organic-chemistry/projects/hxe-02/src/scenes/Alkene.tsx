import React from 'react';
import {AutoScene} from '../components/auto';

export const Alkene: React.FC = () => <AutoScene k="alkene" d={{"tag": "考点三", "title": "烯烃、炔烃的命名", "blocks": [{"t": "rule", "tag": "主链", "at": "ae1", "text": "必须{含碳碳双键或三键}", "c": "red", "size": 32}, {"t": "rule", "tag": "编号", "at": "ae2", "text": "离{不饱和键}最近的一端开始", "c": "orange", "size": 32}, {"t": "items", "items": [{"at": "ae3", "text": "CH2=CHCH2CH3：{1-丁烯}"}, {"at": "ae3", "text": "CH3CH=CHCH3：2-丁烯"}, {"at": "ae3", "text": "CH3C(CH3)=CHCH3：{2-甲基-2-丁烯}"}], "size": 32}], "callout": {"label": "易错", "at": "ae4", "text": "必须写出{双键位置}"}, "beat": {"k": "ponytail", "at": "ae3b", "text": "编号让{官能团位次最小|red}"}}} />;
