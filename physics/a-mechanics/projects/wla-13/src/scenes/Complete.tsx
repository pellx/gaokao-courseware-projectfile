import React from 'react';
import {AutoScene} from '../components/auto';

export const Complete: React.FC = () => <AutoScene k="complete" d={{"tag": "考点六", "title": "完全失重", "blocks": [{"t": "big", "at": "f1", "text": "a = g 向下 → F = {0}", "size": 48}, {"t": "items", "items": [{"at": "f2", "text": "自由落体、抛体中的物体"}, {"at": "f2", "text": "绕地球运行的{航天器}中的物体"}, {"at": "f3", "text": "与重力有关的现象{消失}：天平失效、液体无压强"}], "size": 31}], "callout": {"label": "易错", "at": "f4", "text": "完全失重{仍受重力}"}, "beat": {"k": "tramp", "at": "f3b", "text": "在空中：a = g，完全失重\n但{重力还在|red}"}}} />;
