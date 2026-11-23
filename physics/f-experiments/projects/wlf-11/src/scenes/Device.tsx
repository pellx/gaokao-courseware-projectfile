import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点二", "title": "器材的选择", "blocks": [{"t": "table", "at": "d1", "head": ["器材", "要求"], "cols": "1fr 2.4fr", "rows": [{"at": "d1", "cells": ["摆线", "{细}、{不易伸长}，长约 1 m"]}, {"at": "d2", "cells": ["摆球", "{质量大、体积小}，减小空气阻力"]}, {"at": "d3", "cells": ["悬点", "用{铁夹夹紧}，不缠绕在横杆上"]}], "size": 32, "rowHeight": 70}], "callout": {"label": "易错", "at": "d4", "text": "摆线缠在横杆上会{改变摆长}"}, "beat": {"k": "coin", "at": "d3b", "text": "悬点{牢牢固定|red}\n摆长才不会变"}}} />;
