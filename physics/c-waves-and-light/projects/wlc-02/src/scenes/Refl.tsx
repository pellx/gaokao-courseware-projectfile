import React from 'react';
import {AutoScene} from '../components/auto';

export const Refl: React.FC = () => <AutoScene k="refl" d={{"tag": "考点一", "title": "波的反射", "blocks": [{"t": "rule", "tag": "反射", "at": "a1", "text": "遇到障碍物，返回{原介质}继续传播", "c": "red"}, {"t": "big", "at": "a2", "text": "反射角 = {入射角}", "size": 50}, {"t": "text", "at": "a3", "text": "反射波：频率、波速、波长{都不变}", "size": 34}], "callout": {"label": "要点", "at": "a4", "text": "{回声}是声波的反射"}}} />;
