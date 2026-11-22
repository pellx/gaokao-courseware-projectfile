import React from 'react';
import {AutoScene} from '../components/auto';

export const Four: React.FC = () => <AutoScene k="four" d={{"tag": "考点一", "title": "“四同”辨析", "blocks": [{"t": "table", "at": "fo1", "head": ["概念", "对象", "例"], "cols": "1fr 1.6fr 1.6fr", "rows": [{"at": "fo1", "cells": ["同位素", "原子", "C-12 与 C-14"]}, {"at": "fo1", "cells": ["同素异形体", "单质", "金刚石与石墨"]}, {"at": "fo2", "cells": ["{同系物}", "结构相似，差 n 个 CH2", "CH4 与 C2H6"]}, {"at": "fo3", "cells": ["{同分异构体}", "分子式同，结构不同", "正丁烷与异丁烷"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "易错", "at": "fo4", "text": "同系物必须{同一类物质}：苯酚与苯甲醇不是"}, "beat": {"k": "twins", "at": "fo3b", "text": "看着一样\n{结构不同|red}"}}} />;
