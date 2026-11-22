import React from 'react';
import {AutoScene} from '../components/auto';

export const Err: React.FC = () => <AutoScene k="err" d={{"tag": "考点六", "title": "滴定误差分析", "blocks": [{"t": "table", "at": "er2", "head": ["操作", "标准液 V", "结果"], "cols": "2.6fr 1fr 1fr", "rows": [{"at": "er2", "cells": ["滴定管未用标准液润洗", "偏大", "{偏高}"]}, {"at": "er3", "cells": ["滴定前有气泡，滴定后消失", "偏大", "{偏高}"]}, {"at": "er3", "cells": ["滴定后俯视读数", "偏小", "{偏低|orange}"]}, {"at": "er4", "cells": ["锥形瓶用待测液润洗", "偏大", "{偏高}"]}, {"at": "er4", "cells": ["锥形瓶中有少量水", "不变", "{无影响|green}"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "解题方法", "at": "er5", "text": "都翻译成“{标准液 V 偏大还是偏小}”"}, "beat": {"k": "think", "at": "er3b", "text": "别慌\n{只问 V 怎么变|red}"}}} />;
