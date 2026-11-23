import React from 'react';
import {AutoScene} from '../components/auto';

export const Film: React.FC = () => <AutoScene k="film" d={{"tag": "考点七", "title": "薄膜干涉", "blocks": [{"t": "rule", "tag": "原理", "at": "g1", "text": "{前、后表面}的反射光叠加", "c": "red"}, {"t": "items", "items": [{"at": "g2", "text": "竖直肥皂膜：{上薄下厚}"}, {"at": "g3", "text": "{水平}条纹；白光下呈彩色"}], "size": 38}], "callout": {"label": "易错", "at": "g4", "text": "两束光来自{同一侧}的反射"}, "beat": {"k": "bubble", "at": "g3b", "text": "肥皂泡的彩色\n= {薄膜干涉|red}"}}} />;
