import React from 'react';
import {AutoScene} from '../components/auto';

export const Four: React.FC = () => <AutoScene k="four" d={{"tag": "考点一", "title": "四种基本相互作用", "blocks": [{"t": "table", "at": "a2", "head": ["相互作用", "作用范围"], "cols": "1fr 1fr", "rows": [{"at": "a2", "cells": ["{引力}相互作用", "长程"]}, {"at": "a2", "cells": ["{电磁}相互作用", "长程"]}, {"at": "a3", "cells": ["{强}相互作用", "短程（原子核内）"]}, {"at": "a3", "cells": ["{弱}相互作用", "短程（更短）"]}], "size": 34, "rowHeight": 70}], "callout": {"label": "要点", "at": "a4", "text": "弹力、摩擦力本质是{电磁相互作用}"}, "beat": {"k": "four", "at": "a3b", "text": "基本相互作用\n只有{四种|red}"}}} />;
