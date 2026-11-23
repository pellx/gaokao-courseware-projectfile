import React from 'react';
import {AutoScene} from '../components/auto';

export const Laser: React.FC = () => <AutoScene k="laser" d={{"tag": "考点十", "title": "激光的特性和应用", "blocks": [{"t": "table", "at": "j1", "head": ["特性", "应用"], "cols": "1fr 2fr", "rows": [{"at": "j2", "cells": ["{相干性好}", "光纤通信、全息照相"]}, {"at": "j3", "cells": ["{平行度好}", "精确测距、读取光盘"]}, {"at": "j3", "cells": ["{亮度高}", "切割、焊接、“光刀”"]}], "size": 34, "rowHeight": 72}], "callout": {"label": "要点", "at": "j4", "text": "{相干性、平行度、亮度}"}, "beat": {"k": "saber", "at": "j3b", "text": "又直又亮\n{平行度好、亮度高|red}"}}} />;
