import React from 'react';
import {AutoScene} from '../components/auto';

export const Three: React.FC = () => <AutoScene k="three" d={{"tag": "考点五", "title": "三段式", "blocks": [{"t": "table", "at": "th1", "head": ["N2 + 3H2 ⇌ 2NH3", "N2", "H2", "NH3"], "cols": "1.6fr 1fr 1fr 1fr", "rows": [{"at": "th2", "cells": ["起始 / mol", "2", "6", "0"]}, {"at": "th2", "cells": ["转化 / mol", "{1}", "{3}", "{2}"]}, {"at": "th3", "cells": ["平衡 / mol", "1", "3", "2"]}, {"at": "th3", "cells": ["平衡浓度 / (mol/L)", "0.5", "1.5", "1"]}], "size": 31, "rowHeight": 60}, {"t": "big", "at": "th3", "text": "K = 1² ÷ (0.5 × 1.5³) ≈ {0.59}", "size": 38}], "callout": {"label": "易错", "at": "th4", "text": "算 K 用{平衡浓度}：物质的量要{除以体积}"}, "beat": {"k": "dino", "at": "th3b", "text": "起始、转化、平衡\n{三行对齐|red}"}}} />;
