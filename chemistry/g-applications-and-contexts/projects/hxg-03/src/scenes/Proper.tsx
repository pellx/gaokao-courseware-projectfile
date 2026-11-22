import React from 'react';
import {AutoScene} from '../components/auto';

export const Proper: React.FC = () => <AutoScene k="proper" d={{"tag": "考点六", "title": "浸出时的“适当”", "blocks": [{"t": "table", "at": "pr1", "head": ["过度", "弊端"], "cols": "1.2fr 2.6fr", "rows": [{"at": "pr1", "cells": ["温度过高", "{挥发}（HCl、HNO3、NH3）；{分解}（H2O2、NH4HCO3）"]}, {"at": "pr2", "cells": ["酸浓度过高", "后续调 pH {消耗更多碱}"]}, {"at": "pr3", "cells": ["时间过长", "效率低、成本高"]}], "size": 31, "rowHeight": 72}], "callout": {"label": "答题模板", "at": "pr4", "text": "“温度过高，{H2O2 分解 / 盐酸挥发}，导致……”"}, "beat": {"k": "htt", "at": "pr3b", "text": "火候要{恰到好处|red}"}}} />;
