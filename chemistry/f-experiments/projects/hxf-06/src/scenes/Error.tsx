import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点六", "title": "误差分析", "blocks": [{"t": "table", "at": "er2", "head": ["操作", "V(标)", "结果"], "cols": "2.6fr 0.8fr 0.8fr", "rows": [{"at": "er2", "cells": ["滴定管未用标准液润洗", "偏大", "{偏高}"]}, {"at": "er2", "cells": ["尖嘴气泡：前有后无", "偏大", "{偏高}"]}, {"at": "er3", "cells": ["滴定后俯视读数", "偏小", "{偏低|orange}"]}, {"at": "er3", "cells": ["待测 Fe^2+ 被空气氧化", "偏小", "{偏低|orange}"]}], "size": 29, "rowHeight": 58}], "callout": {"label": "解题方法", "at": "er4", "text": "翻译成“{V(标) 偏大还是偏小}”"}, "beat": {"k": "bag", "at": "er3b", "text": "误差题只问：\n标准液{用多了还是用少了|red}"}}} />;
