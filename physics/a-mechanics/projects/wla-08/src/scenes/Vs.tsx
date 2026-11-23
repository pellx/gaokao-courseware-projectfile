import React from 'react';
import {AutoScene} from '../components/auto';

export const Vs: React.FC = () => <AutoScene k="vs" d={{"tag": "考点六", "title": "相互作用力与平衡力", "blocks": [{"t": "table", "at": "f2", "head": ["", "相互作用力", "平衡力"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "f1", "cells": ["大小方向", "等大、反向、共线", "等大、反向、共线"]}, {"at": "f2", "cells": ["受力物体", "{两个}物体", "{同一}物体"]}, {"at": "f3", "cells": ["力的性质", "{一定相同}", "{不一定}相同"]}, {"at": "f3", "cells": ["依存关系", "同时产生、同时消失", "可单独存在"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "易错", "at": "f5", "text": "看受力物体：{两个}还是{同一个}"}}} />;
