import React from 'react';
import {AutoScene} from '../components/auto';

export const Alarm: React.FC = () => <AutoScene k="alarm" d={{"tag": "考点四", "title": "门窗防盗报警装置", "blocks": [{"t": "table", "at": "a2", "head": ["门窗", "干簧管", "继电器", "结果"], "cols": "1fr 1fr 1fr 1.4fr", "rows": [{"at": "a2", "cells": ["紧闭", "接通", "工作", "发光二极管{亮}"]}, {"at": "a3", "cells": ["打开", "断开", "断电", "{蜂鸣器报警}"]}], "size": 36, "rowHeight": 96}], "callout": {"label": "易错", "at": "a4", "text": "门窗打开、干簧管{断开}时报警"}, "beat": {"k": "buzzer", "at": "a3b", "text": "门窗一开\n立刻{报警|red}"}}} />;
