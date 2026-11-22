import React from 'react';
import {AutoScene} from '../components/auto';

export const Judge: React.FC = () => <AutoScene k="judge" d={{"tag": "考点六", "title": "材料类别的判断", "blocks": [{"t": "table", "at": "ju2", "head": ["类别", "例子"], "cols": "1.2fr 3fr", "rows": [{"at": "ju2", "cells": ["{金属材料}", "钛合金、铝合金、不锈钢"]}, {"at": "ju3", "cells": ["{无机非金属材料|orange}", "陶瓷、玻璃、水泥、Si、SiO2、SiC、石墨烯"]}, {"at": "ju4", "cells": ["{有机高分子材料|green}", "塑料、合成纤维、合成橡胶"]}], "size": 32, "rowHeight": 76}], "callout": {"label": "解题方法", "at": "ju5", "text": "先认{主要成分}，再判断类别"}}} />;
