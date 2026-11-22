import React from 'react';
import {AutoScene} from '../components/auto';

export const Cmp: React.FC = () => <AutoScene k="cmp" d={{"tag": "考点四", "title": "Na2O 与 Na2O2 的比较", "blocks": [{"t": "table", "at": "cm1", "head": ["比较项目", "Na2O", "Na2O2"], "cols": "1.2fr 1fr 1.2fr", "rows": [{"at": "cm1", "cells": ["颜色", "白色", "{淡黄色|orange}"]}, {"at": "cm2", "cells": ["氧的化合价", "−2", "{−1}"]}, {"at": "cm3", "cells": ["阴离子", "O^2-", "{O2^2-}（过氧根）"]}, {"at": "cm3", "cells": ["阴、阳离子个数比", "1 : 2", "{1 : 2}"]}, {"at": "cm4", "cells": ["化学键", "离子键", "离子键、非极性共价键"]}, {"at": "cm4", "cells": ["类别", "碱性氧化物", "{不是}碱性氧化物"]}], "size": 30, "rowHeight": 56}], "callout": {"label": "易错", "at": "cm5", "text": "Na2O2 阴、阳离子个数比 {1 : 2}，阴离子是一个 O2^2-"}}} />;
