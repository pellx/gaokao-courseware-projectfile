import React from 'react';
import {AutoScene} from '../components/auto';

export const Second: React.FC = () => <AutoScene k="second" d={{"tag": "考点五", "title": "第二、第三宇宙速度", "blocks": [{"t": "table", "at": "e1", "head": ["速度", "数值", "意义"], "cols": "1fr 1fr 2fr", "rows": [{"at": "e1", "cells": ["第一", "7.9 km/s", "近地环绕"]}, {"at": "e1", "cells": ["第二", "{11.2 km/s}", "挣脱{地球}"]}, {"at": "e2", "cells": ["第三", "{16.7 km/s}", "挣脱{太阳}"]}], "size": 32, "rowHeight": 60}, {"t": "text", "at": "e3", "text": "7.9～11.2 km/s：{椭圆}轨道", "size": 32}], "callout": {"label": "要点", "at": "e4", "text": "都是{地面发射}速度"}}} />;
