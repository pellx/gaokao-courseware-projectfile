import React from 'react';
import {AutoScene} from '../components/auto';

export const Clock: React.FC = () => <AutoScene k="clock" d={{"tag": "考点七", "title": "摆钟", "blocks": [{"t": "rule", "tag": "原理", "at": "k1", "text": "利用单摆的{等时性}计时", "c": "red"}, {"t": "table", "at": "k2", "head": ["走时", "周期", "调节"], "cols": "1fr 1fr 1.2fr", "rows": [{"at": "k2", "cells": ["走慢", "偏大", "摆长{调短}"]}, {"at": "k3", "cells": ["走快", "偏小", "摆长{调长}"]}], "size": 32, "rowHeight": 80}], "callout": {"label": "要点", "at": "k4", "text": "g 变大，周期变小，{走快}"}}} />;
