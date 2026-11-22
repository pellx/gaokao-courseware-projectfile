import React from 'react';
import {AutoScene} from '../components/auto';

export const Type: React.FC = () => <AutoScene k="type" d={{"tag": "考点一", "title": "加聚与缩聚", "blocks": [{"t": "table", "at": "ty1", "head": ["比较项目", "加聚", "缩聚"], "cols": "1fr 1.6fr 1.8fr", "rows": [{"at": "ty1", "cells": ["单体", "含{不饱和键}", "含{两个以上官能团}"]}, {"at": "ty2", "cells": ["小分子", "无", "有"]}, {"at": "ty3", "cells": ["主链", "{只有碳}", "含{酯基、酰胺基}"]}], "size": 31, "rowHeight": 64}], "callout": {"label": "解题方法", "at": "ty4", "text": "看主链上{有没有 O、N}"}, "beat": {"k": "line", "at": "ty3b", "text": "加聚\n{手拉手连成长链|red}"}}} />;
