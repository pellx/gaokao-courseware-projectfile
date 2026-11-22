import React from 'react';
import {AutoScene} from '../components/auto';

export const Cu: React.FC = () => <AutoScene k="cu" d={{"tag": "考点一", "title": "铜的价态与颜色", "blocks": [{"t": "table", "at": "cu1", "head": ["物质", "价态", "颜色"], "cols": "1.4fr 0.8fr 1.4fr", "rows": [{"at": "cu1", "cells": ["Cu", "0", "{紫红色}"]}, {"at": "cu1", "cells": ["Cu2O", "+1", "{砖红色}"]}, {"at": "cu1", "cells": ["CuO", "+2", "黑色"]}, {"at": "cu1", "cells": ["CuSO4 / CuSO4·5H2O", "+2", "白色 / 蓝色晶体"]}], "size": 31, "rowHeight": 62}, {"t": "big", "at": "cu2", "text": "Cu2O + 2H^+ = Cu + Cu^2+ + H2O（{Cu^+ 歧化}）", "size": 38}], "callout": {"label": "易错", "at": "cu4", "text": "检验 Cu 中的 Cu2O：用{稀硫酸}，不用稀硝酸"}}} />;
