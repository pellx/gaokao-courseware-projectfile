import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点八", "title": "单位制的作用", "blocks": [{"t": "rule", "tag": "统一单位", "at": "h1", "text": "各量用{国际单位}，结果也是国际单位", "c": "red"}, {"t": "rule", "tag": "检查公式", "at": "h3", "text": "两边单位不一致 → {一定错}", "c": "orange"}], "callout": {"label": "易错", "at": "h4", "text": "单位一致只说明{可能}正确"}}} />;
