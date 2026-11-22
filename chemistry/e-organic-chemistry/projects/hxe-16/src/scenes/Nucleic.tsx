import React from 'react';
import {AutoScene} from '../components/auto';

export const Nucleic: React.FC = () => <AutoScene k="nucleic" d={{"tag": "考点七", "title": "核酸", "blocks": [{"t": "big", "at": "nu1", "text": "核苷酸 = 磷酸 + 五碳糖 + {含氮碱基}", "size": 40}, {"t": "table", "at": "nu2", "head": ["比较项目", "DNA", "RNA"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "nu2", "cells": ["五碳糖", "脱氧核糖", "核糖"]}, {"at": "nu2", "cells": ["特有碱基", "T", "U"]}, {"at": "nu3b", "cells": ["主要功能", "{储存、传递遗传信息}", "参与蛋白质合成"]}], "size": 32, "rowHeight": 58}, {"t": "text", "at": "nu3", "text": "碱基配对靠{氢键}：A—T（2 个），{G—C（3 个）}", "size": 32, "center": true}], "callout": {"label": "易错", "at": "nu4", "text": "碱基配对靠{氢键}，不是共价键"}}} />;
