import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点一", "title": "原电池的构成条件", "blocks": [{"t": "big", "at": "cd1", "text": "化学能 → {电能}", "size": 48}, {"t": "items", "items": [{"at": "cd2", "text": "① {自发的氧化还原反应}"}, {"at": "cd2", "text": "② 两个电极"}, {"at": "cd2", "text": "③ 电解质溶液或熔融电解质"}, {"at": "cd2", "text": "④ {闭合回路|orange}"}], "size": 34}], "callout": {"label": "易错", "at": "cd4", "text": "电极可以是{石墨}；非氧化还原反应不能设计成原电池"}}} />;
