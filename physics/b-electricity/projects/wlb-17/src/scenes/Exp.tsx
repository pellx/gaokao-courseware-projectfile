import React from 'react';
import {AutoScene} from '../components/auto';

export const Exp: React.FC = () => <AutoScene k="exp" d={{"tag": "考点四", "title": "教材实验", "blocks": [{"t": "table", "at": "d1", "head": ["实验", "操作", "指针"], "cols": "1fr 1.4fr 0.8fr", "rows": [{"at": "d1", "cells": ["导体棒", "切割磁感线", "{偏转}"]}, {"at": "d2", "cells": ["磁体与线圈", "插入、拔出", "{偏转}"]}, {"at": "d3", "cells": ["两个线圈", "通断、移滑片", "{偏转}"]}], "size": 30, "rowHeight": 64}, {"t": "rule", "tag": "静止", "at": "d2", "text": "磁体不动、电流不变：{不偏转}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "d4", "text": "只在{磁通量变化}时偏转"}, "beat": {"k": "ahoge", "at": "d3b", "text": "变化的一瞬间\n指针{跳一下|red}"}}} />;
