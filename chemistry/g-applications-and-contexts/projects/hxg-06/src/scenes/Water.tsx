import React from 'react';
import {AutoScene} from '../components/auto';

export const Water: React.FC = () => <AutoScene k="water" d={{"tag": "考点四", "title": "水污染与废水处理", "blocks": [{"t": "table", "at": "wa1", "head": ["方法", "对象", "例"], "cols": "1fr 1.4fr 2fr", "rows": [{"at": "wa1", "cells": ["中和法", "酸碱废水", "熟石灰"]}, {"at": "wa2", "cells": ["{沉淀法}", "重金属离子", "Na2S → CuS、HgS"]}, {"at": "wa2", "cells": ["氧化还原法", "Cr2O7^2-", "还原成 Cr^3+ 再沉淀"]}, {"at": "wa3", "cells": ["混凝法", "悬浮物", "明矾、FeCl3"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "易错", "at": "wa4", "text": "明矾能{净水}，不能消毒"}, "beat": {"k": "friends", "at": "wa3b", "text": "处理废水\n{对症下药|red}"}}} />;
