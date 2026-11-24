import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点八", "title": "误差来源", "blocks": [{"t": "table", "at": "e1", "head": ["原因", "影响", "直径 d"], "cols": "2.2fr 1.2fr 1fr", "rows": [{"at": "e1", "cells": ["爽身粉撒得太厚", "S 偏小", "{偏大}"]}, {"at": "e2", "cells": ["油膜未稳定就描轮廓", "S 不准", "不准"]}, {"at": "e3", "cells": ["滴数多数了", "V 偏小", "{偏小}"]}, {"at": "e4", "cells": ["溶液久置，浓度变大", "V 偏小", "{偏小}"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "要点", "at": "e5", "text": "看 {d = V/S}：V 小 d 小，S 小 d 大"}}} />;
