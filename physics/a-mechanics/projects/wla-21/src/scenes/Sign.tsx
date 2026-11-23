import React from 'react';
import {AutoScene} from '../components/auto';

export const Sign: React.FC = () => <AutoScene k="sign" d={{"tag": "考点三", "title": "正功和负功", "blocks": [{"t": "table", "at": "c1", "head": ["夹角 α", "功"], "cols": "1fr 1fr", "rows": [{"at": "c1", "cells": ["0 ≤ α < 90°", "{正功}"]}, {"at": "c2", "cells": ["α = 90°", "不做功"]}, {"at": "c3", "cells": ["90° < α ≤ 180°", "{负功}（克服做功）"]}], "size": 32, "rowHeight": 60}], "callout": {"label": "易错", "at": "c4", "text": "正负{不表示方向}"}, "beat": {"k": "tug", "at": "c3b", "text": "同向：{正功|red}\n反向：{负功|red}"}}} />;
