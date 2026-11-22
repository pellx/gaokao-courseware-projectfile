import React from 'react';
import {AutoScene} from '../components/auto';

export const Exclude: React.FC = () => <AutoScene k="exclude" d={{"tag": "考点五", "title": "排除干扰", "blocks": [{"t": "big", "at": "ex1", "text": "两种可能 → {去掉一种}，看现象还在不在", "size": 40}, {"t": "table", "at": "ex3", "head": ["常见干扰", "排除方法"], "cols": "1.4fr 2.4fr", "rows": [{"at": "ex3", "cells": ["{溶解氧}", "煮沸后冷却、通 N2、液面加油封"]}, {"at": "ex2", "cells": ["酸碱性", "用{相同 pH} 的溶液对照"]}, {"at": "ex3", "cells": ["其他离子", "换成只差一个离子的试剂"]}], "size": 31, "rowHeight": 64}], "callout": {"label": "答题模板", "at": "ex4", "text": "“若……，则{排除了……的干扰}”"}}} />;
