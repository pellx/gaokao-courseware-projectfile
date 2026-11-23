import React from 'react';
import {AutoScene} from '../components/auto';

export const Seek: React.FC = () => <AutoScene k="seek" d={{"tag": "考点一", "title": "追寻守恒量", "blocks": [{"t": "chain", "steps": [{"at": "a1x", "text": "小球滚下斜面"}, {"at": "a2x", "text": "滚上另一斜面"}, {"at": "a2x", "text": "回到{几乎同样高度}"}], "arrows": []}, {"t": "text", "at": "a3x", "text": "有某个量{守恒}", "size": 36}], "callout": {"label": "要点", "at": "a4x", "text": "存在{守恒量}"}, "beat": {"k": "coaster", "at": "a3b", "text": "动能 ⇄ {势能|red}"}}} />;
