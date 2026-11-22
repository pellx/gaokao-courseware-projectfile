import React from 'react';
import {AutoScene} from '../components/auto';

export const Culture: React.FC = () => <AutoScene k="culture" d={{"tag": "考点七", "title": "传统文化中的化学", "blocks": [{"t": "table", "at": "cu2", "head": ["原文", "解读", "变化"], "cols": "2.2fr 1.6fr 0.8fr", "rows": [{"at": "cu2", "cells": ["熬胆矾铁釜，久之亦化为铜", "Fe + CuSO4 → Cu（置换）", "{化学}"]}, {"at": "cu3", "cells": ["青蒿一握，以水二升渍，绞取汁", "萃取青蒿素", "{物理|green}"]}, {"at": "cu4", "cells": ["凡酸坏之酒，皆可蒸烧", "蒸馏", "{物理|green}"]}, {"at": "cu4", "cells": ["吹尽狂沙始到金", "淘金（金化学性质稳定）", "{物理|green}"]}, {"at": "cu5", "cells": ["爆竹声中一岁除、蜡炬成灰", "燃烧", "{化学}"]}], "size": 29, "rowHeight": 60}], "callout": {"label": "解题方法", "at": "cu6", "text": "抓动词：“化为、烧、燃”→ 化学变化；“渍、淘、蒸烧”→ 分离操作"}}} />;
