import React from 'react';
import {AutoScene} from '../components/auto';

export const Types: React.FC = () => <AutoScene k="types" d={{"tag": "考点五", "title": "惰性电极电解的四种类型", "blocks": [{"t": "table", "at": "ty1", "head": ["类型", "实例", "pH 变化"], "cols": "1.2fr 1.8fr 1fr", "rows": [{"at": "ty1", "cells": ["电解水型", "H2SO4、NaOH、Na2SO4", "看原溶液"]}, {"at": "ty2", "cells": ["电解电解质型", "HCl、CuCl2", "HCl 增大"]}, {"at": "ty3", "cells": ["{放 H2 生碱型}", "NaCl", "{增大}"]}, {"at": "ty3", "cells": ["{放 O2 生酸型|orange}", "CuSO4、AgNO3", "{减小|orange}"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "ty4", "text": "写出{两极放电离子}，就能分类"}}} />;
