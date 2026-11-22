import React from 'react';
import {AutoScene} from '../components/auto';

export const Dilute: React.FC = () => <AutoScene k="dilute" d={{"tag": "考点四", "title": "稀释弱酸", "blocks": [{"t": "table", "at": "di1", "head": ["稀释 CH3COOH 溶液", "变化"], "cols": "1.6fr 1fr", "rows": [{"at": "di1", "cells": ["n(H^+)", "{增大}"]}, {"at": "di2", "cells": ["c(H^+)", "{减小|orange}"]}, {"at": "di2", "cells": ["pH", "增大"]}, {"at": "di3", "cells": ["c(CH3COO^-)/c(CH3COOH) = K_a/c(H^+)", "{增大}"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "di4", "text": "比值题：{凑成 K_a 或 K_w}，看剩下的量"}, "beat": {"k": "box", "at": "di3b", "text": "稀释：箱子变大\n人多了，但{更稀了|red}"}}} />;
