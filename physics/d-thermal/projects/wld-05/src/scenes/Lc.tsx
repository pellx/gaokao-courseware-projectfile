import React from 'react';
import {AutoScene} from '../components/auto';

export const Lc: React.FC = () => <AutoScene k="lc" d={{"tag": "考点九", "title": "液晶", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "像液体", "at": "q1", "text": "有{流动性}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "像晶体", "at": "q1", "text": "光学性质{各向异性|orange}", "c": "orange", "size": 34}]}]}, {"t": "big", "at": "q2", "text": "应用：{液晶显示}", "size": 48}], "callout": {"label": "易错", "at": "q3", "text": "液晶{不是晶体}"}, "beat": {"k": "selfie", "at": "q2b", "text": "液晶显示\n电压改变{分子排列|red}"}}} />;
