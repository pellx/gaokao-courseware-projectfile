import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "d1", "head": ["器材", "作用"], "cols": "1fr 2.4fr", "rows": [{"at": "d1", "cells": ["电压表", "测金属丝两端的{电压 U}"]}, {"at": "d1", "cells": ["电流表", "测通过金属丝的{电流 I}"]}, {"at": "d2", "cells": ["滑动变阻器", "调节电流、电压，测{多组数据}"]}, {"at": "d3", "cells": ["电源、开关、导线", "组成电路"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "d4", "text": "{伏安法}测 R，再算出电阻率"}}} />;
