import React from 'react';
import {AutoScene} from '../components/auto';

export const Affect: React.FC = () => <AutoScene k="affect" d={{"tag": "考点二", "title": "影响水的电离", "blocks": [{"t": "table", "at": "af1", "head": ["加入", "水的电离", "K_w"], "cols": "1.6fr 1fr 1fr", "rows": [{"at": "af1", "cells": ["酸、碱、NaHSO4", "{抑制}", "不变"]}, {"at": "af2", "cells": ["NH4Cl、CH3COONa 等水解盐", "{促进|orange}", "不变"]}, {"at": "af3", "cells": ["升温", "促进", "{增大}"]}, {"at": "af3", "cells": ["Na", "促进", "不变"]}, {"at": "af4", "cells": ["NaCl", "不影响", "不变"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "易错", "at": "af4", "text": "NaHSO4 {抑制}水的电离；NaCl 不影响"}}} />;
