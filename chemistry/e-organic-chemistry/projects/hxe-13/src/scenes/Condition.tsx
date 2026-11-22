import React from 'react';
import {AutoScene} from '../components/auto';

export const Condition: React.FC = () => <AutoScene k="condition" d={{"tag": "考点五", "title": "由条件推断反应类型", "blocks": [{"t": "table", "at": "cd2", "head": ["反应条件", "反应类型"], "cols": "1.8fr 2fr", "rows": [{"at": "cd2", "cells": ["NaOH 水溶液，△", "卤代烃、酯的{水解}"]}, {"at": "cd2", "cells": ["NaOH 醇溶液，△", "卤代烃{消去}"]}, {"at": "cd2", "cells": ["浓硫酸，△", "醇消去或{酯化}"]}, {"at": "cd3", "cells": ["Cu 或 Ag，O2，△", "醇{催化氧化}"]}, {"at": "cd3", "cells": ["H2，Ni，△", "加成（还原）"]}, {"at": "cd3", "cells": ["光照，Cl2", "烷基上取代"]}], "size": 30, "rowHeight": 56}], "callout": {"label": "解题方法", "at": "cd4", "text": "先{圈出所有反应条件}"}, "beat": {"k": "strum", "at": "cd3b", "text": "看到条件\n{反应类型自己跳出来|red}"}}} />;
