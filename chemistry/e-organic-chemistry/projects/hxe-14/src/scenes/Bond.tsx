import React from 'react';
import {AutoScene} from '../components/auto';

export const Bond: React.FC = () => <AutoScene k="bond" d={{"tag": "考点一", "title": "找断键与成键", "blocks": [{"t": "items", "items": [{"at": "bo1", "text": "对比{反应前后结构}"}, {"at": "bo2", "text": "给碳原子{编号}"}, {"at": "bo3", "text": "找新形成的 {C—C 键}"}], "size": 36}], "callout": {"label": "解题方法", "at": "bo4", "text": "只看{变化的部分}，R 原样照抄"}, "beat": {"k": "teacher", "at": "bo3b", "text": "学会“大的”\n{套到“小的”身上|red}"}}} />;
