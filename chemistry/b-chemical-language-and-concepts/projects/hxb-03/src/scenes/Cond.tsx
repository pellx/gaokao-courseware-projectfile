import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点二", "title": "导电的条件", "blocks": [{"t": "big", "at": "cd1", "text": "导电 = 有{自由移动}的带电粒子（离子或电子）", "size": 38}, {"t": "table", "at": "cd2", "head": ["物质", "固体", "熔融", "水溶液"], "cols": "1.3fr 1fr 1fr 1fr", "rows": [{"at": "cd2", "cells": ["NaCl（离子化合物）", "不导电", "{导电}", "{导电}"]}, {"at": "cd3", "cells": ["HCl（共价化合物）", "—", "{不导电|orange}", "{导电}"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "cd4", "text": "{熔融能导电} → 离子化合物；熔融不导电 → 共价化合物"}, "beat": {"k": "tied", "at": "cd2b", "text": "被捆住，跑不动\n= 固体中的离子\n{不能自由移动|red}"}}} />;
