import React from 'react';
import {AutoScene} from '../components/auto';

export const Count: React.FC = () => <AutoScene k="count" d={{"tag": "考点五", "title": "微粒数的计算", "blocks": [{"t": "table", "at": "ct2", "head": ["物质（1 mol）", "所求粒子", "物质的量"], "cols": "1.4fr 1.4fr 1fr", "rows": [{"at": "ct2", "cells": ["H2O", "原子 / 质子 / 电子", "3 / {10} / 10 mol"]}, {"at": "ct3", "cells": ["Na2O2", "Na^+ / 阴离子 O2^2-", "2 / {1} mol"]}, {"at": "ct4", "cells": ["32 g O2 与 O3 混合", "O 原子", "{2 mol|orange}"]}, {"at": "ct5", "cells": ["46 g NO2 与 N2O4 混合", "原子总数", "{3 mol|orange}"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "ct5", "text": "混合物先找{共同的最简式}，按最简式直接算"}, "beat": {"k": "crowd", "at": "ct4b", "text": "怎么分组都一样\n{按最简式数|red}"}}} />;
