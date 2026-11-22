import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="compare" d={{"tag": "考点四", "title": "水解与消去的比较", "blocks": [{"t": "table", "at": "cp1", "head": ["比较项目", "水解", "消去"], "cols": "1fr 1.5fr 1.5fr", "rows": [{"at": "cp1", "cells": ["条件", "NaOH {水}溶液，△", "NaOH {醇}溶液，△"]}, {"at": "cp2", "cells": ["产物", "{醇}", "{烯烃|orange}"]}, {"at": "cp2", "cells": ["结构要求", "无", "β-碳上有氢"]}, {"at": "cp2", "cells": ["反应类型", "取代", "消去"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "cp4", "text": "{无醇成醇，有醇成烯}"}}} />;
