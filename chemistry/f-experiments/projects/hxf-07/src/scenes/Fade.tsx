import React from 'react';
import {AutoScene} from '../components/auto';

export const Fade: React.FC = () => <AutoScene k="fade" d={{"tag": "考点三", "title": "陷阱二：褪色不一定是漂白", "blocks": [{"t": "table", "at": "fd1", "head": ["现象", "原因"], "cols": "2.4fr 1.4fr", "rows": [{"at": "fd1", "cells": ["SO2 使酸性 KMnO4 褪色", "{还原性}"]}, {"at": "fd2", "cells": ["SO2 使溴水褪色", "还原性"]}, {"at": "fd2", "cells": ["SO2 使含酚酞的 NaOH 溶液褪色", "酸性氧化物"]}, {"at": "fd2", "cells": ["SO2 使品红褪色", "{漂白性}"]}, {"at": "fd3", "cells": ["苯使溴水层褪色", "{萃取}"]}], "size": 29, "rowHeight": 56}], "callout": {"label": "易错", "at": "fd4", "text": "Cl2 使湿布条褪色：是 {HClO} 在漂白"}, "beat": {"k": "cookie", "at": "fd3b", "text": "同样“颜色没了”\n{原因可能不同|red}"}}} />;
