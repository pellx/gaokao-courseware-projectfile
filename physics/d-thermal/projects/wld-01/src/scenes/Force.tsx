import React from 'react';
import {AutoScene} from '../components/auto';

export const Force: React.FC = () => <AutoScene k="force" d={{"tag": "考点七", "title": "分子间的作用力", "blocks": [{"t": "rule", "tag": "同时存在", "at": "f1", "text": "引力和斥力都随 r 增大而减小，{斥力减小得更快}", "c": "red"}, {"t": "table", "at": "f2", "head": ["距离", "合力"], "cols": "1fr 1.4fr", "rows": [{"at": "f3", "cells": ["r < r_0", "{斥力|orange}"]}, {"at": "f2", "cells": ["r = r_0", "{零}"]}, {"at": "f3", "cells": ["r > r_0", "{引力}"]}, {"at": "f4", "cells": ["r > 10 r_0", "可以忽略"]}], "size": 32, "rowHeight": 58}], "callout": {"label": "易错", "at": "f5", "text": "r > r_0 时斥力仍存在，只是{引力更大}"}, "beat": {"k": "pair", "at": "f3b", "text": "分子间\n{既有引力又有斥力|red}"}}} />;
