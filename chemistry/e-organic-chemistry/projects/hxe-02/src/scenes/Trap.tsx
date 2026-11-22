import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点七", "title": "命名易错辨析", "blocks": [{"t": "table", "at": "tr1", "head": ["错误名称", "错因", "正确名称"], "cols": "1.2fr 1.3fr 1.2fr", "rows": [{"at": "tr1", "cells": ["2-乙基丁烷", "主链没选最长", "{3-甲基戊烷}"]}, {"at": "tr2", "cells": ["3-甲基丁烷", "编号方向反了", "{2-甲基丁烷}"]}, {"at": "tr3", "cells": ["2-甲基-3-丁烯", "双键位次不是最小", "{3-甲基-1-丁烯}"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "tr4", "text": "按名称{写出结构}，再重新命名"}, "beat": {"k": "angry", "at": "tr3b", "text": "出现“2-乙基”\n八成是{主链选错了|red}"}}} />;
