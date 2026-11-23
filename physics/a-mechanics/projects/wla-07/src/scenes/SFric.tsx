import React from 'react';
import {AutoScene} from '../components/auto';

export const SFric: React.FC = () => <AutoScene k="sfric" d={{"tag": "考点五", "title": "静摩擦力", "blocks": [{"t": "rule", "tag": "产生", "at": "e1", "text": "{相对静止}，有{相对运动趋势}", "c": "red", "size": 34}, {"t": "text", "at": "e2", "text": "推箱子没推动：地面给箱子{向后|orange}的静摩擦力", "size": 30}, {"t": "big", "at": "e3", "text": "与{相对运动趋势}方向相反", "size": 46}], "callout": {"label": "要点", "at": "e4", "text": "先找{相对运动趋势}"}, "beat": {"k": "guitar", "at": "e3b", "text": "吉他有{向下滑|orange}的趋势\n手的静摩擦力{向上|red}"}}} />;
