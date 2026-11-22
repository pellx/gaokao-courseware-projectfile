import React from 'react';
import {AutoScene} from '../components/auto';

export const Classify: React.FC = () => <AutoScene k="class" d={{"tag": "考点二", "title": "材料的分类", "blocks": [{"t": "table", "at": "cl1", "head": ["类别", "例"], "cols": "1.4fr 2.6fr", "rows": [{"at": "cl1", "cells": ["{金属材料}", "钢、铝合金、钛合金"]}, {"at": "cl1", "cells": ["{无机非金属材料}", "陶瓷、玻璃、水泥、{碳纤维}、SiC"]}, {"at": "cl2", "cells": ["有机高分子材料", "塑料、合成纤维、合成橡胶"]}, {"at": "cl2", "cells": ["复合材料", "碳纤维增强复合材料、玻璃钢"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "易错", "at": "cl4", "text": "碳纤维是{无机非金属材料}"}}} />;
