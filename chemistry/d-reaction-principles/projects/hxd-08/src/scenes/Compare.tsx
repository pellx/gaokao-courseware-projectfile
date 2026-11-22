import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="compare" d={{"tag": "考点七", "title": "强酸与弱酸的比较", "blocks": [{"t": "table", "at": "cp1", "head": ["比较项目", "等浓度：盐酸 vs 醋酸", "等 pH：盐酸 vs 醋酸"], "cols": "1.1fr 1.5fr 1.5fr", "rows": [{"at": "cp1", "cells": ["c(H^+)", "盐酸{大}", "相等"]}, {"at": "cp2", "cells": ["酸的浓度", "相等", "醋酸{大得多}"]}, {"at": "cp2", "cells": ["中和 NaOH 的量", "{相同}", "醋酸{多}"]}, {"at": "cp2", "cells": ["与足量 Zn 生成 H2", "相同", "醋酸{多}"]}, {"at": "cp3", "cells": ["稀释相同倍数 pH 变化", "—", "醋酸{更小}"]}], "size": 29, "rowHeight": 58}], "callout": {"label": "解题方法", "at": "cp4", "text": "先分清“{等浓度}”还是“{等 pH}”"}}} />;
