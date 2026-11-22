import React from 'react';
import {AutoScene} from '../components/auto';

export const Steel: React.FC = () => <AutoScene k="steel" d={{"tag": "考点二", "title": "铁合金", "blocks": [{"t": "table", "at": "st1", "head": ["铁合金", "含碳量", "性能"], "cols": "1fr 1.3fr 1.6fr", "rows": [{"at": "st1", "cells": ["生铁", "{2%～4.3%}", "硬而脆"]}, {"at": "st1", "cells": ["钢", "{0.03%～2%}", "有韧性"]}, {"at": "st2", "cells": ["不锈钢", "加 {Cr、Ni}", "不易生锈"]}], "size": 33, "rowHeight": 72}], "callout": {"label": "易错", "at": "st3", "text": "生铁和钢都是{铁合金}；区别在含碳量"}, "beat": {"k": "armor", "at": "st2b", "text": "一身铠甲\n{不锈钢|red}加了 Cr、Ni"}}} />;
