import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "d1", "head": ["器材", "作用"], "cols": "1fr 2fr", "rows": [{"at": "d1", "cells": ["带滑轮的长木板", "放置小车，{引导}运动"]}, {"at": "d2", "cells": ["槽码、细绳", "{牵引}小车"]}, {"at": "d3", "cells": ["纸带（穿过限位孔）", "{记录}小车的运动"]}, {"at": "d4", "cells": ["刻度尺", "测量{点迹间距离}"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "d5", "text": "时间靠打点计时器，{不用秒表}"}}} />;
