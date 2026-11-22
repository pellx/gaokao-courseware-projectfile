import React from 'react';
import {AutoScene} from '../components/auto';

export const Dilute: React.FC = () => <AutoScene k="dilute" d={{"tag": "考点六", "title": "稀释时 pH 的变化", "blocks": [{"t": "table", "at": "dl1", "head": ["稀释 10 倍", "pH 变化"], "cols": "1.2fr 1.2fr", "rows": [{"at": "dl1", "cells": ["强酸", "增大 {1}"]}, {"at": "dl1", "cells": ["弱酸", "增大{不到 1|orange}"]}, {"at": "dl2", "cells": ["强碱", "减小 1"]}, {"at": "dl2", "cells": ["弱碱", "减小不到 1"]}], "size": 33, "rowHeight": 64}, {"t": "big", "at": "dl3", "text": "无限稀释：pH 只能{接近 7}", "size": 40}], "callout": {"label": "易错", "at": "dl4", "text": "pH = 5 的盐酸稀释 1000 倍：pH {接近 7}，不是 8"}, "beat": {"k": "sit", "at": "dl3b", "text": "再怎么稀释\n酸也{变不成碱|red}"}}} />;
