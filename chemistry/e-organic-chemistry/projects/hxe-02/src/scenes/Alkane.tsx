import React from 'react';
import {AutoScene} from '../components/auto';

export const Alkane: React.FC = () => <AutoScene k="alkane" d={{"tag": "考点二", "title": "烷烃的系统命名", "blocks": [{"t": "chain", "steps": [{"at": "an1", "text": "{选主链}：最长"}, {"at": "an2", "text": "{编号}：离支链近"}, {"at": "an3", "text": "{写名称}"}], "arrows": [], "center": true, "size": 34}, {"t": "items", "items": [{"at": "an4", "text": "(CH3)2CHCH2CH3：{2-甲基丁烷}"}, {"at": "an4", "text": "(CH3)3CCH2CH(CH3)2：{2,2,4-三甲基戊烷}"}], "size": 33}], "callout": {"label": "解题方法", "at": "an4", "text": "数字与数字用“{，}”，数字与汉字用“{-}”"}, "beat": {"k": "groups", "at": "an3b", "text": "先挑{最长的一队|red}\n当主链"}}} />;
