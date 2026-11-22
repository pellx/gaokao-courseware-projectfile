import React from 'react';
import {AutoScene} from '../components/auto';

export const Record: React.FC = () => <AutoScene k="record" d={{"tag": "考点六", "title": "记录方法", "blocks": [{"t": "table", "at": "r1", "head": ["操作", "原磁场", "Φ 变化", "感应电流的磁场"], "cols": "1.3fr 1fr 1fr 1.4fr", "rows": [{"at": "r2", "cells": ["N 极插入", "向下", "增大", "{向上}"]}, {"at": "r2", "cells": ["N 极抽出", "向下", "减小", "{向下}"]}, {"at": "r3", "cells": ["S 极插入", "向上", "增大", "{向下}"]}, {"at": "r3", "cells": ["S 极抽出", "向上", "减小", "{向上}"]}], "size": 30, "rowHeight": 58}, {"t": "text", "at": "r2", "text": "（设磁体从线圈上方竖直插入、抽出）", "size": 26}], "callout": {"label": "要点", "at": "r4", "text": "四项：原磁场、{Φ 变化}、感应电流方向、{感应电流的磁场}"}, "beat": {"k": "a2", "at": "r3b", "text": "四项排成表\n{规律|red}自然出现"}}} />;
