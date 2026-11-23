import React from 'react';
import {AutoScene} from '../components/auto';

export const Spec: React.FC = () => <AutoScene k="spec" d={{"tag": "考点七", "title": "电磁波谱", "blocks": [{"t": "chain", "steps": [{"at": "g2", "text": "无线电波"}, {"at": "g2", "text": "红外线"}, {"at": "g2", "text": "可见光", "c": "orange"}, {"at": "g3", "text": "紫外线"}, {"at": "g3", "text": "X 射线"}, {"at": "g3", "text": "γ 射线", "c": "red"}], "arrows": [], "size": 30}, {"t": "text", "at": "g1", "text": "波长{由长到短}，频率由低到高", "size": 36}], "callout": {"label": "要点", "at": "g4", "text": "波长越短，频率{越高}"}}} />;
