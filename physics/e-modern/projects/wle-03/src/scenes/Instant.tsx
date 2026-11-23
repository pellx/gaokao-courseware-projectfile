import React from 'react';
import {AutoScene} from '../components/auto';

export const Instant: React.FC = () => <AutoScene k="instant" d={{"tag": "考点六", "title": "瞬时性与经典理论的困难", "blocks": [{"t": "rule", "tag": "瞬时性", "at": "f1", "text": "光照后几乎立即产生光电流，不超过 {10^-9 s}", "c": "red"}, {"t": "table", "at": "f2", "head": ["实验事实", "经典理论的预言"], "cols": "1fr 1fr", "rows": [{"at": "f2", "cells": ["存在{截止频率}", "光够强、够久就能逸出"]}, {"at": "f3", "cells": ["U_c 与{光强无关}", "光越强，初动能越大"]}, {"at": "f4", "cells": ["{瞬时}产生光电流", "弱光需要积累时间"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "要点", "at": "f5", "text": "三条规律，经典理论{都解释不了}"}}} />;
