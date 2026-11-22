import React from 'react';
import {AutoScene} from '../components/auto';

export const Addmono: React.FC = () => <AutoScene k="addmono" d={{"tag": "考点二", "title": "加聚物找单体", "blocks": [{"t": "table", "at": "am2", "head": ["链节主链", "单体"], "cols": "1.8fr 1.8fr", "rows": [{"at": "am2", "cells": ["—CH2—CHCl—（2 个碳）", "{CH2=CHCl}"]}, {"at": "am3", "cells": ["—CH2—CH=CH—CH2—（4 碳有双键）", "{CH2=CH—CH=CH2}"]}, {"at": "am4", "cells": ["4 碳无双键", "从中间断开：{两种烯烃}"]}], "size": 30, "rowHeight": 70}], "callout": {"label": "易错", "at": "am4", "text": "4 个碳无双键：{两种单烯烃}共聚"}}} />;
