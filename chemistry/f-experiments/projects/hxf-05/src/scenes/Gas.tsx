import React from 'react';
import {AutoScene} from '../components/auto';

export const Gas: React.FC = () => <AutoScene k="gas" d={{"tag": "考点六", "title": "常见气体的检验", "blocks": [{"t": "table", "at": "ga1", "head": ["气体", "检验"], "cols": "0.8fr 3fr", "rows": [{"at": "ga1", "cells": ["Cl2", "湿润{淀粉 KI 试纸}变蓝"]}, {"at": "ga1", "cells": ["SO2", "{品红}褪色，加热恢复"]}, {"at": "ga2", "cells": ["NH3", "湿润红色石蕊试纸变蓝；遇浓盐酸白烟"]}, {"at": "ga3", "cells": ["O2", "带火星木条{复燃}"]}, {"at": "ga3", "cells": ["NO", "遇空气变{红棕色}"]}], "size": 30, "rowHeight": 56}], "callout": {"label": "易错", "at": "ga4", "text": "淀粉 KI 试纸变蓝：{不一定是 Cl2}"}, "beat": {"k": "kitachibi", "at": "ga3b", "text": "每种气体都有\n{“身份证”|red}"}}} />;
