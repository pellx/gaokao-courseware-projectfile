import React from 'react';
import {AutoScene} from '../components/auto';

export const Poly: React.FC = () => <AutoScene k="poly" d={{"tag": "考点四", "title": "加聚反应与缩聚反应", "blocks": [{"t": "table", "at": "po1", "head": ["比较项目", "加聚", "缩聚"], "cols": "1fr 1.5fr 1.8fr", "rows": [{"at": "po1", "cells": ["单体", "含不饱和键", "含{两个以上}官能团"]}, {"at": "po2", "cells": ["小分子", "{无}", "{有}（通常是 H2O）"]}, {"at": "po3", "cells": ["例", "聚乙烯", "聚酯、多肽、酚醛树脂"]}], "size": 31, "rowHeight": 64}], "callout": {"label": "易错", "at": "po4", "text": "缩聚别漏小分子：H2O 系数 {2n − 1} 或 n − 1"}}} />;
