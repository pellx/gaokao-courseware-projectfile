import React from 'react';
import {AutoScene} from '../components/auto';

export const QK: React.FC = () => <AutoScene k="qk" d={{"tag": "考点四", "title": "用 Q 与 K 判断方向", "blocks": [{"t": "table", "at": "qk2", "head": ["比较", "方向"], "cols": "1fr 2fr", "rows": [{"at": "qk2", "cells": ["Q < K", "{正向进行}，v(正) > v(逆)"]}, {"at": "qk2", "cells": ["Q = K", "平衡状态"]}, {"at": "qk2", "cells": ["Q > K", "{逆向进行|orange}，v(正) < v(逆)"]}], "size": 36, "rowHeight": 74}], "callout": {"label": "解题方法", "at": "qk4", "text": "问方向：{算 Q 与 K 比较}"}}} />;
