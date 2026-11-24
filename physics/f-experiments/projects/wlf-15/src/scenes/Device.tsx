import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点二", "title": "器材及作用", "blocks": [{"t": "table", "at": "b1", "head": ["器材", "作用"], "cols": "1fr 2.4fr", "rows": [{"at": "b1", "cells": ["电压表", "测{路端电压 U}"]}, {"at": "b1", "cells": ["电流表", "测通过电源的{电流 I}"]}, {"at": "b2", "cells": ["滑动变阻器", "改变外电阻，测{多组数据}"]}, {"at": "b3", "cells": ["干电池、开关、导线", "被测电源，组成电路"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "要点", "at": "b4", "text": "电压表测 {U}，电流表测 {I}"}, "beat": {"k": "charge", "at": "b3b", "text": "被测的“电源”\n就是一节{干电池|red}"}}} />;
