import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点六", "title": "能源与能量转化", "blocks": [{"t": "table", "at": "en1", "head": ["装置或过程", "能量转化"], "cols": "1.8fr 2fr", "rows": [{"at": "en1", "cells": ["太阳能电池板", "{光能 → 电能}"]}, {"at": "en1", "cells": ["燃料电池、电池放电", "{化学能 → 电能}"]}, {"at": "en2", "cells": ["电解、充电", "电能 → 化学能"]}, {"at": "en2", "cells": ["光合作用", "光能 → 化学能"]}, {"at": "en3", "cells": ["核电站", "核能（{非化学变化}）"]}], "size": 31, "rowHeight": 56}], "callout": {"label": "易错", "at": "en4", "text": "太阳能电池：{光电转化}；核反应不是化学变化"}}} />;
