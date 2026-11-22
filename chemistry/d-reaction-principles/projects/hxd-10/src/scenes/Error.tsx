import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点四", "title": "误差分析", "blocks": [{"t": "big", "at": "er1", "text": "一切归结到 {V(标)} 偏大还是偏小", "size": 40}, {"t": "table", "at": "er2", "head": ["操作", "V(标)", "结果"], "cols": "2.4fr 0.8fr 0.8fr", "rows": [{"at": "er2", "cells": ["滴定管未用标准液润洗", "偏大", "{偏高}"]}, {"at": "er2", "cells": ["锥形瓶用待测液润洗", "偏大", "{偏高}"]}, {"at": "er3", "cells": ["尖嘴滴定前有气泡、后消失", "偏大", "{偏高}"]}, {"at": "er3", "cells": ["滴定后俯视读数", "偏小", "{偏低|orange}"]}], "size": 29, "rowHeight": 58}], "callout": {"label": "解题方法", "at": "er4", "text": "0 刻度在上：{俯视读数偏小、仰视偏大}"}, "beat": {"k": "panic", "at": "er3b", "text": "尖嘴{气泡|red}算进体积\n结果偏高"}}} />;
