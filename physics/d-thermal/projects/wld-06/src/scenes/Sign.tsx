import React from 'react';
import {AutoScene} from '../components/auto';

export const Sign: React.FC = () => <AutoScene k="sign" d={{"tag": "考点六", "title": "符号约定", "blocks": [{"t": "table", "at": "s1", "head": ["物理量", "取正", "取负"], "cols": "1fr 1.6fr 1.6fr", "rows": [{"at": "s1", "cells": ["W", "外界对系统{做功}", "系统对外界做功"]}, {"at": "s2", "cells": ["Q", "系统{吸热}", "系统放热"]}, {"at": "s3", "cells": ["ΔU", "内能{增加}", "内能减少"]}], "size": 32, "rowHeight": 64}, {"t": "text", "at": "s4", "text": "气体：体积减小 → 外界对气体做功；体积增大 → 气体对外做功", "size": 30}], "callout": {"label": "易错", "at": "s5", "text": "理想气体温度不变：{ΔU = 0}"}}} />;
