import React from 'react';
import {AutoScene} from '../components/auto';

export const Separate: React.FC = () => <AutoScene k="separate" d={{"tag": "考点一", "title": "分离操作", "blocks": [{"t": "table", "at": "se1", "head": ["情况", "操作"], "cols": "2fr 2fr", "rows": [{"at": "se1", "cells": ["产物溶解度随温度变化大", "{蒸发浓缩、冷却结晶}"]}, {"at": "se2", "cells": ["杂质溶解度随温度变化大", "{蒸发结晶、趁热过滤}"]}], "size": 31, "rowHeight": 66}, {"t": "big", "at": "se3", "text": "M^2+ + 2HR ⇌ MR2 + 2H^+　加酸 → {反萃取}", "size": 36}], "callout": {"label": "解题方法", "at": "se4", "text": "c(H^+) 增大，平衡{逆移} → 反萃取"}}} />;
