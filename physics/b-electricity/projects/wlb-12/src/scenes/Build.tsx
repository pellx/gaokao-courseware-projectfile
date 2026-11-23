import React from 'react';
import {AutoScene} from '../components/auto';

export const Build: React.FC = () => <AutoScene k="build" d={{"tag": "考点五", "title": "磁电式电流表的构造", "blocks": [{"t": "table", "at": "e1", "head": ["部件", "作用"], "cols": "1fr 2fr", "rows": [{"at": "e1", "cells": ["蹄形磁体、极靴", "提供磁场"]}, {"at": "e2", "cells": ["软铁圆柱", "使磁场沿{半径方向}"]}, {"at": "e1", "cells": ["线圈", "通电后受{安培力}"]}, {"at": "e1", "cells": ["螺旋弹簧", "阻碍线圈转动"]}], "size": 30, "rowHeight": 60}, {"t": "rule", "tag": "辐向磁场", "at": "e3", "text": "线圈平面总与磁感线{平行}", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "e4", "text": "辐向磁场：安培力{不随转角变化}"}}} />;
