import React from 'react';
import {AutoScene} from '../components/auto';

export const VStruct: React.FC = () => <AutoScene k="vstruct" d={{"tag": "考点三", "title": "游标卡尺的结构", "blocks": [{"t": "table", "at": "s1", "head": ["部件", "作用"], "cols": "1fr 2fr", "rows": [{"at": "s1", "cells": ["主尺 + 游标尺", "游标尺沿主尺{滑动}"]}, {"at": "s2", "cells": ["外测量爪", "测{外径}、厚度"]}, {"at": "s3", "cells": ["内测量爪", "测{内径}"]}, {"at": "s4", "cells": ["深度尺", "测{深度}"]}, {"at": "s4", "cells": ["紧固螺钉", "{固定}游标尺"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "要点", "at": "s5", "text": "外测量爪、内测量爪、深度尺：{外径、内径、深度}"}}} />;
