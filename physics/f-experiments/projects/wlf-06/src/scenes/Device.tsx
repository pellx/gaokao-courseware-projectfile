import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点二", "title": "器材及作用（参考案例 1）", "blocks": [{"t": "table", "at": "d1", "head": ["器材", "作用"], "cols": "1fr 2fr", "rows": [{"at": "d1", "cells": ["小车、带滑轮的长木板", "研究对象及其轨道"]}, {"at": "d2", "cells": ["槽码、细绳", "槽码重力作为{拉力}"]}, {"at": "d3", "cells": ["打点计时器、纸带", "测{加速度}"]}, {"at": "d4", "cells": ["天平、砝码", "测质量，车上增减砝码改变{质量}"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "d5", "text": "槽码改变{拉力}，车上砝码改变{质量}"}}} />;
