import React from 'react';
import {AutoScene} from '../components/auto';

export const Detect: React.FC = () => <AutoScene k="detect" d={{"tag": "考点五", "title": "卤素原子的检验", "blocks": [{"t": "chain", "steps": [{"at": "de1", "text": "NaOH 溶液，△\n（水解）"}, {"at": "de2", "text": "冷却，{稀硝酸}酸化"}, {"at": "de2", "text": "AgNO3 溶液"}], "arrows": [], "center": true, "size": 32}, {"t": "table", "at": "de3", "head": ["沉淀", "颜色"], "cols": "1fr 1fr", "rows": [{"at": "de3", "cells": ["AgCl", "白色"]}, {"at": "de3", "cells": ["AgBr", "浅黄色"]}, {"at": "de3", "cells": ["AgI", "黄色"]}], "size": 32, "rowHeight": 56}], "callout": {"label": "易错", "at": "de4", "text": "不酸化会生成 {Ag2O}；不能用盐酸"}, "beat": {"k": "pink", "at": "de3b", "text": "水解 → 酸化 → AgNO3\n{顺序不能乱|red}"}}} />;
