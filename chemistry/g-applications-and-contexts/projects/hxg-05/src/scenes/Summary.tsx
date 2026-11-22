import React from 'react';
import {AutoScene} from '../components/auto';

export const Summary: React.FC = () => <AutoScene k="summary" d={{"tag": "考点七", "title": "答题模板汇总", "blocks": [{"t": "table", "at": "su1", "head": ["设问", "模板"], "cols": "1.2fr 3fr", "rows": [{"at": "su1", "cells": ["提高浸出率", "粉碎、{适当}升温、{适当}增大浓度、搅拌"]}, {"at": "su2", "cells": ["调 pH 目的", "某离子{沉淀完全}，某离子不沉淀"]}, {"at": "su2", "cells": ["加 H2O2", "Fe^2+ → Fe^3+，便于除去"]}, {"at": "su3", "cells": ["温度控制", "低：速率慢；高：{分解、挥发}"]}, {"at": "su3", "cells": ["得到晶体", "蒸发浓缩、冷却结晶、过滤、洗涤、干燥"]}], "size": 29, "rowHeight": 56}], "callout": {"label": "解题方法", "at": "su4", "text": "{先套模板}，再换具体物质"}}} />;
