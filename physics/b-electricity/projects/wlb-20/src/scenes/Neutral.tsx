import React from 'react';
import {AutoScene} from '../components/auto';

export const Neutral: React.FC = () => <AutoScene k="neutral" d={{"tag": "考点三", "title": "中性面的特点", "blocks": [{"t": "table", "at": "c1", "head": ["位置", "Φ", "e", "电流方向"], "cols": "1.2fr 0.8fr 0.8fr 1.2fr", "rows": [{"at": "c1", "cells": ["中性面", "{最大}", "0", "{改变}"]}, {"at": "c3", "cells": ["与磁场平行", "0", "{最大}", "不变"]}], "size": 30, "rowHeight": 64}, {"t": "rule", "tag": "一周", "at": "c2", "text": "方向改变{两次}", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "c4", "text": "中性面 e = 0，平行时 e {最大}"}}} />;
