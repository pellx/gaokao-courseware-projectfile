import React from 'react';
import {AutoScene} from '../components/auto';

export const Structure: React.FC = () => <AutoScene k="structure" d={{"tag": "考点二", "title": "多用电表的结构", "blocks": [{"t": "table", "at": "b1", "head": ["部件", "作用"], "cols": "1fr 2fr", "rows": [{"at": "b1", "cells": ["表盘", "电阻、直流电流和电压等{刻度线}"]}, {"at": "b2", "cells": ["选择开关", "选择{测量功能和量程}"]}, {"at": "b3", "cells": ["指针定位螺丝", "{机械调零}：指针对准左端零刻度"]}, {"at": "b3", "cells": ["欧姆调零旋钮", "{欧姆调零}：指针对准电阻零刻度"]}, {"at": "b4", "cells": ["红、黑表笔", "红插“{+}”，黑插“{−}”"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "要点", "at": "b4", "text": "红表笔插“{+}”，黑表笔插“{−}”"}}} />;
