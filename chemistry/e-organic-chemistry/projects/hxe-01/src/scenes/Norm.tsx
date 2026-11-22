import React from 'react';
import {AutoScene} from '../components/auto';

export const Norm: React.FC = () => <AutoScene k="norm" d={{"tag": "考点六", "title": "名称书写规范", "blocks": [{"t": "table", "at": "no2", "head": ["错误写法", "规范名称"], "cols": "1fr 1fr", "rows": [{"at": "no2", "cells": ["双键", "{碳碳双键}"]}, {"at": "no2", "cells": ["酮基", "{酮羰基}"]}, {"at": "no2", "cells": ["胺基", "氨基"]}, {"at": "no2", "cells": ["酰氨基", "{酰胺基}"]}, {"at": "no3", "cells": ["苯基（作官能团）", "苯环不是官能团"]}], "size": 33, "rowHeight": 58}], "callout": {"label": "答题模板", "at": "no4", "text": "圈出全部官能团 → 按“含氧、含氮”{筛选} → 写规范名称"}, "beat": {"k": "alert", "at": "no3b", "text": "错一个字\n{这一空就没分|red}"}}} />;
