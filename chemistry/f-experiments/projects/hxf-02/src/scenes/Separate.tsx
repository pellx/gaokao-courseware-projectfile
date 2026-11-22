import React from 'react';
import {AutoScene} from '../components/auto';

export const Separate: React.FC = () => <AutoScene k="separate" d={{"tag": "考点五", "title": "分离装置", "blocks": [{"t": "table", "at": "se1", "head": ["操作", "常见错误"], "cols": "1fr 3fr", "rows": [{"at": "se1", "cells": ["过滤", "没有{玻璃棒引流}；漏斗下端没靠烧杯内壁"]}, {"at": "se2", "cells": ["蒸发", "用烧杯；{完全蒸干}才停火"]}, {"at": "se3", "cells": ["蒸馏", "温度计插入液面下；冷凝水{上进下出}"]}, {"at": "se3", "cells": ["分液", "上层液体{从下口放出}"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "se4", "text": "错误多在{细节}"}}} />;
