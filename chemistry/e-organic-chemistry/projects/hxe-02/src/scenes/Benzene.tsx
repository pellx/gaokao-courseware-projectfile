import React from 'react';
import {AutoScene} from '../components/auto';

export const Benzene: React.FC = () => <AutoScene k="benzene" d={{"tag": "考点五", "title": "苯的同系物的命名", "blocks": [{"t": "table", "at": "bz2", "head": ["习惯命名", "系统命名"], "cols": "1fr 1fr", "rows": [{"at": "bz2", "cells": ["{邻}二甲苯", "{1,2-}二甲苯"]}, {"at": "bz2", "cells": ["{间}二甲苯", "{1,3-}二甲苯"]}, {"at": "bz2", "cells": ["{对}二甲苯", "{1,4-}二甲苯"]}], "size": 36, "rowHeight": 66}], "callout": {"label": "易错", "at": "bz4", "text": "位次之和最小：{1,3-}，不是 1,5-"}}} />;
