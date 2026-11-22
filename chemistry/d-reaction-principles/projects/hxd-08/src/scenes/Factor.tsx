import React from 'react';
import {AutoScene} from '../components/auto';

export const Factor: React.FC = () => <AutoScene k="factor" d={{"tag": "考点三", "title": "影响电离平衡的因素", "blocks": [{"t": "table", "at": "fa1", "head": ["CH3COOH ⇌ CH3COO^- + H^+", "平衡移动", "电离程度"], "cols": "1.6fr 1fr 1fr", "rows": [{"at": "fa1", "cells": ["升温", "正移", "{增大}"]}, {"at": "fa2", "cells": ["加水稀释", "正移", "{增大}"]}, {"at": "fa3", "cells": ["加 CH3COONa 固体", "逆移", "{减小|orange}"]}, {"at": "fa4", "cells": ["加 NaOH", "正移", "增大"]}, {"at": "fa5", "cells": ["加冰醋酸", "正移", "{减小|orange}"]}], "size": 30, "rowHeight": 58}], "callout": {"label": "易错", "at": "fa5", "text": "加冰醋酸：平衡正移，电离程度{反而减小}"}}} />;
