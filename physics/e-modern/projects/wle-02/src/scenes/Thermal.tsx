import React from 'react';
import {AutoScene} from '../components/auto';

export const Thermal: React.FC = () => <AutoScene k="thermal" d={{"tag": "考点一", "title": "热辐射", "blocks": [{"t": "rule", "tag": "热辐射", "at": "a1", "text": "一切物体都辐射电磁波，辐射情况与{温度}有关", "c": "red"}, {"t": "chain", "steps": [{"at": "a2", "text": "低温\n主要是红外线"}, {"at": "a3", "text": "温度升高\n{短波成分增强}"}, {"at": "a3", "text": "暗红 → 黄白", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "a4", "text": "{一切物体}都在热辐射"}}} />;
