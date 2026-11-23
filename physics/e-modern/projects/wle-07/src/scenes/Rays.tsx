import React from 'react';
import {AutoScene} from '../components/auto';

export const Rays: React.FC = () => <AutoScene k="rays" d={{"tag": "考点二", "title": "三种射线", "blocks": [{"t": "table", "at": "b2", "head": ["射线", "本质", "电离作用", "穿透能力"], "cols": "0.8fr 1.2fr 1fr 1.2fr", "rows": [{"at": "b2", "cells": ["α 射线", "{氦核流}", "{强}", "弱（一张纸）"]}, {"at": "b3", "cells": ["β 射线", "{电子流}", "较弱", "较强（几毫米铝）"]}, {"at": "b4", "cells": ["γ 射线", "{电磁波}", "最弱", "{最强}（几厘米铅）"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "易错", "at": "b5", "text": "电离 {α} 最强，穿透 {γ} 最强"}}} />;
