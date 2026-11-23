import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "d1", "head": ["器材", "作用"], "cols": "1fr 2fr", "rows": [{"at": "d1", "cells": ["方木板、白纸、图钉", "记录、作图，{固定}橡皮条一端"]}, {"at": "d2", "cells": ["细绳套", "连接测力计，显示{方向}"]}, {"at": "d3", "cells": ["两个弹簧测力计", "测拉力{大小}"]}, {"at": "d4", "cells": ["刻度尺、三角板", "{作图}"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "d5", "text": "大小看{测力计}，方向看{细绳}"}}} />;
